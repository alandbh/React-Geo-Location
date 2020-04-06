const { Router } = require("express");
const axios = require("axios");

const routes = Router();

routes.post("/devs", async (req, res) => {
    // console.log(req.body);
    const { github_username } = req.body;

    const response = await axios.get(
        `https://api.github.com/users/${github_username}`
    );

    let { name = login, avatat_url, bio } = response.data;
    console.log(response.data);
    return res.json({ message: "oiaaa" });
});

module.exports = routes;
