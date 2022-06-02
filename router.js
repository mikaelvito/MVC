const router = require("express").Router();
const article = require("./controllers/articleController");

router.get("/articles", article.index);
router.post("/articles/create", article.create);
router.store("/articles", article.store);
router.edit("/articles", article.edit);
module.exports = router;
