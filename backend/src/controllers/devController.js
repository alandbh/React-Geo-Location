const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

// Geralmente, os controllers usam estes métodos:
// index (listar), show (mostrar um único), update (alterar), destroy (deletar)
const devController = {
    index: async (req, res) => {
        const devs = await Dev.find();
        return res.json(devs);
    },
    store: async (req, res) => {
        // console.log(req.body);
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const response = await axios.get(
                `https://api.github.com/users/${github_username}`
            );

            const techsArray = parseStringAsArray(techs);

            const { name = login, avatar_url, bio } = response.data;

            const location = {
                type: "Point",
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }

        return res.json(dev);
    },

    destroy: async (req, res) => {
        await Dev.remove({
            github_username: req.query.username,
        });
        const devs = await Dev.find();

        return res.json(devs);

        // console.log(req.query);
    },
};

module.exports = devController;
