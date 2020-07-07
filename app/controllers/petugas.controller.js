const db = require("../models");
const Petugas = db.petugas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can net be empty!"
    });
    return;
  }

  // Create a Tutorial
  const petugas = {
    nama: req.body.nama,
    jabatan: req.body.jabatan,
    alamat: req.body.alamat,
    nomer_telpon: req.body.nomer_telpon,
    jam_tugas: req.body.jam_tugas,
  };
  // Save Tutorial in the database
  Petugas.create(petugas)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured while creating"
    });
  })
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama ? {nama: { [Op.like]: `%${nama}%` }} : null;

  Petugas.findAll({
        // where: condition
        where: condition
      }
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
          err.message || "Some error occurred while retrievin tutorial."
    });
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Petugas.findByPk(id)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Tutorial with id=" + id
    });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Petugas.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num === 1) {
      res.send({
        message: "Tutorial was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Tutorial with id=" + id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Petugas.destroy({
    where: {id: id}
  })
  .then(num => {
    if (num === 1) {
      res.send({
        message: "Tutorial was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Tutorial with id=" + id
    });
  });
};

exports.deleteAll = (req, res) => {
  Petugas.destroy({
    where: {},
    truncate: false
  })
  .then(nums => {
    res.send({ message: `${nums} Tutorials were deleted successfully!` });
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured while removing all tutorials."
    });
  });
};

// exports.findAllPublished = (req, res) => {
//   Petugas.findAll({ where: { published: true } })
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message: err.message || "Some error occured while retrivin tutorials."
//     });
//   });
// };
