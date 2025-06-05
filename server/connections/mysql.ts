import mysql from 'mysql2';
import { config } from 'dotenv';
config();
export const connect = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: parseInt(process.env.MYSQL_PORT || '3306', 10),
    ssl: {
        rejectUnauthorized: false // This is important for self-signed certificates

    }
})

connect.connect((err: any) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the MySQL database!");
});

export const query = (sql: string, params: any[] = []) => {
    return new Promise((resolve, reject) => {
      connect.query(sql, params, (error: any, results: any) => {
        if (error) {
          return reject(error); // If query fails, reject the promise with error
        }
        resolve(results); // If query succeeds, resolve the promise with results
      });
    });
  };
  




