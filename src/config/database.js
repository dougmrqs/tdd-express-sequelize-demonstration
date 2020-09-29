require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
  url: process.env.DB_URL,
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: './tests/database.sqlite',
  operatorsAlises: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};