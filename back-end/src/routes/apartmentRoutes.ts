import { Router } from "express";
import { ApartmentController } from "../controller/ApartmentController";
import { body } from "express-validator";

const router = Router();

const validateApartment = [
  body("name").notEmpty().withMessage("Name is required"),
  body("unitNumber").notEmpty().withMessage("Unit number is required"),
  body("project").notEmpty().withMessage("Project name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("location").notEmpty().withMessage("Location is required"),
  body("price").isInt({ min: 1 }).withMessage("Price must be a positive integer"),
];

const apartmentController = new ApartmentController();

router.get("/filter", apartmentController.filter);
router.get("/", apartmentController.all);
router.get("/:id", apartmentController.one);
router.post("/", validateApartment, apartmentController.save);
router.delete("/:id", apartmentController.remove);

export default router;
