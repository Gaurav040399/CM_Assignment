
const mysql = require("mysql2");
const xlsx = require("xlsx");
require("dotenv").config()

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: process.env.sql_pass,
  database: "admission_CM",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    return;
  }
  console.log("Connected to the database");

  const workbook = xlsx.readFile("admission.xlsx");
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(worksheet);
  console.log(data);

  const sql =
    "INSERT INTO admission (name,age,location) VALUES ?";

  const values = data.map((row) => [
    row.name,
    row.age,
    row.location
  ]);
  console.log(values);

  // Execute the SQL query
  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully");
    }

    // Close the database connection
    db.end((err) => {
      if (err) {
        console.error("Error closing the database connection:", err.message);
      }
   });
 });
});