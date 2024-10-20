import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Apartment } from "../entity/apartment";
import { Between, ILike } from "typeorm";
import { validationResult } from "express-validator";

const Fuse = require("fuse.js");

export class ApartmentController {
  private apartmentRepository = AppDataSource.getRepository(Apartment);

  all = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const search = request.query.search;
      const apartments = await this.apartmentRepository.find({
        select: ["id", "name", "unitNumber", "location", "price"],
      });
      let filteredApartments = apartments;
      if (search) {
        const options = {
          keys: ["name", "unitNumber", "project"],
          threshold: 0.5,
        };

        const fuse = new Fuse(apartments, options);
        const results = fuse.search(search);
        filteredApartments = results.map((r: any) => r.item);
      }
      response.json(filteredApartments);
    } catch (error) {
      next(error);
    }
  };

  one = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = parseInt(request.params.id);
      const apartment = await this.apartmentRepository.findOne({
        where: { id },
      });

      if (!apartment) {
        return response.status(404).json({ message: "Apartment not found" });
      }
      return response.json(apartment);
    } catch (error) {
      next(error);
    }
  };

  filter = async (request: Request, response: Response, next: NextFunction) => {
    try {
      let { name, unitNumber, project, minPrice, maxPrice } = request.query;

      let filters: any = {};

      if (name && typeof name === "string") {
        filters = { ...filters, name: ILike(`%${name}%`) };
      }
      if (unitNumber && typeof unitNumber === "string") {
        filters = { ...filters, unitNumber: ILike(`%${unitNumber}%`) };
      }
      if (project && typeof project === "string") {
        filters = { ...filters, project: ILike(`%${project}%`) };
      }
      if (!minPrice) {
        minPrice = 0;
      }
      if (!maxPrice) {
        maxPrice = Number.MAX_SAFE_INTEGER;
      }

      if (!isNaN(Number(minPrice)) && !isNaN(Number(maxPrice))) {
        filters.price = Between(Number(minPrice), Number(maxPrice));
      }

      if (Object.keys(filters).length === 0) {
        return response.status(400).json({ message: "Please provide valid search criteria." });
      }

      const apartments = await this.apartmentRepository.find({
        where: filters,
      });

      response.json(apartments);
    } catch (error) {
      next(error);
    }
  };
  save = async (request: Request, response: Response, next: NextFunction) => {
    const { name, unitNumber, project, description, location, price, available } = request.body;

    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const apartment = Object.assign(new Apartment(), {
      name,
      unitNumber,
      project,
      description,
      location,
      price,
      available,
    });

    try {
      const savedApartment = await this.apartmentRepository.save(apartment);
      return response.status(201).json(savedApartment);
    } catch (error) {
      error.statusCode = 400;
      next(error);
    }
  };

  remove = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = parseInt(request.params.id);
      let apartmentToRemove = await this.apartmentRepository.findOneBy({ id });

      if (!apartmentToRemove) {
        return response.status(404).json({ message: "This apartment does not exist" });
      }

      await this.apartmentRepository.remove(apartmentToRemove);
      return response.json({ message: "Apartment has been removed" });
    } catch (error) {
      next(error);
    }
  };
}
