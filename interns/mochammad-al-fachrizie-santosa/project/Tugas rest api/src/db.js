import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "../drizzle/schema.js";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD || undefined,
});

export const db = drizzle(pool, { schema, mode: "default" });

console.log("✅ Database connected with Drizzle");