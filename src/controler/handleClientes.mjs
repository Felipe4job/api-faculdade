import clientes from "../models/Cliente.mjs";

function getClientes(req, res) {
  clientes.find((err, clientes) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(clientes);
      res.status(201).send(clientes);
    }
  });
}

function getClientesById(req, res) {
  const id = req.params.id;

  clientes.findById(id, (err, cliente) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(cliente);
      res.status(201).send(cliente);
    }
  });
}

async function postClientes(req, res) {
  let cliente = new clientes(req.body);

  await cliente.save((err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(cliente);
      res.status(201).send(cliente.toJSON());
    }
  });
}

export default {
  getClientes,
  getClientesById,
  postClientes,
};
