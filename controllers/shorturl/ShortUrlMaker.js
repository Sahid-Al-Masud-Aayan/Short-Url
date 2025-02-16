const isUrlValid = require("../../helpers/URLValidator");
const UrlSchema = require("../../modal/UrlSchema");
const generateShortId = require("../../helpers/ShortIdGenerator");
const RegisterSchema = require("../../modal/RegisterSchema");



const shortURLGenerator = async (req, res) => {
    try {
        const { url } = req.body;

        if(!url){ 
            return res.render("index", { 
            error: "URL is required!", 
            }) 
            } 
            if(!isUrlValid(url)){ 
            return res.render("index", { 
            error: "URL is not valid!", 
            })
            }
        if (!url) {
            return res.status(400).send('Please enter a URL');
        }
        if (!isUrlValid(url)) {
            return res.status(400).send('Please enter a valid URL');
        }
        
        const shortedID = generateShortId(url)


        if(req.user){
            const existingUrl = await UrlSchema.findOneAndUpdate({url}, {$set: {ShortID: shortedID}}, {new: true})
            
            if(existingUrl){
                return res.render("index",{
                    message: "Short Url created successfully!", 
                    longUrl: existingUrl.url, 
                    shortUrl: `http://localhost:3000/${existingUrl.ShortID}`,
                    inLoggedUser: req.user
                 })
            }
    
            const ShortURLtoDB = new UrlSchema({
                url: url, 
                ShortID: shortedID,
                isAuth: true
                
                
                
            });
            ShortURLtoDB.save();  
            
            await RegisterSchema.findByIdAndUpdate(req.user.id, {$push: {ShortURLDB: ShortURLtoDB.id}})
            
            res.render("index",{
                message: "Short Url created successfully!", 
                longUrl: ShortURLtoDB.url, 
                shortUrl: `http://localhost:3000/${ShortURLtoDB.ShortID}`,
            })
        
            
            
        }else{
            const existingUrl = await UrlSchema.findOneAndUpdate({url}, {$set: {ShortID: shortedID}}, {new: true})
            
            
            if(existingUrl){
                return res.render("index",{
                            message: "Short Url created successfully!", 
                            longUrl: existingUrl.url, 
                            shortUrl: `http://localhost:3000/${existingUrl.ShortID}`,
                         })
                    }
            
                    const ShortURLtoDB = new UrlSchema({
                        url: url,  // Ensure field name matches schema
                        ShortID: shortedID,
                    });
                    ShortURLtoDB.save();  
                     res.render("index",{
                        message: "Short Url created successfully!", 
                        longUrl: ShortURLtoDB.url, 
                        shortUrl: `http://localhost:3000/${ShortURLtoDB.ShortID}`,
                     })
            
                     
                    }
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ error: error.message });
                }
};

module.exports = shortURLGenerator;
