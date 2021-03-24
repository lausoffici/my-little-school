const Course = require('../../models/Course');

exports.create = async (req, res) => {
  const course = new Course({
    name: req.body.name,
    amount: req.body.amount,
  });

  try {
    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const courses = await Course.find().sort('name');

    const response = courses.map((s) => {
      return { id: s._id, name: s.name, amount: s.amount };
    });

    res.json(response);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res
        .status(404)
        .json({ message: 'Course not found ' + req.params.id });
    }

    res.json(course);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const course = await Course.findByIdAndRemove(req.params.id);

    if (!course) {
      return res
        .status(404)
        .json({ message: 'Course not found ' + req.params.id });
    }

    res.json(course);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!course) {
      return res
        .status(404)
        .json({ message: 'Course not found ' + req.params.id });
    }

    res.json(course);
  } catch (err) {
    res.json({ message: err.message });
  }
};
