const Course = require("../models/Course");
const { mongooseToObject } = require("../../until/mongoose");
class SiteController {
  show(req, res, next) {
    // console.log(Course);
    Course.findOne({ slug: req.params.slug })
      .then(function (course) {
        res.render("courses/show", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
