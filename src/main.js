import { contact } from "./contact";
import { home } from "./home";
import { menu } from "./menu";
import "./style.css";

(() => {
  const tabs = {
    home: {
      render: () => home.render(),
    },
    menu: { render: () => menu.render() },
    contact: { render: () => contact.render() },
  };

  // **** LISTENERS ****
  const btns = document.querySelectorAll("nav button");

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      tabs[e.target.id].render();
    });
  });

  function test() {
    console.log("NO EVERYTHING IS NOT UP TO DATE");
  }

  // **** INITIALIZATION ****
  home.render();
  test();
})();
