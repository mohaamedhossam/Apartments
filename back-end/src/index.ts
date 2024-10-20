import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import { AppDataSource } from "./data-source";
import { port } from "../config";
import * as cors from "cors";
import handleError from "./middleware/errorHandlingMW";
import apartmentRoutes from "./routes/apartmentRoutes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(
      cors({
        origin: "http://localhost:3001",
      })
    );
    app.use(morgan("combined"));
    app.use(bodyParser.json());

    app.use("/api/apartments", apartmentRoutes);

    app.use(handleError);

    app.listen(port, () => {
      console.log(`Express server has started on port: ${port}`);
    });
  })
  .catch((error) => console.log(error));
