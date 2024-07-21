let apiCat = "https://667ab588bd627f0dcc902914.mockapi.io/catalog_of_items";
let apiAddCart = "https://667ab3c9bd627f0dcc90219a.mockapi.io/addTocart";

let root = document.querySelector("#root");

let rootBasket = document.querySelector("#rootBasket");
let btnBasket = document.querySelector("#btnBasket");
let basketModal = document.querySelector(".basketModal");
let btnCloseBasket = document.querySelector(".btnCloseBasket");

let formSearchCat = document.querySelector(".formSearchCat");
let formSearchCat2 = document.querySelector(".formSearchCat2");

let viewModal = document.querySelector(".viewModal");
let rootView = document.querySelector("#rootView");
let btnCloseView = document.querySelector(".btnCloseView");

let delModal = document.querySelector(".delModal");
let btnYes = document.querySelector(".btnYes");
let btnNo = document.querySelector(".btnNo");

btnCloseBasket.onclick = () => {
  basketModal.close();
};

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

async function getDataAddCart() {
  try {
    let response = await fetch(apiAddCart);
    let data = await response.json();
    getAddCart(data);
  } catch (error) {
    console.error(error);
  }
}
getDataAddCart();

async function putDataAddCart(obj, id) {
  try {
    let response = await fetch(`${apiAddCart}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    getDataAddCart();
  } catch (error) {
    console.error(error);
  }
}

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
    getDataAddCart();
  } catch (error) {
    console.error(error);
  }
}

let data2 = null;

btnBasket.onclick = () => {
  basketModal.showModal();
};

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
function getAddCart(data) {
  rootBasket.innerHTML = "";
  data.forEach((e) => {
    let sec = document.createElement("div");
    sec.className =
      "flex w-full justify-between gap-[24px] border max-md:flex-col my-[20px] rounded-lg bg-[#fff] p-[20px_50px] items-center";

    let part1 = document.createElement("div");

    let part2 = document.createElement("div");
    part2.className = "flex flex-col";

    let part3 = document.createElement("div");
    part3.className = "flex gap-[10px] mt-[10px] items-center";

    let div1 = document.createElement("div");
    div1.className = "flex border";

    let div2 = document.createElement("div");

    let img = document.createElement("img");
    img.src = e.img;

    let price = document.createElement("h1");
    price.innerHTML = `${e.price} c`;
    price.className = "text-2xl font-bold";

    let model = document.createElement("h1");
    model.innerHTML = e.model;
    model.className = "text-xl font-medium";

    let btnDelAddCart = document.createElement("button");
    btnDelAddCart.innerHTML =
      "<svg height='24' width='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 6H8H6.09813L7.22364 18.0054C7.27312 18.5332 7.30558 18.8717 7.35014 19.1287C7.39259 19.3735 7.43417 19.4648 7.46185 19.5113C7.5633 19.6818 7.71319 19.8183 7.89244 19.9034C7.94135 19.9266 8.0361 19.9595 8.28378 19.9789C8.54377 19.9993 8.88389 20 9.41403 20H14.586C15.1161 20 15.4562 19.9993 15.7162 19.9789C15.9639 19.9595 16.0587 19.9266 16.1076 19.9034C16.2868 19.8183 16.4367 19.6818 16.5381 19.5113C16.5658 19.4648 16.6074 19.3735 16.6499 19.1287C16.6944 18.8717 16.7269 18.5332 16.7764 18.0054L17.9019 6H16H14H10ZM15.874 4H18.0894L18.0977 3.91103L19.0468 4H21H22V6H21H19.9106L18.7676 18.192L18.7642 18.2282C18.7191 18.7095 18.68 19.1269 18.6205 19.4704C18.5573 19.8347 18.4597 20.1931 18.257 20.5338C17.9526 21.0454 17.503 21.4549 16.9652 21.7102C16.6071 21.8802 16.2411 21.9439 15.8725 21.9728C15.525 22 15.1058 22 14.6225 22H14.6225H14.6224H14.6224H14.586H9.41403H9.37758H9.37756H9.37754H9.37752C8.89418 22 8.47498 22 8.12748 21.9728C7.75894 21.9439 7.39294 21.8802 7.03478 21.7102C6.49703 21.4549 6.04737 21.0454 5.74303 20.5338C5.54033 20.1931 5.44271 19.8347 5.37955 19.4704C5.31998 19.1269 5.28087 18.7095 5.23576 18.2282L5.23237 18.192L4.08937 6H3H2V4H3H4.95323L5.90229 3.91103L5.91063 4H8.12602C8.57006 2.27477 10.1362 1 12 1C13.8638 1 15.4299 2.27477 15.874 4ZM10.2676 4C10.6134 3.4022 11.2597 3 12 3C12.7403 3 13.3866 3.4022 13.7324 4H10.2676ZM8.43957 8.06433L8.50195 9.06238L9.00195 17.0624L9.06433 18.0604L11.0604 17.9357L10.9981 16.9376L10.4981 8.93762L10.4357 7.93957L8.43957 8.06433ZM15.5604 8.06433L15.4981 9.06238L14.9981 17.0624L14.9357 18.0604L12.9396 17.9357L13.0019 16.9376L13.5019 8.93762L13.5643 7.93957L15.5604 8.06433Z' fill='#73787D'></path></svg>";
    btnDelAddCart.className =
      "flex items-center w-full transition-all rounded-md p-[5px] hover:bg-red-500 font-bold ";

    let btnHire = document.createElement("button");
    btnHire.textContent = "Hire";
    btnHire.className = "p-[5px_10px] w-full bg-yellow-400 font-medium";

    let btnPlus = document.createElement("button");
    btnPlus.className = "p-[5px_10px] border w-full font-medium";
    btnPlus.innerHTML = "+";
    btnPlus.onclick = () => {
      if (inpScreen.value == e.amount) {
        btnPlus.disabled;
      } else {
        inpScreen.value++;
        putDataAddCart({ amount: inpScreen.value }, e.id);
        console.log(inpScreen);
      }
    };

    let inpScreen = document.createElement("input");
    inpScreen.type = "number";
    inpScreen.readOnly = true;
    inpScreen.className = "border w-full p-[5px_10px] text-center";
    inpScreen.value = 1;

    let btnMinus = document.createElement("button");
    btnMinus.className = "p-[5px_10px] border w-full  font-medium";
    btnMinus.innerHTML = "-";
    if (inpScreen.value == 1) {
      btnMinus.style.backgroundColor = "#ddd";
    }
    btnMinus.onclick = () => {
      if (inpScreen.value == 1) {
        btnMinus.disabled;
      } else {
        inpScreen.value--;
        putDataAddCart({ amount: inpScreen.value }, e.id);
      }
    };

    div2.append(btnDelAddCart);
    div1.append(btnMinus, inpScreen, btnPlus);
    part3.append(div1, div2);
    part2.append(price, model, btnHire, part3);
    part1.appendChild(img);
    sec.append(part1, part2);
    rootBasket.appendChild(sec);
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
