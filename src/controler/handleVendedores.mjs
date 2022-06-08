import vendedores from "../models/Vendedor.mjs";

async function postVendedores(req, res) {
  let vendedor = await new vendedores(req.body);

  vendedor.save((err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.mesage);
    } else {
      console.log(vendedor);
      res.status(201).send(vendedor.toJSON());
    }
  });
}

async function getVendedores(req, res) {
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

export default { postVendedores, getVendedores };
