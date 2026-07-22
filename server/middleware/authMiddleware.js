import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    console.log("========== AUTH ==========");
    console.log("Authorization:", req.headers.authorization);
    console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("❌ No Bearer token");
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    const token = authHeader.split(" ")[1];

    console.log("Token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();

  } catch (error) {
    console.log("JWT VERIFY ERROR:");
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;