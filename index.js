import express from "express";
import  dotenv  from "dotenv";
import db from "./database/dbConnection.js";

dotenv.config({path:'./.env'});
db();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

