const categories = [
  {
    name: "Starters",
    img: "https://images.pexels.com/photos/6488856/pexels-photo-6488856.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Salads",
    img: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Pizzas",
    img: "https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Pastas",
    img: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    name: "Deserts",
    img: "https://images.pexels.com/photos/2377173/pexels-photo-2377173.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

const items = [
  {
    name: "Mixed green and black olives",
    price: 2.95,
    description: "",
    vegetarian: true,
    category_ID: 1,
    img: "https://salvo1968.co.uk/media/catalog/product/cache/2c83c4d31fd0090674a9637ee17e02e6/t/o/tos_marinatedmixedolivestub3kg_main_image_1.jpg",
  },
  {
    name: "Garlic bread with cheese ",
    price: 5.25,
    description: "A touch of tomato sauce, with mozarella, garlic and oregano.",
    vegetarian: true,
    category_ID: 1,
    img: "https://www.inspiredtaste.net/wp-content/uploads/2012/11/Garlic-Bread-Recipe-2-1200.jpg",
  },
  {
    name: "Tabla De Jamon Serrano y Queso Manchego ",
    price: 9.95,
    description:
      "Serrano ham and Manchego cheese board serve with focaccia bread.",
    vegetarian: false,
    category_ID: 1,
    img: "https://img.blogs.es/alhambra2/wp-content/uploads/2020/01/tabla1-1080x675.jpg",
  },
  {
    name: "Chorizos Al Vino",
    price: 5.95,
    description:
      "Traditional spicy Spanish Sausages cooked in a rich wine sauce.",
    vegetarian: false,
    category_ID: 1,
    img: "https://cocinaandaluza.es/wp-content/uploads/2014/11/chorizos-al-vino.jpg",
  },
  {
    name: "Albondigas en Salsa de Tomato",
    price: 6.95,
    description:
      "Mealt in the mouth hommade meatballs, prepeard in a rich tomato and wine sauce with parmesan cheese.",
    vegetarian: false,
    category_ID: 1,
    img: "https://comohacersalsa.com/wp-content/uploads/2019/11/receta-Albondigas-en-salsa-de-tomate.jpg",
  },
  {
    name: "Bruschetta",
    price: 4.95,
    description:
      "Two toasted ciabatta toped with fresh tomatoes marinated with garlic, oregano and olive oil.",
    vegetarian: true,
    category_ID: 1,
    img: "https://www.giallozafferano.com/images/229-22900/tomato-bruschetta_1200x800.jpg",
  },
  {
    name: "Gambas Al Aqillo",
    price: 7.95,
    description:
      "King prawns cooked in a succulent chilli, garlic, parsley, wine and butter sauce.",
    vegetarian: false,
    category_ID: 1,
    img: "https://imag.bonviveur.es/articulos/gambas-al-ajillo.jpg",
  },
  {
    name: "Tricolore Salad",
    price: 6.95,
    description:
      "Fresh tomatoes, soft avocado, Italian buffalo mozarella cheese, basil and extra virgin olive oil.",
    vegetarian: true,
    category_ID: 1,
    img: "https://www.filippoberio.co.uk/wp-content/uploads/2016/07/tricolore-salad-cropped.jpg",
  },
  {
    name: "Melanzana Parmigiana",
    price: 5.5,
    description:
      "Baked aubergine with fresh tomatoes sauce, basil, mozarella and parmesan cheese.",
    vegetarian: true,
    category_ID: 1,
    img: "https://www.antonio-carluccio.com/wp-content/uploads/2018/04/parmigiana-di-melanzane-696x389.jpg",
  },
  {
    name: "Croquetas De Jamon Serrano",
    price: 6.25,
    description:
      "Crunchy and creamy delicious serrano ham homemade bechamel croquettes.",
    vegetarian: false,
    category_ID: 1,
    img: "https://elgourmet.s3.amazonaws.com/recetas/cover/fba2ab0920888f003178592407d8fd98_3_3_photo.png",
  },
  {
    name: "Mixed Salad",
    price: 4.45,
    description: "Mixed leaves, fresh tomato, cucumber and onion.",
    vegetarian: true,
    category_ID: 2,
    img: "http://www.ndtv.com/cooks/images/tossed-mixed-salad-620.jpg",
  },
  {
    name: "Insalata Mediterranea",
    price: 6.45,
    description:
      "Mixed leaves, feta cheese, fresh tomato, onion and black olives.",
    vegetarian: true,
    category_ID: 2,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0b/ea/d2/4e/insalata-mediterranea.jpg",
  },
  {
    name: "Tuna and Avocado salad",
    price: 8.95,
    description:
      "Mixed leaves, tuna, fresh tomato, soft avocado, fresh onions, sweetcorn and parmesan cheese.",
    vegetarian: false,
    category_ID: 2,
    img: "https://3.bp.blogspot.com/_qfUblUa2Wlw/TE-KHMgZWvI/AAAAAAAAFjc/8CmCJuVgGqI/s1600/DSC07409.JPG",
  },
  {
    name: "Margherita",
    price: 8.25,
    description: "fresh tomato sauce, mozarella, basil.",
    vegetarian: true,
    category_ID: 3,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg",
  },
  {
    name: "Marinara",
    price: 6.95,
    description: "fresh tomato sauce, oregano, basil, garlic, olive oil.",
    vegetarian: true,
    category_ID: 3,
    img: "http://cdn.shopify.com/s/files/1/0299/7764/1097/articles/IMG_5964-2-2000x1125.jpg?v=1582039391",
  },
  {
    name: "Napoletana",
    price: 9.45,
    description:
      "fresh tomato sauce, mozarella, black olives, baby capers, oregano, garlic, anchovies, basil, olive oil.",
    vegetarian: false,
    category_ID: 3,
    img: "https://i2.wp.com/wineanddinepassport.com/wp-content/uploads/2020/06/pizza-napoletana-1-1.jpg?fit=567%2C600&ssl=1",
  },
  {
    name: "Capricciosa",
    price: 9.95,
    description:
      "fresh tomato sauce, cooked ham, spicy chorizo, mushrooms, artichokes, black olives, basil.",
    vegetarian: false,
    category_ID: 3,
    img: "https://cdn.tasteatlas.com/images/dishes/6b28b438a3b64a7e9fca9081c89f07ff.jpg",
  },
  {
    name: "Verace",
    price: 9.95,
    description:
      "Light tomato sauce, cherry tomatoes, mozarella, parmesan chesse, basil, olive oil.",
    vegetarian: true,
    category_ID: 3,
    img: "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,g_auto:subject,q_auto,f_auto/restaurant/1fd00e1d-7835-4b09-a1d4-964595617abb/36ae04d3-5bcd-4cc8-ab85-992b6b8a50ee.jpg",
  },
  {
    name: "Diavola",
    price: 9.45,
    description: "Fresh tomato sauce, spicy chorizo, mozarella, basil.",
    vegetarian: false,
    category_ID: 3,
    img: "https://qph.fs.quoracdn.net/main-qimg-ec9653be195109954c990fea67af783d",
  },
  {
    name: "Siciliana",
    price: 9.45,
    description:
      "Fresh tomato sauce, mozarella, brie cheese, italian sausage, fried aubergine, basil.",
    vegetarian: false,
    category_ID: 3,
    img: "https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/03/s3.jpg",
  },
  {
    name: "4 Formaggi Bianca",
    price: 9.45,
    description:
      "Mozarella, ricotta, gorgonzola, provola cheese, basil, olive oil.",
    vegetarian: true,
    category_ID: 3,
    img: "https://i0.wp.com/www.piccolericette.net/piccolericette/wp-content/uploads/2017/06/3234_Pizza.jpg?resize=895%2C616&ssl=1",
  },
  {
    name: "Primavera",
    price: 11.25,
    description:
      "Fresh tomato sauce, mozarella, wild rocket, Serrano ham, parmesan cheese, olive oil.",
    vegetarian: false,
    category_ID: 3,
    img: "https://img-global.cpcdn.com/recipes/3c0b786bf4c831c4/680x482cq70/pizza-primavera-recipe-main-photo.jpg",
  },
  {
    name: "Inferno",
    price: 10.45,
    description:
      "Fresh tomato sauce, mozarella, spicy chorizo, spicy n'duja sausage, basil.",
    vegetarian: false,
    category_ID: 3,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/12/30/ec/56/the-dante-s-inferno-pizza.jpg",
  },
  {
    name: "Calzone",
    price: 10.95,
    description:
      "Fresh tomato sauce, ricotta cheese, mozarella, cooked ham, mushrooms and basil served with a mixed side salad.",
    vegetarian: false,
    category_ID: 3,
    img: "https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/calzone_2-1080x960.jpg",
  },
  {
    name: "Vesuvio Veg",
    price: 13.95,
    description:
      "Fresh tomato sauce, ricotta cheese, mozarella, courgettes, sundried tomato, fresh rocket, basil, olive oil.",
    vegetarian: true,
    category_ID: 3,
    img: "https://i.pinimg.com/originals/59/3d/52/593d5254f34f05dbf9b91cdc53856895.jpg",
  },
  {
    name: "Vesuvio Meat",
    price: 14.45,
    description:
      "Fresh tomato sauce, ricotta cheese, mozarella, cooked ham, mushrooms, basil, olive oil.",
    vegetarian: false,
    category_ID: 3,
    img: "https://www.hot-dinners.com/images/stories/features/2020/pizza/50kalo.jpg",
  },
  {
    name: "Linguine Al Pesto",
    price: 9.25,
    description:
      "Linguine with fresh tomatoes, parmesan cheese and homemade basil pesto ",
    vegetarian: true,
    category_ID: 4,
    img: "https://www.cawineclub.com/images/recipes/29_main_LinguineAlPestoGenovese.jpg",
  },
  {
    name: "Spaghetti polpette",
    price: 10.95,
    description:
      "Spaghetti with our delicious homemade meatballs in a rich tomato sauce and parmesan cheese.",
    vegetarian: false,
    category_ID: 4,
    img: "https://wips.plug.it/cips/buonissimo.org/cms/2012/01/spaghetti-con-polpettine.jpg",
  },
  {
    name: "Linguine mare e monte",
    price: 13.95,
    description:
      "Linguine with king prawns, spicy chorizo, garlic, cherry tomatoes, wild rocket, extra virgin olive oil.",
    vegetarian: false,
    category_ID: 4,
    img: "https://www.the-pasta-project.com/wp-content/uploads/spaghetti-mare-e-monti-recipe-from-Le-Marche-640x433.jpg",
  },
  {
    name: "Spaghetti carbonara",
    price: 9.45,
    description:
      "Spaghetti with our special italian cream, panchetta lardons, onions, black pepper, parsley and extra virgin olive oil.",
    vegetarian: false,
    category_ID: 4,
    img: "https://img.taste.com.au/kP7HGQNf/taste/2016/11/best-ever-spaghetti-carbonara-87875-1.jpeg",
  },
  {
    name: "Fusilli con salsiccia e friarielli",
    price: 11.45,
    description:
      "Fusilli with italian sausages, garlic, broccoli, sundried tomatoes, chilli and extra virgi olive oil.",
    vegetarian: false,
    category_ID: 4,
    img: "https://cdn.trovaricetta.com/photo/2016/11/22/1774853/b/spaghetti-friarielli-e-salsiccia.jpg",
  },
  {
    name: "Tiramisu",
    price: 5.45,
    description: "Sponge fingers, mascarpone, espresso, eggs, sugar, cocoa.",
    vegetarian: false,
    category_ID: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tiramisu_-_Raffaele_Diomede.jpg/1200px-Tiramisu_-_Raffaele_Diomede.jpg",
  },
  {
    name: "Panna cotta",
    price: 4.95,
    description: "gelatin, heavy cream, sugar, vanilla extract.",
    vegetarian: false,
    category_ID: 5,
    img: "https://media.istockphoto.com/photos/panna-cotta-with-fresh-strawberries-and-compote-picture-id178422074?k=20&m=178422074&s=612x612&w=0&h=QrTpBS2rlHGVI2YFEd52NrG2WfBWal4gW9PRRFxrjmk=",
  },
  {
    name: "Profiteroles",
    price: 6.25,
    description:
      "coffee, eggs, sugar, butter, flour, salt, cream, semi-sweet chocolate.",
    vegetarian: false,
    category_ID: 5,
    img: "https://preppykitchen.com/wp-content/uploads/2016/04/profiterole-recipe.jpg",
  },
];
module.exports = { categories, items };
