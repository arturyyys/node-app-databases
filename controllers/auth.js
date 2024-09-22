exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get("Cookie");
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
  console.log(isLoggedIn);
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/");
};
