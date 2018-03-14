const router = require("express").Router();
const axios = require("axios");
const articlesController = require("../../controllers/articleController");

// actions

// router.route("/save").post(articleController.create);

// router.route("/saved").get(articleController.findAll);

// router.route("/:id").delete(articleController.remove);

// search action
router.route("/").post((req, res) => {
  let { query, startdate, enddate } = req.body;
  const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  const url =
    baseURL +
    `?api-key=${
      process.env.KEY_NYT_1
    }&q=${query}&begin_date=${startdate}&end_date=${enddate}`;
  axios
    .get(url)
    .then(data => {
      res.json(data.data.response.docs);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;

