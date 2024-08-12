import {
  btnCloseFooter,
  btnOpenFooter,
  footer,
  icon,
} from "../basket/basket.js";

let apiCat = "https://667ab588bd627f0dcc902914.mockapi.io/catalog_of_items";

let root = document.querySelector("#root");

let formSearchCat = document.querySelector(".formSearchCat");
let formSearchCat2 = document.querySelector(".formSearchCat2");
let inpSearchCat = document.querySelector(".inpSearchCat");
let inpSearchCat2 = document.querySelector(".inpSearchCat2");

let viewModal = document.querySelector(".viewModal");
let rootView = document.querySelector("#rootView");
let btnCloseView = document.querySelector(".btnCloseView");

let basketNumDiv = document.querySelector(".basketNumDiv");
let basketNum = document.createElement("div");
basketNum.innerHTML = 0;

let btnBasket = document.querySelector(".btnBasket");

btnBasket.onclick = () => {
  basketNum.innerHTML = "";
};

if (basketNum.innerHTML == 0) {
  basketNumDiv.classList.toggle("hidden");
} else if (basketNum.innerHTML > 0) {
  basketNumDiv.classList.toggle("hidden");
}

btnCloseView.onclick = () => {
  viewModal.close();
};

formSearchCat.onsubmit = (event) => {
  event.preventDefault();
  searchDataCat("Model", event.target["inpSearchCat"].value.trim());
};

formSearchCat2.onsubmit = (event) => {
  event.preventDefault();
  searchDataCat("Model", event.target["inpSearchCat"].value);
};

inpSearchCat.oninput = () => {
  if (inpSearchCat.value.trim() == "") {
    getDataCat();
  }
};

btnCloseFooter.onclick = () => {
  iconLG.classList.toggle("animate-[rotate2_.3s_linear_1]");
};

inpSearchCat2.oninput = () => {
  if (inpSearchCat.value.trim() == "") {
    getDataCat();
  }
};

// let iconLG = document.querySelector(".iconLG");
// let btnCloseFooterLG = document.querySelector(".btnCloseFooterLG");
// let footerLG = document.querySelector(".footerLG");
// let btnOpenFooterLG = document.querySelector(".btnOpenFooterLG");
// let iconCloseLG = document.querySelector(".iconCloseLG");

// btnCloseFooterLG.onclick = () => {
//   iconLG.classList.toggle("animate-[rotateLG2_.3s_ease-in-out_1]");
//   iconLG.classList.toggle("rotate-[90deg]");
//   console.log(iconLG);

//   setTimeout(() => {
//     footerLG.classList.add("animate-[heightLG2_.3s_linear_1]");
//     footerLG.classList.remove("animate-[heightLG_.3s_linear_1]");
//   }, 300);
//   setTimeout(() => {
//     footerLG.classList.toggle("hidden");
//     footerLG.classList.remove("animate-[heightLG2_.3s_linear_1]");
//     iconLG.classList.toggle("animate-[rotateLG2_.3s_ease-in-out_1]");
//     rootBasket.classList.toggle("md:pl-[10%]");
//   }, 600);
// };

// btnOpenFooterLG.onclick = () => {
//   iconCloseLG.classList.toggle("rotate-[0deg]");
//   iconCloseLG.classList.toggle("animate-[rotateLG_.3s_linear_1]");
//   iconCloseLG.classList.toggle("rotate-[90deg]");

//   setTimeout(() => {
//     footerLG.classList.toggle("animate-[heightLG_.3s_linear_1]");
//     footerLG.classList.toggle("hidden");

//     iconLG.classList.toggle("rotate-[0deg]");
//     iconLG.classList.toggle("rotate-[90deg]");
//   }, 600);
//   setTimeout(() => {
//     footerLG.classList.remove("animate-[heightLG_.3s_linear_1]");
//     iconCloseLG.classList.toggle("rotate-[90deg]");
//     iconCloseLG.classList.toggle("animate-[rotateLG_.3s_linear_1]");
//     rootBasket.classList.toggle("md:pl-[10%]");
//   }, 800);
// };

async function searchDataCat(q, s) {
  try {
    let response = await fetch(`${apiCat}?${q}=${s}`);
    let data = await response.json();
    getCat(data);
  } catch (error) {
    console.error(error);
  }
}

async function getDataCat() {
  try {
    let response = await fetch(apiCat);
    let data = await response.json();
    getCat(data);
  } catch (error) {
    console.error(error);
  }
}
getDataCat();

