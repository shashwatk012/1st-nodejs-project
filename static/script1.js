const profile = document.querySelector(".profile");

async function populat() {
  const requestURL = `/loginDetails`;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const list = JSON.parse(superHeroesText);
  if (list.Name === "Error") {
    location.href = "/log-in";
  } else {
    profile.textContent = list.Name;
  }
}

populat();

seller = document.querySelector(".seller");

seller.addEventListener("click", () => {
  location.href = "/seller";
});

const product = document.querySelectorAll(".product");

async function populate(obj, ele) {
  const requestURL = `/${obj}`;
  const request = new Request(requestURL);

  const response = await fetch(request);
  // const superHeroesText = await response.text();

  // const list = JSON.parse(superHeroesText);
  const list = await response.json();
  // console.log(list);

  let html = "";
  let i = 0;
  list.forEach((element) => {
    if (i < 4) {
      html += `<div id=${element._id} class="icons">
      <img src="./static/public/images/${element.Image}" />
      <h3>${element.ProductsName}</h3>
      <p>Cost:Rs${element.Cost}</p>
    </div>`;
    }
    i++;
  });

  product[ele].innerHTML = html;
  const icons = document.querySelectorAll(".icons");
  icons.forEach((element) => {
    element.addEventListener("click", () => {
      localStorage.setItem("id", element.id);
      location.href = `/details`;
    });
  });
}

populate("mobile", 0);
populate("bicycle", 1);
// populate("sports", 2);
// populate("cooler", 3);

const item = document.querySelectorAll(".items");

item.forEach((element) => {
  element.addEventListener("click", () => {
    let ob = element.lastElementChild.textContent;
    ob = ob.toLowerCase();
    localStorage.setItem("names", ob);
    location.href = "/products";
  });
});

const inpu = document.querySelector(".inpu");
document.addEventListener(
  "keydown",
  (event) => {
    const input = inpu.value;
    if (input !== "") {
      var name = event.key;
      var code = event.code;
      if (name === "Enter") {
        localStorage.setItem("names", input.toLowerCase());
        location.href = "/products";
      }
    }
  },
  false
);
const Search = document.querySelector(".Searc");
Search.addEventListener("click", () => {
  const input = inpu.value;
  if (input !== "") {
    localStorage.setItem("names", input.toLowerCase());
    location.href = "/products";
  }
});
const pro = document.querySelector(".pro");
pro.addEventListener("click", () => {
  location.href = "/profile";
});
