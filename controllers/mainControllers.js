//

//
let platos = [
  {
    id: 1,
    name: "Carpaccio fresco",
    description: "asfdfbnghjhngdfkfgmebmfkdra",
    price: "US $65.5",
    image: "/images/Carpaccio.jpg",
  },
  {
    id: 2,
    name: "Risotto de berenjena",
    description: "Risotto de berenjena y queso de cabra",
    price: "US $47.0",
    image: "/images/Risotto-berenjena.jpg",
  },
  {
    id: 3,
    name: "Mousse de arroz",
    description: "Mousse de arroz con leche y aroma de azahar",
    price: "US $27.5",
    image: "/images/Mousse-de-arroz-con-leche.jpg",
  },
  {
    id: 4,
    name: "Espárragos blancos",
    description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price: "US $37.5",
    image: "/images/esparragos.png",
  },
  {
    id: 5,
    name: "AAAAAAAAAAAAAAAAAAAAAAAAAAaa",
    description: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBb",
    price: "free  C: ",
    image: "/images/principal.jpg",
  },
];

const controllers = {
  //
  test: (req, res) => {
    let numeros = [23, 3, 2, 23, 32, 32, 1];
    res.render("test", { numeros: numeros });
  },
  //
  home: (req, res) => {
    res.render("index", { platos: platos });
  },
  //
  detalleMenu: (req, res) => {
    const platoEncontrado = platos.find(
      (platos) => platos.id == req.params.idPlato
    );
    res.render("detalleMenu", { platoEncontrado: platoEncontrado });
  },
};

module.exports = controllers;
