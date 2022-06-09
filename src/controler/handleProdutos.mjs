import produtos from "../models/Produto.mjs";

function getProdutos(req, res) {
  produtos.find((err, produtos) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(produtos);
      res.status(201).send(produtos);
    }
  });
}

function getProdutoById(req, res) {
  const id = req.params.id;

  produtos.findById(id, (err, produto) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(produto);
      res.status(201).send(produto);
    }
  });
}

async function postProdutos(req, res) {
  let produto = new produtos(req.body);

  await produto.save((err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(produto);
      res.status(201).send(produto.toJSON());
    }
  });
}

export default { getProdutos, getProdutoById, postProdutos };
