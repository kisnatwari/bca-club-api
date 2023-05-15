const Club = require("../models/Club");

exports.addClub = async (req, res) => {
    const { clubname, type, address } = req.body;
    const fee = parseInt(req.body.fee);

    console.log(req.body);

    if (!clubname || typeof clubname !== 'string')
        return res.status(400).json({ message: 'Please provide a valid clubname' });

    if (!type || typeof type !== 'string')
        return res.status(400).json({ message: 'Please provide a valid type' });

    if (!address || typeof address !== 'string')
        return res.status(400).json({ message: 'Please provide a valid address' });

    if (fee < 0) 
        return res.status(400).json({ message: 'Please provide a valid fee' });
    

    try {
        const clubDetails = await Club.create({ clubname, type, address, fee });

        return res.status(201).json({
            message: 'Club added successfully',
            club: clubDetails,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getClubById = async (req, res) => {
    const clubId = req.params.id;
    if (!clubId || isNaN(clubId)) {
        return res.status(400).json({ message: 'Please provide a valid clubId' });
    }

    try {
        const club = await Club.findByPk(clubId);
        if (!club) {
            return res.status(404).json({ message: 'Club not found' });
        }
        return res.send({ club });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getClubs = async (req, res) => {
    try {
        const clubs = await Club.findAll();
        return res.send({ clubs });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteClub = async (req, res) => {
    const clubId = req.params.id;

    if (!clubId || isNaN(clubId)) {
        return res.status(400).json({ message: 'Please provide a valid clubId' });
    }

    try {
        const club = await Club.findByPk(clubId);
        if (!club) {
            return res.status(404).json({ message: 'Club not found' });
        }
        await club.destroy();
        return res.send({ message: 'Club deleted successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
