seller = document.querySelector(".seller");

seller.addEventListener("click", () => {
  location.href = "/seller";
});

const product = document.querySelectorAll(".product");

async function populate(obj, ele) {
  const requestURL = `http://localhost:3000/${obj}`;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const list = JSON.parse(superHeroesText);
  console.log(list);

  let html = "";
  if (ele == 1) {
    for (let i = 0; i < 4; i++) {
      html += `<div id=${list[i]._id} class="icons">
      <img src=${list[i].Image} class="pho" />
      <h3>${list[i].ProductsName}</h3>
      <p>Cost:Rs${list[i].Cost}</p>
    </div>`;
    }
  } else {
    for (let i = 0; i < 4; i++) {
      html += `<div id=${list[i]._id} class="icons">
      <img src=${list[i].Image} />
      <h3>${list[i].ProductsName}</h3>
      <p>Cost:Rs${list[i].Cost}</p>
    </div>`;
    }
  }
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
populate("sports", 2);
populate("cooler", 3);

const item = document.querySelectorAll(".items");

item.forEach((element) => {
  element.addEventListener("click", () => {
    let ob = element.lastElementChild.textContent;
    ob = ob.toLowerCase();
    localStorage.setItem("names", ob);
    location.href = "/products";
  });
});

const Search = document.querySelector(".Searc");
Search.addEventListener("click", () => {
  const input = document.querySelector(".inpu").value;
  console.log(input);
  localStorage.setItem("names", input);
  location.href = "/products";
});
