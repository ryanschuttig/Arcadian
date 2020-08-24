// Credentials for jwt Secret and Database
module.exports = {
    MONGO_URI: process.env.MONGODB_URI || "mongodb://root:rootroot1@ds021462.mlab.com:21462/heroku_jsc5306q",
    jwtSecret: process.env.JWT_SECRET
}