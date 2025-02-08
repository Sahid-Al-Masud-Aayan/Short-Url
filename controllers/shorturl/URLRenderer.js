const UrlSchema = require("../../modal/UrlSchema");

const RenderingtheURL = async (req, res) => {
    const ShortID = req.params.ShortID;

    const existingUrl = await UrlSchema.findOneAndUpdate({ ShortID }, {$push: {visitHistory:{clickedAt: Date.now()}}}, {new: true});

    if (!existingUrl) {
        return res.render('error') // ✅ Ensures only one response is sent
    }

    res.redirect(existingUrl.url);
};

const visitHistory = async (req, res)=>{
    const ShortID = req.params.ShortId;

    const existUrl = await UrlSchema.findOne({ShortID: ShortID})    

    if(!existUrl){
     return res.status(404).send("ID not found!")
    }

    res.send(existUrl)
}

module.exports = {RenderingtheURL, visitHistory};