async function postDataAddCart(obj) {
  try {
    let response = await fetch(apiAddCart, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    // getDataAddCart();
  } catch (error) {
    console.error(error);
  }
}

let data2 = null;

let idxDel;

function openViewModal(id) {
  viewModal.showModal();

  rootView.innerHTML = "";

  let sel = data2.find((e) => {
    return e.id === id;
  });

  let sec = document.createElement("div");
  sec.className = "flex justify-between max-md:flex-col gap-x-3 items-center ";

  let part1 = document.createElement("div");
  part1.className = "py-[10px]";

  let img = document.createElement("img");
  img.src = sel.img;

  let part2 = document.createElement("div");
  part2.className = "flex flex-col  juctify-center items-start gap-[15px]";

  let model = document.createElement("h1");
  model.innerHTML = sel.Model;
  model.className = "font-medium";

  let price = document.createElement("h1");
  price.innerHTML = `${sel.price} c`;
  price.className = "font-bold";

  let btnAddToBasket = document.createElement("button");
  btnAddToBasket.innerHTML = "Add to basket";
  btnAddToBasket.className =
    "bg-yellow-400 w-full rounded-lg active:bg-black active:text-[#fff] font-medium p-[5px_10px]";
  btnAddToBasket.onclick = () => {
    postDataAddCart({
      img: sel.img,
      price: sel.price,
      model: sel.Model,
      time: new Date(),
    });
    viewModal.close();

    basketNum.innerHTML++;

    if (basketNum.innerHTML == 1) {
      basketNumDiv.classList.toggle("hidden");
    }
    basketNumDiv.append(basketNum);
    console.log(basketNum.innerHTML);
  };

  part1.append(img);
  part2.append(model, price, btnAddToBasket);
  sec.append(part1, part2);
  rootView.append(sec);
}

function getCat(data) {
  data2 = data;
  root.innerHTML = "";
  data.forEach((e) => {
    let sec = document.createElement("div");
    sec.className = "relative";

    let part1 = document.createElement("div");
    part1.className = "w-[150px]";

    let part2 = document.createElement("div");
    part2.className = "mt-[10px] absolute bottom-0";

    let imgDiv = document.createElement("div");
    imgDiv.className = "mb-2";

    let labDiv = document.createElement("div");
    labDiv.className = "my-[50px] flex flex-col";

    let modelDiv = document.createElement("div");
    modelDiv.className = "space-x-[10px]";

    let priceDiv = document.createElement("div");

    let img = document.createElement("img");
    img.src = e.img;
    img.className = "max-w-full";

    let price = document.createElement("p");
    price.innerHTML = `${e.price} c`;
    price.className = "font-bold";

    let Model = document.createElement("p");
    Model.innerHTML = e.Model;
    Model.className = "font-medium text-gray-500 ";

    let btnAddCart = document.createElement("button");
    btnAddCart.textContent = "Add to Cart";
    btnAddCart.textContent = "Add to Cart";
    btnAddCart.className =
      "btnAddCart p-[5px_10px] active:bg-black active:text-[#fff] text-[12px] bg-yellow-400 rounded-lg font-medium ";
    btnAddCart.onclick = () => {
      openViewModal(e.id);
    };

    modelDiv.append(Model);
    priceDiv.append(price);
    labDiv.append(priceDiv, modelDiv);
    imgDiv.append(img);
    part1.append(imgDiv, labDiv);
    part2.appendChild(btnAddCart);
    sec.append(part1, part2);
    root.appendChild(sec);
  });
}

// let obj = {
//   name: "Yosin",
//   surname: "Fozilov",
//   all: [
//     {
//       img: "https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/10330/kondicioner-aux-asw-h09a4-ffr1-1668698767781-md.webp",
//       price: 2660,
//       model: "Air conditionar Aux ASW-HO9A4/FFR1",
//       time: "2024-07-16T14:32:45.902Z",
//       id: "1",
//     },
//     {
//       img: "https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/10330/kondicioner-aux-asw-h09a4-ffr1-1668698767781-md.webp",
//       price: 2660,
//       model: "Air conditionar Aux ASW-HO9A4/FFR1",
//       time: "2024-07-17T14:36:59.417Z",
//       id: "2",
//     },
//     {
//       img: "https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/10330/kondicioner-aux-asw-h09a4-ffr1-1668698767781-md.webp",
//       price: 2660,
//       model: "Air conditionar Aux ASW-HO9A4/FFR1",
//       time: "2024-07-17T14:37:03.096Z",
//       id: "3",
//     },
//     {
//       img: "https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/alifshop/1428/kondicioner-tcl-tac-12chs-xa21-12-k-1684477153273-md.webp",
//       price: 2821,
//       model: "Air conditionar ASW-HO9A4/FFR1-13",
//       time: "2024-07-17T14:38:09.428Z",
//       id: "4",
//     },
//   ],
// };

// let lala = Object.values(obj);
// console.log(lala);
