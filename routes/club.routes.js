const express = require('express');
const { addClub, getClubs, getClubById, deleteClub } = require('../controllers/club.controller');
const clubRouter = express.Router();

clubRouter.get("/", getClubs);
clubRouter.post("/", addClub);
clubRouter.get("/:id", getClubById);
clubRouter.delete("/:id", deleteClub);

module.exports = clubRouter;