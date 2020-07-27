'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuabarang  = function (req, res) {
    connection.query('SELECT * FROM barang', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data mahasiwa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM barang WHERE id_barang = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data mahasiswa
exports.tambahBarang = function (req, res) {
    var nama_barang = req.body.nama_barang;
    var harga_barang = req.body.harga_barang;
    var stok = req.body.stok;

    connection.query('INSERT INTO barang (nama_barang,harga_barang,stok) VALUES(?,?,?)',
        [nama_barang, harga_barang, stok],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahBarang = function (req, res) {
    var id = req.body.id_barang;
    var nama_barang = req.body.nama_barang;
    var harga_barang = req.body.harga_barang;
    var stok = req.body.stok;

    connection.query('UPDATE barang SET nama_barang=?, harga_barang=?, stok=? WHERE id_barang=?', [nama_barang, harga_barang, stok, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

//Menghapus data berdasarkan id
exports.hapusBarang = function (req, res) {
    var id = req.body.id_barang;
    connection.query('DELETE FROM barang WHERE id_barang=?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

//menampilkan matakuliah group
exports.tampilgroupmatakuliah = function(req, res){
    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.oknested(rows, res);
            }
        }
    )

}


