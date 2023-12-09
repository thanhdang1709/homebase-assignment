import { Database } from "sqlite3"

export const sqliteDB = new Database("./user-database.db", (err) => {
  if (err) {
    console.log(`DATABASE ERROR = ${err}`);
  } else {
    sqliteDB.run(
      "CREATE TABLE USERS( \
            id VARCHAR(40) PRIMARY KEY NOT NULL,\
            fullName NVARCHAR(60)  NOT NULL,\
            email VARCHAR(60) NOT NULL,\
            createdAt DATETIME NOT NULL,\
            modifiedAt DATETIME \
        )",
      (err) => {
        if (err) {
          console.log("USERS already exists.")
        }
      }
    )
  }
});
