import vendedores from "../models/Vendedor.mjs";

class vendedorControler {
  static cadastrarVendedor = (req, res) => {
    let vendedor = new vendedor(req.body);

    vendedor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar Vendedor.` });
      } else {
        console.log(vendedor.toJSON());
        res.status(201).send(vendedor.toJSON());
      }
    });
  };
}

export default vendedorControler;
