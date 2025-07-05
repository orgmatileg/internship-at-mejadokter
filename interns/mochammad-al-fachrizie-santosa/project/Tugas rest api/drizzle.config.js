/** @type {import('drizzle-kit').Config} */
export default {
  schema: "./drizzle/schema.js",
  out: "./drizzle/migrations",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    port: 3306,
    user: "root",
    database: "house",
  },
};