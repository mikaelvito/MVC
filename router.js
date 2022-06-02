const router = require("express").Router();
const article = require("./controllers/articleController");

router.get("/articles", article.index);
router.post("/articles/create", article.create);
router.store("/articles", article.store);
router.show("/articles/show", article.show);
module.exports = router;
