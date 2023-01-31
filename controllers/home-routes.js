const router = require("express").Router();

// route to get all
router.get("/", async (req, res) => {
  res.render("all");
});

module.exports = router;
