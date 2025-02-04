const generateShortId = () => {

    const alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let shortId = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * alphanumeric.length);
        shortId += alphanumeric[randomIndex];
    }

    return shortId;
    
};

    module.exports = generateShortId;