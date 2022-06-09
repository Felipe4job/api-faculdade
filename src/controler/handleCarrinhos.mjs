import carrinhos from "../models/Carrinho.mjs";

function getCarrinhos(req, res) {
  carrinhos
    .find()
    .populate("produto", "cliente", "vendedor")
    .exec((err, carrinhos) => {
      if (err) {
        console.log(err.message);
        res.status(500).send(err.mesage);
      } else {
        console.log(carrinhos);
        res.status(201).send(carrinhos);
      }
    });
}

function getCarrinhoById(req, res) {
  const id = req.body.id;

  carrinhos
    .findById(id)
    .populate("produto", "cliente", "vendedor")
    .exec((err, carrinho) => {
      if (err) {
        console.log(err.message);
        res.status(500).send(err.mesage);
      } else {
        console.log(carrinho);
        res.status(201).send(carrinho);
      }
    });
}

async function postCarrinhos(req, res) {
  let carrinho = new carrinhos(req.body);

  await carrinhos.save((err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(carrinho);
      res.status(201).send(carrinho.toJSON());
    }
  });
}

export default { getCarrinhos, getCarrinhoById, postCarrinhos };
