const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

https: (app.locals.inventory = [
  {
    title: "Union x Air Jordan 1 Black Toe",
    release: "11/17/2018",
    color: ["black", "red"],
    brand: "Jordan",
    size: 9.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/016/246/685/original/466842_01.jpg.jpeg?action=crop&width=950",
    code: "BV1300-106",
    user: "deadstockuser1",
  },

  {
    title: "NikeCraft General Purpose Shoe",
    release: "09/02/2022",
    color: ["DARK SULFUR", "WHITE-LIGHT", "CREAM"],
    brand: "Nike",
    size: 7,
    quantity: 2,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/642/737/original/981386_01.jpg.jpeg?action=crop&width=950",
    code: "DA6672-700",
    user: "deadstockuser",
  },
  {
    title: "Union x Air Jordan 1 Black Toe",
    release: "11/17/2018",
    color: ["black", "red"],
    brand: "Jordan",
    size: 9.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/016/246/685/original/466842_01.jpg.jpeg?action=crop&width=950",
    user: "deadstockuser",
  },
  {
    title: "NikeCraft General Purpose Shoe",
    release: "09/02/2022",
    color: ["DARK SULFUR", "WHITE-LIGHT", "CREAM"],
    brand: "Nike",
    size: 7,
    quantity: 2,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/642/737/original/981386_01.jpg.jpeg?action=crop&width=950",
    code: "DA6672-700",
    user: "deadstockuser1",
  },
]),
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
