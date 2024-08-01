const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../until/mongoose");
class SiteController {
  index(req, res) {
    Course.find({})
      .then((course) => {
        res.render("home", {
          course: multipleMongooseToObject(course),
        });
      })
      .catch((err) => {
        next;
      });
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
