import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connect = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'db_na',
    port: 3306
})
export const db = drizzle(connect);

