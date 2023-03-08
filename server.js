// require('dotenv').config()

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// mongoose.connect(process.env.DATABASE_URL);
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log('Connected to database'));
app.use(express.static("public"));
app.use(cors());
// app.use(express.json())
// const userRouter = require('./routes/users')
// app.use("/users", userRouter);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.locals.users = [
  { username: "dsUser", password: "shoes", contact: "deadstock@gmail.com" },

  {
    username: "dsChris",
    password: "cheese",
    contact: "coolguychris@gmail.com",
  },

  { username: "dsJosh", password: "dogs", contact: "ndgns2@gmail.com" },

  { username: "dsIsaiah", password: "hummus", contact: "capCinema@gmail.com" },

  { username: "dsMaura", password: "green", contact: "mauraMagic10@gmail.com" },
];
app.locals.inventory = [
  {
    title: "NikeCraft General Purpose Shoe",
    release: "09/02/2022",
    colors: ["DARK SULFUR", "WHITE-LIGHT", "CREAM"],
    brand: "Nike",
    size: 7,
    quantity: 2,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/642/737/original/981386_01.jpg.jpeg?action=crop&width=950",
    code: "DA6672-700",
    user: "dsUser",
    id: 2,
    contact: "deadstock@gmail.com",
    price: 200.0,
  },

  {
    title: "Nike Air Force 1 Low x Off-White Brooklyn",
    release: "09/02/2022",
    colors: ["LIGHT GREEN SPARK", "METALLIC SILVER"],
    brand: "Nike",
    size: 11,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/720/052/original/935629_01.jpg.jpeg?action=crop&width=2000",
    code: "DX1419-300",
    user: "dsIsaiah",
    id: 3,
    contact: "capCinema@gmail.com",
    price: 3200.0,
  },

  {
    title: "Nike Dunk Low x Union Passport Pack Argon",
    release: "04/02/2022",
    colors: ["LIGHT BLUE", "ARGON", "WHITE"],
    brand: "Nike",
    size: 10,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/066/733/594/original/860439_01.jpg.jpeg?action=crop&width=3000",
    code: "DJ9649-400",
    user: "dsChris",
    id: 4,
    contact: "coolguychris@gmail.com",
    price: 470.0,
  },
  {
    title: `Fragment Design x Travis Scott x Air Jordan 1 Retro Low`,
    release: "08/13/2021",
    colors: ["Blue"],
    brand: "Jordan",
    size: 10,
    quantity: 2,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/059/084/576/original/767449_01.jpg.jpeg?action=crop&width=950",
    code: "DM7866 140",
    user: "dsChris",
    id: 36,
    contact: "coolguychris@gmail.com",
    price: 1520.0,
  },

  {
    title: `Nike Dunk Low "World Champ"`,
    release: "09/02/2022",
    colors: ["White", "Metallic Gold", "Black"],
    brand: "Nike",
    size: 6.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/378/077/original/981526_01.jpg.jpeg?action=crop&width=2000",
    code: "DR9511 100",
    user: "dsMaura",
    id: 5,
    contact: "deadstock@gmail.com",
    price: 330.0,
  },
  {
    title: `Air Jordan 1 Retro High OG 'Heirloom'`,
    release: "09/23/2022",
    colors: ["Vachetta Tan", "Black", "Sail"],
    brand: "Jordan",
    size: 9.5,
    quantity: 3,
    url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/075/085/671/original/555088_202.png.png?action=crop&width=2000",
    code: "555088 202",
    user: "dsJosh",
    id: 6,
    contact: "ndgns2@gmail.com",
    price: 190.0,
  },
  {
    title: `J. Balvin x Air Jordan 2 Retro`,
    release: "09/15/2022",
    colors: ["Celestine Blue", "White", "Multi-Color"],
    brand: "Jordan",
    size: 11,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/369/335/original/949375_01.jpg.jpeg?action=crop&width=2000",
    code: "DQ7691 419",
    user: "dsUser",
    id: 7,
    contact: "deadstock@gmail.com",
    price: 270,
  },
  {
    title: `Yeezy Boost 350 V2 'Slate'`,
    release: "09/03/2022",
    colors: ["Slate", "Core Black", "Slate"],
    brand: "Adidas",
    size: 11.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/775/178/original/924555_01.jpg.jpeg?action=crop&width=2000",
    code: "HP7870",
    user: "dsIsaiah",
    id: 8,
    contact: "capCinema@gmail.com",
    price: 250.0,
  },

  {
    title: `Air Jordan 1 High Zoom Comfort 'Hare'`,
    release: "08/19/2022",
    colors: ["White", "Light Silver", "Dark Concord", "True Red"],
    brand: "Jordan",
    size: 9,
    quantity: 2,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/782/871/original/1000003_01.jpg.jpeg?action=crop&width=2000",
    code: "CT0978 100",
    user: "dsJosh",
    id: 9,
    contact: "ndgns2@gmail.com",
    price: 190.0,
  },
  {
    title: "Air Jordan 6 Retro 'Infrared' 2019",
    release: "02/16/2019",
    colors: ["Black", "Infrared", "23-Black"],
    brand: "Jordan",
    size: 6,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/929/998/original/13538_01.jpg.jpeg?action=crop&width=950",
    code: "384664 060",
    user: "dsMaura",
    id: 25,
    contact: "mauraMagic10@gmail.com",
    price: 300.0,
  },

  {
    title: `Tom Sachs x NikeCraft General Purpose Shoe 'Studio'`,
    release: "06/10/2022",
    colors: ["Light Cream", "White", "Light Bone"],
    brand: "Nike",
    size: 10,
    quantity: 3,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/024/924/original/888099_01.jpg.jpeg?action=crop&width=2000",
    code: "DA6672 200",
    user: "dsChris",
    id: 12,
    contact: "coolguychris@gmail.com",
    price: 220.0,
  },
  {
    title: "Wmns Dunk Low Next Nature 'Phantom'",
    release: "09/16/2022",
    colors: ["Phantom", "Gold Suede", "White", "Volt"],
    brand: "Nike",
    size: 6.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/239/540/original/1008781_01.jpg.jpeg?action=crop&width=950",
    code: "DN1431 001",
    user: "dsMaura",
    id: 13,
    contact: "mauraMagic10@gmail.com",
    price: 160.0,
  },
  {
    title: "Comme des Garçons Homme Plus x Air Max 97 'Black'",
    release: "09/22/2022",
    colors: ["Black"],
    brand: "Nike",
    size: 8,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/078/305/517/original/DX6932_002.png.png?action=crop&width=2000",
    code: "DX6932 002",
    user: "dsChris",
    id: 14,
    contact: "coolguychris@gmail.com",
    price: 250.0,
  },
  {
    title: `Fragment Design x Travis Scott x Air Jordan 1 Retro Low`,
    release: "08/13/2021",
    colors: ["Blue"],
    brand: "Jordan",
    size: 10.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/059/084/576/original/767449_01.jpg.jpeg?action=crop&width=950",
    code: "DM7866 140",
    user: "dsChris",
    id: 37,
    contact: "coolguychris@gmail.com",
    price: 1450.0,
  },
  {
    title: "Yeezy Foam Runner 'Sand'",
    release: "03/26/2021",
    colors: ["Etham"],
    brand: "Adidas",
    size: 8.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/052/340/157/original/728431_01.jpg.jpeg?action=crop&width=2000",
    code: "FY4567",
    user: "dsMaura",
    id: 15,
    contact: "mauraMagic10@gmail.com",
    price: 110.0,
  },
  {
    title: `Tom Sachs x NikeCraft General Purpose Shoe 'Studio'`,
    release: "06/10/2022",
    colors: ["Light Cream", "White", "Light Bone"],
    brand: "Nike",
    size: 9,
    quantity: 3,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/024/924/original/888099_01.jpg.jpeg?action=crop&width=2000",
    code: "DA6672 200",
    user: "dsChris",
    id: 10,
    contact: "coolguychris@gmail.com",
    price: 240.0,
  },
  {
    title: "Bodega x 997S 'Better Days'",
    release: "09/25/2020",
    colors: ["Tan"],
    brand: "New Balance",
    size: 8.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/043/179/495/original/679394_01.jpg.jpeg?action=crop&width=950",
    code: "MS997JBO",
    user: "dsMaura",
    id: 16,
    contact: "mauraMagic10@gmail.com",
    price: 420.0,
  },
  {
    title: "Bodega x 997S 'No Bad Days'",
    release: "09/28/2019",
    colors: ["Cool Breeze"],
    brand: "New Balance",
    size: 12,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/329/736/original/543653_01.jpg.jpeg?action=crop&width=950",
    code: "MS997JBG",
    user: "dsIsaiah",
    id: 17,
    contact: "capCinema@gmail.com",
    price: 310.0,
  },
  {
    title: "Air Jordan 1 Retro High OG 'Stealth'",
    release: "08/30/2022",
    colors: ["Stealth", "White"],
    brand: "Jordan",
    size: 12,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/076/570/237/original/946681_01.jpg.jpeg?action=crop&width=950",
    code: "555088 037",
    user: "dsIsaiah",
    id: 18,
    contact: "capCinema@gmail.com",
    price: 570.0,
  },
  {
    title: "Air Jordan 4 Retro SE 'Black Canvas'",
    release: "10-01-2022",
    colors: ["Black", "White", "Fire Red", "Light Steel Grey"],
    brand: "Jordan",
    size: 11,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/407/690/original/933532_01.jpg.jpeg?action=crop&width=950",
    code: "DH7138 006",
    user: "dsChris",
    id: 19,
    contact: "coolguychris@gmail.com",
    price: 300.0,
  },

  {
    title: "Air Fear Of God 1 'Orange Pulse'",
    release: "06/01/2019",
    colors: ["Orange Pulse"],
    brand: "Nike",
    size: 13,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/308/440/original/498738_01.jpg.jpeg?action=crop&width=950",
    code: "AR4237 800",
    user: "dsIsaiah",
    id: 22,
    contact: "capCinema@gmail.com",
    price: 450.0,
  },
  {
    title: "Air Jordan 1 Retro High OG 'Chicago' 2015",
    release: "05/29/2015",
    colors: ["White", "Black-Varsity", "Red"],
    brand: "Jordan",
    size: 13,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/046/085/372/original/14741_01.jpg.jpeg?action=crop&width=950",
    code: "555088 101",
    user: "dsIsaiah",
    id: 23,
    contact: "capCinema@gmail.com",
    price: 3100.0,
  },
  {
    title: "Air Jordan 6 Retro 'Infrared' 2019",
    release: "02/16/2019",
    colors: ["Black", "Infrared", "23-Black"],
    brand: "Jordan",
    size: 11.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/929/998/original/13538_01.jpg.jpeg?action=crop&width=950",
    code: "384664 060",
    user: "dsIsaiah",
    id: 24,
    contact: "capCinema@gmail.com",
    price: 290.0,
  },

  {
    title: `Tom Sachs x NikeCraft General Purpose Shoe 'Studio'`,
    release: "06/10/2022",
    colors: ["Light Cream", "White", "Light Bone"],
    brand: "Nike",
    size: 9.5,
    quantity: 3,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/024/924/original/888099_01.jpg.jpeg?action=crop&width=2000",
    code: "DA6672 200",
    user: "dsJosh",
    id: 11,
    contact: "ndgns2@gmail.com",
    price: 340.0,
  },

  {
    title: `Salehe Bembury x Pollex Clog 'Tide'`,
    release: "09/22/2022",
    colors: ["Tide", "Blue"],
    brand: "Crocs",
    size: 5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/078/551/714/original/207393_4ST.png.png?action=crop&width=950",
    code: "207393 4ST",
    user: "dsMaura",
    id: 26,
    contact: "mauraMagic10@gmail.com",
    price: 213.0,
  },

  {
    title: `Travis Scott x Air Jordan 1 Low OG 'Reverse Mocha'`,
    release: "07/21/2022",
    colors: ["Sail", "University Red", "Ridgerock"],
    brand: "Jordan",
    size: 9.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/326/089/original/854208_01.jpg.jpeg?action=crop&width=950",
    code: "DM7866 162",
    user: "dsJosh",
    id: 27,
    contact: "ndgns2@gmail.com",
    price: 1600.0,
  },

  {
    title: `Teddy Santis x 990v2 Made in USA 'Chrysanthemum'`,
    release: "07/28/2022",
    colors: ["Chrysanthemum", "Navy"],
    brand: "Nike",
    size: 12,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/076/742/843/original/1009956_01.jpg.jpeg?action=crop&width=950",
    code: "M990AD2",
    user: "dsIsaiah",
    id: 29,
    contact: "capCinema@gmail.com",
    price: 177.0,
  },

  {
    title: `Yeezy Boost 350 V2 'Dazzling Blue'`,
    release: "02/26/2022",
    colors: ["Core Black", "Dazzling Blue", "Core Black"],
    brand: "Yeezy",
    size: 8,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/067/561/513/original/884790_01.jpg.jpeg?action=crop&width=950",
    code: "GY7164",
    user: "dsChris",
    id: 30,
    contact: "coolguychris@gmail.com",
    price: 320.0,
  },
  {
    title: `Yeezy Boost 700 'Hi-Res Blue'`,
    release: "08/02/2022",
    colors: ["Hi-Res Blue", "Hi-Res Blue", "Hi-Res Blue"],
    brand: "Yeezy",
    size: 7.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/076/535/379/original/994560_01.jpg.jpeg?action=crop&width=950",
    code: "HP6674",
    user: "dsChris",
    id: 367,
    contact: "coolguychris@gmail.com",
    price: 340.0,
  },
  {
    title: `Fragment Design x Travis Scott x Air Jordan 1 Retro Low`,
    release: "08/13/2021",
    colors: ["Blue"],
    brand: "Jordan",
    size: 5.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/059/084/576/original/767449_01.jpg.jpeg?action=crop&width=950",
    code: "DM7866 140",
    user: "dsMaura",
    id: 35,
    contact: "mauraMagic10@gmail.com",
    price: 1252.0,
  },
  {
    title: `Air Jordan 5 Retro 'Concord'`,
    release: "08/06/2022",
    colors: ["White", "Dark Concord", "Black"],
    brand: "Jordan",
    size: 6.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/779/359/original/981489_01.jpg.jpeg?action=crop&width=950",
    code: "DD0587 141",
    user: "dsUser",
    id: 31,
    contact: "deadstock@gmail.com",
    price: 770.0,
  },

  {
    title: `Patta x Air Max 1 'White'`,
    release: "08/26/2022",
    colors: ["White", "Pure Platinum", "Metallic Silver"],
    brand: "Nike",
    size: 13,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/642/706/original/994564_01.jpg.jpeg?action=crop&width=2000",
    code: "DD0587 141",
    user: "dsIsaiah",
    id: 32,
    contact: "capCinema@gmail.com",
    price: 360.0,
  },
  {
    title: `The Simpsons x Old Skool 'Moe's Tavern'`,
    release: "08/07/2020",
    colors: ["Green", "Orange"],
    brand: "Vans",
    size: 8.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/041/929/310/original/669585_01.jpg.jpeg?action=crop&width=950",
    code: "VN0A4BV521L",
    user: "dsUser",
    id: 33,
    contact: "deadstock@gmail.com",
    price: 197.0,
  },

  {
    title: `Air Jordan 11 Retro 'Concord' 2018`,
    release: "12/08/2018",
    colors: ["White", "Black-Dark Concord"],
    brand: "Jordan",
    size: 8.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/047/069/787/original/351614_01.jpg.jpeg?action=crop&width=950",
    code: "378037 100",
    user: "dsJosh",
    id: 38,
    contact: "ndgns2@gmail.com",
    price: 483.0,
  },
  {
    title: `House of Terror x Sk8-Hi 'The Nightmare on Elm Street'`,
    release: "10/01/2021",
    colors: ["Red", "Black"],
    brand: "Vans",
    size: 6,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/061/754/902/original/828502_01.jpg.jpeg?action=crop&width=950",
    code: "VN0A4U3CZV1",
    user: "dsMaura",
    id: 34,
    contact: "mauraMagic10@gmail.com",
    price: 80.0,
  },
  {
    title: "Air Fear of God 1 'Triple Black'",
    release: "04/25/2020",
    colors: ["Black", "White", "Fire Red", "Light Steel Grey"],
    brand: "Nike",
    size: 11.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/081/096/360/original/596335_01.jpg.jpeg?action=crop&width=950",
    code: "AR4237 005",
    user: "dsChris",
    id: 20,
    contact: "coolguychris@gmail.com",
    price: 620.0,
  },
  {
    title: "Air Fear of God 1 'The Question'",
    release: "02-28-2020",
    colors: ["Multi Color", "Off Noir", "String", "Oatmeal"],
    brand: "Nike",
    size: 9,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/080/336/840/original/539575_01.jpg.jpeg?action=crop&width=950",
    code: "AR4237 902",
    user: "dsJosh",
    id: 21,
    contact: "ndgns2@gmail.com",
    price: 700.0,
  },
  {
    title: `Air Jordan 7 Retro 'Bordeaux' 2015`,
    release: "07/18/2015",
    colors: ["Black", "Bordeaux-Light", "Graphite-Midnight Fog"],
    brand: "Jordan",
    size: 9,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/047/069/787/original/351614_01.jpg.jpeg?action=crop&width=950",
    code: "378037 100",
    user: "dsJosh",
    id: 39,
    contact: "ndgns2@gmail.com",
    price: 435.0,
  },
  {
    title: `Off-White x Air Jordan 1 Retro High OG 'UNC'`,
    release: "05/22/2018",
    colors: ["White", "Dark Powder Blue-Cone"],
    brand: "Jordan",
    size: 13,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/710/357/original/335047_01.jpg.jpeg?action=crop&width=850",
    code: "AQ0818 148",
    user: "dsIsaiah",
    id: 40,
    contact: "capCinema@gmail.com",
    price: 3301.0,
  },
  {
    title: `Dunk Low Premium 'Graffiti'`,
    release: "08/05/2022",
    colors: ["Black", "Summit White", "Red Orbit", "Black"],
    brand: "Nike",
    size: 9.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/335/701/original/938834_01.jpg.jpeg?action=crop&width=950",
    code: "DM0108 002",
    user: "dsJosh",
    id: 28,
    contact: "ndgns2@gmail.com",
    price: 140.0,
  },

  {
    title: "Union x Air Jordan 1 Black Toe",
    release: "11/17/2018",
    colors: ["WHITE", "BLACK-VARSITY", "RED", "WOLF GREY"],
    brand: "Jordan",
    size: 9.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/014/557/original/466842_01.jpg.jpeg?action=crop&width=2000",
    code: "BV1300-106",
    user: "dsJosh",
    id: 1,
    contact: "ndgns2@gmail.com",
    price: 1250.0,
  },
];

