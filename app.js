const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let btnContain=document.getElementById("btn-container");
let allBtn = document.createElement("button");
allBtn.classList.add("text-black", "border", "border-black", "rounded","p-3");

allBtn.innerText = "All";

let koreaBtn = document.createElement("button");
koreaBtn.classList.add("text-black", "border", "border-black", "rounded","p-3");
koreaBtn.innerText = "Korea";

let japanBtn = document.createElement("button");
japanBtn.classList.add("text-black", "border", "border-black", "rounded","p-3");
japanBtn.innerText = "Japan";

let chinaBtn = document.createElement("button");
chinaBtn.classList.add("text-black", "border", "border-black", "rounded","p-3");
chinaBtn.innerText = "China";

btnContain.appendChild(allBtn);
btnContain.appendChild(koreaBtn);
btnContain.appendChild(japanBtn);
btnContain.appendChild(chinaBtn);


allBtn.addEventListener("click", () => showMenuItems("All"));
koreaBtn.addEventListener("click", () => showMenuItems("Korea"));
japanBtn.addEventListener("click", () => showMenuItems("Japan"));
chinaBtn.addEventListener("click", () => showMenuItems("China"));



let itemAll=document.getElementById("All");
let itemKorea=document.getElementById("Korea");


menu.forEach(item => {
  const menuItemAll = document.createElement("div");
  menuItemAll.className = "w-1/2 px-4 mb-6"; // biraz daha alt boşluk

  menuItemAll.innerHTML = `
    <div class="flex items-start gap-6 border-b border-black  pb-6">
      <img src="${item.img}" class="w-36 h-36 object-cover rounded" />
      <div class="flex-1">
        <div class="flex justify-between items-center">
          <h2 class="font-bold text-red-700 text-lg">${item.title}</h2>
          <span class="text-red-700 font-semibold text-lg">${item.price}</span>
        </div>
        <p class="text-base text-gray-700 mt-2">${item.desc}</p>
      </div>
    </div>
  `;

  itemAll.appendChild(menuItemAll);
});


itemsKorea = menu.filter(item => item.category === "Korea");

itemsKorea.forEach(item => {
  let menuItemKorea = document.createElement("div");
  menuItemKorea.classList.add("w-1/2", "p-4");

  menuItemKorea.innerHTML = `
   <div class="flex items-start gap-6 border-b border-black  pb-6">
      <img src="${item.img}" class="w-36 h-36 object-cover rounded" />
      <div class="flex-1">
        <div class="flex justify-between items-center">
          <h2 class="font-bold text-red-700 text-lg">${item.title}</h2>
          <span class="text-red-700 font-semibold text-lg">${item.price}</span>
        </div>
        <p class="text-base text-gray-700 mt-2">${item.desc}</p>
      </div>
    </div>
  `;

  itemKorea.appendChild(menuItemKorea);
});

let itemJapan = document.getElementById("Japan");
itemsJapan = menu.filter(item => item.category === "Japan");

itemsJapan.forEach(item => {
  let menuItemJapan = document.createElement("div");
  menuItemJapan.classList.add("w-1/2", "p-4");

  menuItemJapan.innerHTML = `
   <div class="flex items-start gap-6 border-b border-black  pb-6">
      <img src="${item.img}" class="w-36 h-36 object-cover rounded" />
      <div class="flex-1">
        <div class="flex justify-between items-center">
          <h2 class="font-bold text-red-700 text-lg">${item.title}</h2>
          <span class="text-red-700 font-semibold text-lg">${item.price}</span>
        </div>
        <p class="text-base text-gray-700 mt-2">${item.desc}</p>
      </div>
    </div>
  `;

  itemJapan.appendChild(menuItemJapan);
});


let itemChina = document.getElementById("China");
itemsChina = menu.filter(item => item.category === "China");

itemsChina.forEach(item => {
  let menuItemChina = document.createElement("div");
  menuItemChina.classList.add("w-1/2", "p-4");

  menuItemChina.innerHTML = `
   <div class="flex items-start gap-6 border-b border-black  pb-6">
      <img src="${item.img}" class="w-36 h-36 object-cover rounded" />
      <div class="flex-1">
        <div class="flex justify-between items-center">
          <h2 class="font-bold text-red-700 text-lg">${item.title}</h2>
          <span class="text-red-700 font-semibold text-lg">${item.price}</span>
        </div>
        <p class="text-base text-gray-700 mt-2">${item.desc}</p>
      </div>
    </div>
  `;

  itemChina.appendChild(menuItemChina);
});

function showMenuItems(category) {
  const sections = ["All", "Korea", "Japan", "China"];
  sections.forEach(section => {
    const current = document.getElementById(section);
    if (section === category) {
      current.classList.remove("hidden");
    } else {
      current.classList.add("hidden");
    }
  });
}
