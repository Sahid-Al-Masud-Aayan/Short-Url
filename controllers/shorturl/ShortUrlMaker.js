const isUrlValid = require("../../helpers/URLValidator");
const generateShortId = require("./ShortIdGenerator");

const shortURLGenerator = (req, res)=>{
    const {url} = req.body
    if(!url){
        return res.status(400).send('please enter url')
    }if(!isUrlValid(url)){
        return res.status(400).send('please enter a valid url')
    }
    
    

    res.send(generateShortId(url))
    
    res.send('shortUrl page is created')
}

module.exports = shortURLGenerator