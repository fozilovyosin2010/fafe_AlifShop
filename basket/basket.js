let apiAddCart = "https://667ab3c9bd627f0dcc90219a.mockapi.io/addTocart";

let rootBasket = document.querySelector("#rootBasket");

let delModal = document.querySelector(".delModal");
let btnYes = document.querySelector(".btnYes");
let btnNo = document.querySelector(".btnNo");
let btnExitDel = document.querySelector(".btnExitDel");

export let btnOpenFooter = document.querySelector(".btnOpenFooter");
export let icon = document.querySelector(".icon");
export let btnCloseFooter = document.querySelector(".btnCloseFooter");
export let footer = document.querySelector(".footer");

btnOpenFooter.onclick = () => {
  icon.classList.toggle("rotate-[270deg]");
  icon.classList.toggle("animate-[rotate_.3s_linear_1]");
  setTimeout(() => {
    footer.classList.toggle("max-md:hidden");
    footer.classList.toggle("animate-[width_.3s_ease-in-out_1]");
  }, 310);
};

btnCloseFooter.onclick = () => {
  footer.classList.remove("animate-[width_.3s_ease-in-out_1]");
  footer.classList.add("animate-[width2_.3s_ease-in-out_1]");
  setTimeout(() => {
    footer.classList.toggle("max-md:hidden");
  }, 300);
  if (icon.classList.contains("animate-[rotate_.3s_linear_1]")) {
    icon.classList.toggle("animate-[rotate_.3s_linear_1]");
    icon.classList.toggle("rotate-[270deg]");
  }
};

let iconLG = document.querySelector(".iconLG");
let btnCloseFooterLG = document.querySelector(".btnCloseFooterLG");
let footerLG = document.querySelector(".footerLG");
let btnOpenFooterLG = document.querySelector(".btnOpenFooterLG");
let iconCloseLG = document.querySelector(".iconCloseLG");

btnCloseFooterLG.onclick = () => {
  iconLG.classList.toggle("animate-[rotateLG2_.3s_ease-in-out_1]");
  iconLG.classList.toggle("rotate-[90deg]");
  console.log(iconLG);

  setTimeout(() => {
    footerLG.classList.add("animate-[heightLG2_.3s_linear_1]");
    footerLG.classList.remove("animate-[heightLG_.3s_linear_1]");
  }, 300);
  setTimeout(() => {
    footerLG.classList.toggle("hidden");
    footerLG.classList.remove("animate-[heightLG2_.3s_linear_1]");
    iconLG.classList.toggle("animate-[rotateLG2_.3s_ease-in-out_1]");
    rootBasket.classList.toggle("md:pl-[10%]");
  }, 600);
};

btnOpenFooterLG.onclick = () => {
  iconCloseLG.classList.toggle("rotate-[0deg]");
  iconCloseLG.classList.toggle("animate-[rotateLG_.3s_linear_1]");
  iconCloseLG.classList.toggle("rotate-[90deg]");

  setTimeout(() => {
    footerLG.classList.toggle("animate-[heightLG_.3s_linear_1]");
    footerLG.classList.toggle("hidden");

    iconLG.classList.toggle("rotate-[0deg]");
    iconLG.classList.toggle("rotate-[90deg]");
  }, 600);
  setTimeout(() => {
    footerLG.classList.remove("animate-[heightLG_.3s_linear_1]");
    iconCloseLG.classList.toggle("rotate-[90deg]");
    iconCloseLG.classList.toggle("animate-[rotateLG_.3s_linear_1]");
    rootBasket.classList.toggle("md:pl-[10%]");
  }, 800);
};

btnNo.onclick = () => {
  delModal.close();
};

btnExitDel.onclick = () => {
  delModal.close();
};

btnYes.onclick = () => {
  delDataAddCart(idxDel);
  delModal.close();
};

let idxDel;
function openDelModal(id) {
  idxDel = id;
  delModal.showModal();
}

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

async function delDataAddCart(id) {
  try {
    let response = await fetch(`${apiAddCart}/${id}`, {
      method: "DELETE",
    });
    getDataAddCart();
  } catch (error) {
    console.error(error);
  }
}

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

function getAddCart(data) {
  rootBasket.innerHTML = "";

  data.forEach((e) => {
    let sec = document.createElement("div");
    sec.className =
      "flex w-full justify-between gap-[24px] border-b max-md:flex-col my-[20px] bg-[#fff] p-[20px_50px] items-center";

    let part1 = document.createElement("div");

    let part2 = document.createElement("div");
    part2.className = "flex flex-col";

    let part3 = document.createElement("div");
    part3.className = "flex mt-[10px] juctify-between gap-2 items-center";

    let div1 = document.createElement("div");
    div1.className = "flex border w-full";

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
    btnDelAddCart.onclick = () => {
      openDelModal(e.id);
    };

    let btnHire = document.createElement("button");
    btnHire.textContent = "Hire";
    btnHire.className = "p-[5px_10px] w-full bg-yellow-400 font-medium";
    btnHire.onclick = () => {
      alert("Order is delivered");
      delDataAddCart(e.id);
    };

    let btnPlus = document.createElement("button");
    btnPlus.className = "p-[5px_10px] border w-full font-medium";
    btnPlus.innerHTML = "+";
    btnPlus.onclick = () => {
      if (inpScreen.value == 10) {
        btnPlus.disabled;
      } else {
        inpScreen.value++;

        putDataAddCart({ amount: inpScreen.value }, e.id);
      }
    };

    let inpScreen = document.createElement("input");
    inpScreen.type = "number";
    inpScreen.readOnly = true;
    inpScreen.className = "border w-full p-[5px_10px] text-center";
    inpScreen.value = e.amount;

    let btnMinus = document.createElement("button");
    btnMinus.className = "p-[5px_10px] border w-full  font-medium";
    btnMinus.innerHTML = "-";

    btnMinus.onclick = () => {
      if (inpScreen.value == 1) {
        btnMinus.disabled;
      } else {
        inpScreen.value--;
        putDataAddCart({ amount: inpScreen.value });
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
