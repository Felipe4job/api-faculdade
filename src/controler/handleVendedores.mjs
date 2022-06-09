import vendedores from "../models/Vendedor.mjs";

function getVendedores(req, res) {
  vendedores.find((err, vendedores) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(vendedores);
      res.status(201).send(vendedores);
    }
  });
}

function getVendedoresById(req, res) {
  console.log(req);
  const id = req.params.id;

  vendedores.findById(id, (err, vendedores) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(vendedores);
      res.status(201).send(vendedores);
    }
  });
}

async function postVendedores(req, res) {
  let vendedor = new vendedores(req.body);

  await vendedor.save((err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(vendedor);
      res.status(201).send(vendedor.toJSON());
    }
  });
}

function deleteVendedorById(req, res) {
  const id = req.params.id;

  vendedores.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    } else {
      console.log(id);
      res.status(201).send(`Livro com ID: ${id} removido com sucesso`);
    }
  });
}

export default {
  getVendedores,
  getVendedoresById,
  postVendedores,
  deleteVendedorById,
};
