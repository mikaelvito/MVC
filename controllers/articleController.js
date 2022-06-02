const { Article } = require("/models");

module.exports = {
  index: (req, res) => {
    Article.findAll().then((articles) => {
      res.render("articles/index", {
        articles,
      });
    });
  },
  create: (req, res) => {
    res.render("articles/create");
  },

  store: (req, res) => {
    Article.create({
      title: req.body.title,
      body: req.body.body,
    }).then((article) => {
      res.redirect("/articles");
    });
  },

  show: (req, res) => {
    Article.findOne({
      where: { id: req.params.id },
    }).then((article) => {
      // Karena hasil dari promise findOne adalah object,
      // Maka bisa kita lempar langsung ke method render
      res.render("articles/show", article.dataValues);
    });
  },
};
