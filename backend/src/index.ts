import express, { Express, Request, Response } from "express";
import cors from "cors";
import DataBase from "better-sqlite3";

const app: Express = express();
const port = 3000;
const db = new DataBase();

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    );
  `
).run()

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/view-entries", (req: Request, res: Response) => {
  const result = db.prepare(
    `
      SELECT *
      FROM users
    `
  ).all();

  res.json(result);
})

app.post("/create-entry", (req: Request, res: Response) => {
  const username = req.body.username,
        password = req.body.password;

  db.prepare(
    `
      INSERT INTO users (username, password)
      VALUES (?, ?)
    `
  ).run(username, password);

  console.log("CREATED");

  res.status(200);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
