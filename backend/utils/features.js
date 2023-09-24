import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  console.log(token);

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
    })
    .json({
      success: true,
      message: message,
      user: user,
      token: token,
    });
};
