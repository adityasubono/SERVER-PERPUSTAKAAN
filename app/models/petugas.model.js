module.exports = (sequelize, Sequelize) => {
  const Petugas = sequelize.define("petugas", {
    nama: {
      type: Sequelize.STRING
    },
    jabatan: {
      type: Sequelize.STRING
    },
    alamat: {
      type: Sequelize.STRING
    },
    nomer_telpon: {
      type: Sequelize.STRING
    },
    jam_tugas: {
      type: Sequelize.STRING
    },
  });
  return Petugas;
};
