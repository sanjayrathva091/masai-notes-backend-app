const jwt = require("jsonwebtoken");

exports.verifyAccessToken = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization;
        if (!accessToken) {
            return res.status(401).json({ message: "Unauthorized request!" });
        }
        const JwtSecretKey = process.env.JWT_SECRET_KEY;
        const checkAccessToken = jwt.verify(accessToken, JwtSecretKey);
        switch (checkAccessToken.role) {
            case "Admin":
                req.body.authorId = checkAccessToken._id;
                return next();
            case "Explorer":
                if (req.method === "GET") {
                    return next();
                } else {
                    return res.status(403).json({ message: `${checkAccessToken.role} is not authorized` });
                }
            default:
                return res.status(403).json({ message: `${checkAccessToken.role} is not authorized` });
        }
    } catch (error) {
        return res.status(401).json({ message: `Unauthorized request!`, errorName: error.name });
    }
};