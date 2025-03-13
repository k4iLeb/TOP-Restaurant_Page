const home = (() => {
  const obj = {
    title: "Big Fat Burgers",
    about: {
      title:
        "The now multi-award-winning 'Big Fat Burgers' is the absolute must-try in town.",
      desc: "It's already smashing all order records, while outside the stores, there's a permanent street party going on!",
    },
    hours: {
      title: "Hours",
      desc: [
        "Tuesday 6pm – 1am",
        "Wednesday 6pm – 1am",
        "Thursday 6pm – 1am",
        "Friday 6pm – 1am",
        "Saturday 12.30pm–1am",
        "Sunday 12.30pm–1am",
      ],
    },
    location: {
      title: "Location",
      desc: `See <a href="">contact</a>`,
    },
  };

  const render = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = obj.title;

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-list");

    const aboutCard = document.createElement("div");
    aboutCard.classList.add("card");
    const aboutCardTitle = document.createElement("h2");
    aboutCardTitle.textContent = obj.about.title;
    const aboutCardDesc = document.createElement("p");
    aboutCardDesc.textContent = obj.about.desc;
    aboutCard.append(aboutCardTitle, aboutCardDesc);

    const hoursCard = document.createElement("div");
    hoursCard.classList.add("card");
    const hoursCardTitle = document.createElement("h2");
    hoursCardTitle.textContent = obj.hours.title;
    const hoursCardDescList = document.createElement("ul");
    hoursCardDescList.innerHTML = obj.hours.desc
      .map((x) => {
        return `<li>${x}</li>`;
      })
      .join("");
    hoursCard.append(hoursCardTitle, hoursCardDescList);

    const locCard = document.createElement("div");
    locCard.classList.add("card");
    const locCardTitle = document.createElement("h2");
    locCardTitle.textContent = obj.location.title;
    const locCardDesc = document.createElement("p");
    locCardDesc.innerHTML = obj.location.desc;
    locCard.append(locCardTitle, locCardDesc);

    cardContainer.append(aboutCard, hoursCard, locCard);

    content.append(title, cardContainer);
  };

  return { render };
})();

export { home };
