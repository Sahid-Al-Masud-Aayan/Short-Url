const isUrlValid = require("../../helpers/URLValidator");

const shortURLGenerator = (req, res)=>{
    const {url} = req.body
    if(!url){
        return res.status(400).send('please enter url')
    }

    console.log(isUrlValid(url));
    
    res.send('shortUrl page is created')
}

module.exports = shortURLGenerator