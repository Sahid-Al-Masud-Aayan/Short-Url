const isUrlValid = require("../../helpers/URLValidator");
const UrlSchema = require("../../modal/UrlSchema");
const generateShortId = require("../../helpers/ShortIdGenerator");

const shortURLGenerator = async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).send('Please enter a URL');
        }
        if (!isUrlValid(url)) {
            return res.status(400).send('Please enter a valid URL');
        }
        
        const shortedID = generateShortId(url)

        const existingUrl = await UrlSchema.findOneAndUpdate({url}, {$set: {ShortID: shortedID}}, {new: true})

        if(existingUrl){
            return res.render("index",{
                message: "Short Url created successfully!", 
                longUrl: existingUrl.url, 
                shortUrl: `https://localhost:3000/${existingUrl.ShortID}`,
             })
        }

        const ShortURLtoDB = new UrlSchema({
            url: url,  // Ensure field name matches schema
            ShortID: shortedID,
        });
         ShortURLtoDB.save();  // Wait for the database save to complete

         res.render("index",{
            message: "Short Url created successfully!", 
            longUrl: ShortURLtoDB.url, 
            shortUrl: `https://localhost:3000/${ShortURLtoDB.ShortID}`,
         })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = shortURLGenerator;
