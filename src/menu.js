// Title

// Category Name

// Cards

import main_Chicken_Cream_main from "./images/main_Chicken_Cream_main.png";
import main_Game_Over_main from "./images/main_Game_Over_main.png";
import main_Koala_Kong_main from "./images/main_Koala_Kong_main.png";
import main_Pavarotti_main from "./images/main_Pavarotti_main.png";
import sauce_bbq from "./images/sauce_bbq.png";
import sauce_blue_mayo from "./images/sauce_blue_mayo.png";
import sauce_jack_jack from "./images/sauce_jack_jack.png";
import sauce_Jackaroo from "./images/sauce_Jackaroo.png";
import starter_Cheese_balls from "./images/starter_Cheese_balls.png";
import starter_Onion_rings from "./images/starter_Onion_rings.png";

const menu = (() => {
  const obj = {
    title: "Menu",
    content: {
      sauces: [
        {
          title: "Bbq",
          desc: "Dip. Homemade",
          price: "0,70€",
          pic: sauce_bbq,
        },
        {
          title: "Blue Mayo",
          desc: "Dip. Homemade",
          price: "0,70€",
          pic: "placeholder",
        },
        {
          title: "Jack Jack sauce",
          desc: "Dip. Homemade",
          price: "0,70€",
          pic: "placeholder",
        },
        {
          title: "Jackaroo",
          desc: "Dip. Homemade",
          price: "0,70€",
          pic: "placeholder",
        },
      ],
      starters: [
        {
          title: "Onion Rings",
          desc: "6 pieces. Marinated for 24 hours & breaded with our secret recipe. Served with ring sauce.",
          price: "3,50€",
          pic: "placeholder",
        },

        {
          title: "Cheese Balls",
          desc: "6 pieces. Crispy cheese balls with aged gouda. Served with sweet chili sauce.",
          price: "3,50€",
          pic: "placeholder",
        },
      ],
      main: [
        {
          title: "Chicken Cream",
          desc: "Handmade buttery brioche bun, two handmade pieces of breaded chicken, vanilla ice cream, hot honey.",
          price: "5,10€",
          pic: "placeholder",
        },

        {
          title: "Pavarotti",
          desc: "Handmade buttery brioche bun, two 100% beef patties, double goat cheese, sautéed mushrooms, caramelized onions, truffle mayonnaise.",
          price: "5,90€",
          pic: "placeholder",
        },

        {
          title: "Koala Kong",
          desc: "Handmade buttery brioche bun, two pieces of fresh hand-breaded fried chicken breast, double cheddar, double smoked bacon, double fried egg, onion, iceberg lettuce, spicy mayo, jalapeños, sweet chili.",
          price: "5,90€",
          pic: "placeholder",
        },

        {
          title: "Game Over",
          desc: "Handmade brioche bun with 2 handmade 100% beef patties, 2 handmade pieces of breaded chicken, double cheddar, double smoked bacon, tomato, iceberg lettuce, mayonnaise & BBQ sauce.",
          price: "6,90€",
          pic: "placeholder",
        },
      ],
    },
  };

  const render = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = obj.title;

    const test = document.createElement("img");
    test.src = sauce_bbq;

    content.append(title, test);
  };

  console.log(obj);

  return { render };
})();

export { menu };
