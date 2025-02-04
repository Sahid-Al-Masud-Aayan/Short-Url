const UrlSchema = require("../../modal/UrlSchema");

const RenderingtheURL = async (req, res) => {
    const ShortID = req.params.ShortID;

    const existingUrl = await UrlSchema.findOne({ ShortID });

    if (!existingUrl) {
        return res.status(404).send("Page not found"); // ✅ Ensures only one response is sent
    }

    res.redirect(existingUrl.url);
    console.log(existingUrl.url) // ✅ Now this is sent only if the ID exists
};

module.exports = RenderingtheURL;
