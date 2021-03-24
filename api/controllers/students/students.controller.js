const Student = require('../../models/Student');

exports.create = async (req, res) => {
  const student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dni: req.body.dni,
    phones: req.body.phones,
    description: req.body.description,
  });

  try {
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const students = await Student.find().sort('lastName');

    const response = students.map((s) => {
      return { id: s._id, firstName: s.firstName, lastName: s.lastName };
    });

    res.json(response);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res
        .status(404)
        .json({ message: 'Student not found ' + req.params.id });
    }

    res.json(student);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const student = await Student.findByIdAndRemove(req.params.id);

    if (!student) {
      return res
        .status(404)
        .json({ message: 'Student not found ' + req.params.id });
    }

    res.json(student);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!student) {
      return res
        .status(404)
        .json({ message: 'Student not found ' + req.params.id });
    }

    res.json(student);
  } catch (err) {
    res.json({ message: err.message });
  }
};
