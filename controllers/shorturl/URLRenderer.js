const UrlSchema = require("../../modal/UrlSchema");

const RenderingtheURL = async (req, res) => {
    const ShortID = req.params.ShortID;

    const existingUrl = await UrlSchema.findOne({ ShortID });


    if (!existingUrl) {
        return res.render('error', {error:"page not found"}) // ✅ Ensures only one response is sent
    }if(existingUrl.isAuth){
        const RedirectorURL = await UrlSchema.findByIdAndUpdate(existingUrl._id, {$push: {visitHistory:{clickedAt: Date.now()}}}, {new: true})
        res.redirect(RedirectorURL.url);
    }else{
        res.redirect(existingUrl.url);
    }

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
