import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import router from "@/routers";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req, res) => {
  return res.send("<h1>Hello world from backend!</h1>");
});

app.get("/api", (req, res) => {
  return res.json({ message: "Hello world from backend!" });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
