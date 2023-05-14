const express = require('express');
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./utils/db');
const clubRouter = require('./routes/club.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/clubs", clubRouter);

sequelize.sync().then(() => {
    const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});