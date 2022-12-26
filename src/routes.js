const {
  addBookHandler,
  getAllBooksHandler,
  getDetailBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [{
      //Kriteria 1 : API dapat menyimpan buku
      method: 'POST',
      path: '/books',
      handler: addBookHandler,
  },
  {
      //Kriteria 2 : API dapat menampilkan seluruh buku
      method: 'GET',
      path: '/books',
      handler: getAllBooksHandler,
  },
  {
      //Kriteria 3 : API dapat menampilkan detail buku
      method: 'GET',
      path: '/books/{id}',
      handler: getDetailBookByIdHandler,
  },
  {
      //Kriteria 4 : API dapat mengubah data buku
      method: 'PUT',
      path: '/books/{id}',
      handler: editBookByIdHandler,
  },
  {
      //Kriteria 5 : API dapat menghapus buku
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookByIdHandler,
  },
];
module.exports = routes;