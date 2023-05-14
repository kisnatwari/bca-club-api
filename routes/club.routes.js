const express = require('express');
const { addClub, getClubs, getClubById, deleteClub } = require('../controllers/club.controller');
const clubRouter = express.Router();

clubRouter.get("/:id", getClubById);
clubRouter.get("/", getClubs);
clubRouter.post("/add", addClub);
clubRouter.delete("/:id", deleteClub);

module.exports = clubRouter;