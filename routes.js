'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuabarang);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahBarang);

    app.route('/ubah')
        .put(jsonku.ubahBarang);
        
    app.route('/hapus')
        .delete(jsonku.hapusBarang);

    app.route('/tampilmatakuliah')
        .get(jsonku.tampilgroupmatakuliah);
}