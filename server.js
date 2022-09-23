const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

app.locals.users = [{ username: "deadstockuser1", password: "cheese" }];
app.locals.inventory = [
  {
    title: "Union x Air Jordan 1 Black Toe",
    release: "11/17/2018",
    colors: ["WHITE", "BLACK-VARSITY", "RED", "WOLF GREY"],
    brand: "Jordan",
    size: ["9.5"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/016/246/685/original/466842_01.jpg.jpeg?action=crop&width=950",
    code: "BV1300-106",
    user: "deadstockuser1",
    id: 1,
  },

  {
    title: "NikeCraft General Purpose Shoe",
    release: "09/02/2022",
    colors: ["DARK SULFUR", "WHITE-LIGHT", "CREAM"],
    brand: "Nike",
    size: ["7"],
    quantity: 2,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/642/737/original/981386_01.jpg.jpeg?action=crop&width=950",
    code: "DA6672-700",
    user: "deadstockuser",
    id: 2,
  },

  {
    title: "Nike Air Force 1 Low x Off-White Brooklyn",
    release: "09/02/2022",
    colors: ["LIGHT GREEN SPARK", "METALLIC SILVER"],
    brand: "Nike",
    size: ["11"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/720/052/original/935629_01.jpg.jpeg?action=crop&width=2000",
    code: "DX1419-300",
    user: "deadstockuser",
    id: 3,
  },

  {
    title: "Nike Dunk Low x Union Passport Pack Argon",
    release: "04/02/2022",
    colors: ["LIGHT BLUE", "ARGON", "WHITE"],
    brand: "Nike",
    size: ["10"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/066/733/594/original/860439_01.jpg.jpeg?action=crop&width=3000",
    code: "DJ9649-400",
    user: "deadstockuser",
    id: 4,
  },

  {
    title: `Nike Dunk Low "World Champ"`,
    release: "09/02/2022",
    colors: ["White", "Metallic Gold", "Black"],
    brand: "Nike",
    size: ["6.5"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/378/077/original/981526_01.jpg.jpeg?action=crop&width=2000",
    code: "DR9511 100",
    user: "deadstockuser",
    id: 5,
  },
  {
    title: `Air Jordan 1 Retro High OG 'Heirloom'`,
    release: "09/23/2022",
    colors: ["Vachetta Tan", "Black", "Sail"],
    brand: "Jordan",
    size: ["9.5"],
    quantity: 3,
    url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/075/085/671/original/555088_202.png.png?action=crop&width=2000",
    code: "555088 202",
    user: "deadstockuser",
    id: 6,
  },
  {
    title: `J. Balvin x Air Jordan 2 Retro`,
    release: "09/15/2022",
    colors: ["Celestine Blue", "White", "Multi-Color"],
    brand: "Jordan",
    size: ["11"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/369/335/original/949375_01.jpg.jpeg?action=crop&width=2000",
    code: "DQ7691 419",
    user: "deadstockuser",
    id: 7,
  },
  {
    title: `Yeezy Boost 350 V2 'Slate'`,
    release: "09/03/2022",
    colors: ["Slate", "Core Black", "Slate"],
    brand: "Adidas",
    size: ["11.5"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/775/178/original/924555_01.jpg.jpeg?action=crop&width=2000",
    code: "HP7870",
    user: "deadstockuser",
    id: 8,
  },

  {
    title: `Air Jordan 1 High Zoom Comfort 'Hare'`,
    release: "08/19/2022",
    colors: ["White", "Light Silver", "Dark Concord", "True Red"],
    brand: "Jordan",
    size: ["9"],
    quantity: 2,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/782/871/original/1000003_01.jpg.jpeg?action=crop&width=2000",
    code: "CT0978 100",
    user: "deadstockuser",
    id: 9,
  },
  {
    title: `Tom Sachs x NikeCraft General Purpose Shoe 'Studio'`,
    release: "06/10/2022",
    colors: ["Light Cream", "White", "Light Bone"],
    brand: "Nike",
    size: `9`,
    quantity: 3,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/024/924/original/888099_01.jpg.jpeg?action=crop&width=2000",
    code: "DA6672 200",
    user: "deadstockuser",
    id: 10,
  },
  {
    title: `Tom Sachs x NikeCraft General Purpose Shoe 'Studio'`,
    release: "06/10/2022",
    colors: ["Light Cream", "White", "Light Bone"],
    brand: "Nike",
    size: `9.5`,
    quantity: 3,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/024/924/original/888099_01.jpg.jpeg?action=crop&width=2000",
    code: "DA6672 200",
    user: "deadstockuser",
    id: 11,
  },
  {
    title: `Tom Sachs x NikeCraft General Purpose Shoe 'Studio'`,
    release: "06/10/2022",
    colors: ["Light Cream", "White", "Light Bone"],
    brand: "Nike",
    size: `10`,
    quantity: 3,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/024/924/original/888099_01.jpg.jpeg?action=crop&width=2000",
    code: "DA6672 200",
    user: "deadstockuser",
    id: 12,
  },
  {
    title: "Wmns Dunk Low Next Nature 'Phantom'",
    release: "09/16/2022",
    colors: ["Phantom", "Gold Suede", "White", "Volt"],
    brand: "Nike",
    size: ["6.5"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/239/540/original/1008781_01.jpg.jpeg?action=crop&width=950",
    code: "DN1431 001",
    user: "deadstockuser",
    id: 13,
  },
  {
    title: "Comme des Garçons Homme Plus x Air Max 97 'Black'",
    release: "09/22/2022",
    colors: ["Black"],
    brand: "Nike",
    size: ["8"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/078/305/517/original/DX6932_002.png.png?action=crop&width=2000",
    code: "DX6932 002",
    user: "deadstockuser",
    id: 14,
  },
  {
    title: "Yeezy Foam Runner 'Sand'",
    release: "03/26/2021",
    colors: ["Etham"],
    brand: "Adidas",
    size: ["8.5"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/052/340/157/original/728431_01.jpg.jpeg?action=crop&width=2000",
    code: "FY4567",
    user: "deadstockuser",
    id: 15,
  },
  {
    title: "Bodega x 997S 'Better Days'",
    release: "09/25/2020",
    colors: ["Tan"],
    brand: "New Balance",
    size: ["8.5"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/043/179/495/original/679394_01.jpg.jpeg?action=crop&width=950",
    code: "MS997JBO",
    user: "deadstockuser",
    id: 16,
  },
  {
    title: "Bodega x 997S 'No Bad Days'",
    release: "09/28/2019",
    colors: ["Cool Breeze"],
    brand: "New Balance",
    size: ["12"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/026/051/905/original/543653_01.jpg.jpeg?action=crop&width=950",
    code: "MS997JBG",
    user: "deadstockuser",
    id: 17,
  },
  {
    title: "Air Jordan 1 Retro High OG 'Stealth'",
    release: "08/30/2022",
    colors: ["Stealth", "White"],
    brand: "Jordan",
    size: ["12"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/076/570/237/original/946681_01.jpg.jpeg?action=crop&width=950",
    code: "555088 037",
    user: "deadstockuser",
    id: 18,
  },
  {
    title: "Air Jordan 4 Retro SE 'Black Canvas'",
    release: "10-01-2022",
    colors: ["Black", "White", "Fire Red", "Light Steel Grey"],
    brand: "Jordan",
    size: ["11"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/076/972/065/original/933532_01.jpg.jpeg?action=crop&width=950",
    code: "DH7138 006",
    user: "deadstockuser",
    id: 19,
  },
  {
    title: "Air Fear of God 1 'Triple Black'",
    release: "04/25/2020",
    colors: ["Black", "White", "Fire Red", "Light Steel Grey"],
    brand: "Nike",
    size: ["11.5"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/035/816/416/original/596335_01.jpg.jpeg?action=crop&width=950",
    code: "AR4237 005",
    user: "deadstockuser",
    id: 20,
  },
  {
    title: "Air Fear of God 1 'The Question'",
    release: "02-28-2020",
    colors: ["Multi Color", "Off Noir", "String", "Oatmeal"],
    brand: "Nike",
    size: ["9"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/033/071/524/original/539575_01.jpg.jpeg?action=crop&width=950",
    code: "AR4237 902",
    user: "deadstockuser",
    id: 21,
  },
  {
    title: "Air Fear Of God 1 'Orange Pulse'",
    release: "06/01/2019",
    colors: ["Orange Pulse"],
    brand: "Nike",
    size: ["13"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/022/405/536/original/498738_01.jpg.jpeg?action=crop&width=950",
    code: "AR4237 800",
    user: "deadstockuser",
    id: 22,
  },
  {
    title: "Air Jordan 1 Retro High OG 'Chicago' 2015",
    release: "05/29/2015",
    colors: ["White", "Black-Varsity", "Red"],
    brand: "Jordan",
    size: ["13"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/046/085/372/original/14741_01.jpg.jpeg?action=crop&width=950",
    code: "555088 101",
    user: "deadstockuser",
    id: 23,
  },
  {
    title: "Air Jordan 6 Retro 'Infrared' 2019",
    release: "02/16/2019",
    colors: ["Black", "Infrared", "23-Black"],
    brand: "Jordan",
    size: ["11.5"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/018/675/318/original/464372_01.jpg.jpeg?action=crop&width=950",
    code: "384664 060",
    user: "deadstockuser",
    id: 24,
  },
  {
    title: "Air Jordan 6 Retro 'Infrared' 2019",
    release: "02/16/2019",
    colors: ["Black", "Infrared", "23-Black"],
    brand: "Jordan",
    size: ["6"],
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/018/675/318/original/464372_01.jpg.jpeg?action=crop&width=950",
    code: "384664 060",
    user: "deadstockuser",
    id: 25,
  },
];

app.set("port", process.env.PORT || 3001);
app.locals.title = "deadstock-api";

//request /username returns an array of all matching shoes ex. /deadstockuser1
app.get("/:username", (request, response) => {
  console.log(request.params.username);
  const data = app.locals.inventory.filter(
    (shoe) => shoe.user === request.params.username
  );
  if (!data) {
    response.status(404).send({
      error: `Sorry this server is down!`,
    });
  }
  response.send({ data });
});

//request / pulls all inventory
app.get("/api/users", (request, response) => {
  const data = app.locals.users;
  if (!data) {
    response.status(404).send({
      error: `Sorry this server is down!`,
    });
  }
  response.send({ data });
});

// request / pulls all inventory
app.get("/", (request, response) => {
  const data = app.locals.inventory;
  if (!data) {
    response.status(404).send({
      error: `Sorry this server is down!`,
    });
  }
  response.send({ data });
});



app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
