const router = require("express").Router();


router.get("/", (req, res) => {
  res.send("Hello from user route");
});

module.exports = router;
