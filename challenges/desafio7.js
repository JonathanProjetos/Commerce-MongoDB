db.produtos.deleteMany({
  curtidas: { $lt: 50 },
  tags: { $exists: false },
}, {
  nome: 1,
  _id: 0,
});