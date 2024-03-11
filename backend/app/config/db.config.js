module.exports = {
  HOST: "localhost",
  PORT: "8080",
  USER: "njoco",
  PASSWORD: "123456",
  DB: "nekaGit",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