app.set("port", process.env.PORT || 3001);
app.locals.title = "deadstock-api";

app.get("/api/users", (request, response) => {
  const data = app.locals.users;
  if (!data) {
    response.status(404).send({
      error: `Sorry this server is down!`,
    });
  }
  response.send({ data });
});

// request /inventory pulls all inventory
app.get("/api/inventory", (request, response) => {
  const data = app.locals.inventory;
  if (!data) {
    response.status(404).send({
      error: `Sorry this server is down!`,
    });
  }
  console.log(data);
  
  response.send({ data });
});

app.get("/api/inventory/:id", (req, res) => {
  const found = app.locals.inventory.find(
    (shoe) => shoe.id === Number(req.params.id)
  );

  res.json(found);
});

app.post("/api/inventory", async (req, res) => {
  const {
    title,
    release,
    colors,
    brand,
    size,
    quantity,
    url,
    code,
    user,
    id,
    price,
  } = req.body;

  const newPost = {
    title: title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    ),
    release: release || "N/A",
    colors: colors,
    brand: brand || "N/A",
    size: size,
    quantity: quantity || 1,
    url: url,
    code: code || "N/A",
    user: user,
    id: id,
    price: price,
  };
  app.locals.inventory.push(newPost);

  res.json({
    added: newPost,
    updated: app.locals.inventory,
  });
});

app.post("/api/:user/closet", async (req, res) => {
  const { username, password } = req.body;

  const user = app.locals.users.find(
    (user) => username === user.username && user.password === password
  );
  const result = user
    ? {
        username: user.username,
        contact: user.contact,
        closet: app.locals.inventory.filter(
          (shoe) => shoe.user === user.username
        ),
      }
    : {
        error: "Wrong credentials",
      };

  res.json(result);
});

app.delete("/api/inventory/:id", async (req, res) => {
  const found = app.locals.inventory.find(
    (shoe) => shoe.id === Number(req.params.id)
  );

  const filteredInventory = app.locals.inventory.filter(
    (shoe) => shoe.id !== found.id
  );
  app.locals.inventory = filteredInventory;
  res.json({
    removed: found,
    updated: app.locals.inventory,
  });
});

app.put("/api/inventory/:id", async (req, res) => {
  const found = app.locals.inventory.find(
    (shoe) => shoe.id === Number(req.params.id)
  );

  const filteredInventory = app.locals.inventory.filter(
    (shoe) => shoe.id !== found.id
  );

  app.locals.inventory = [...filteredInventory, req.body];

  res.json({
    removed: found,
    updated: app.locals.inventory,
  });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
