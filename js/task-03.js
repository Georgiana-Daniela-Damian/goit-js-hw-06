const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const list = document.querySelector(".gallery");
const markup = images
  .map((image) => `<li><img src="${image.url}" alt = "${image.alt}"></li>`)
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

list.style.cssText = `display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: 20;
padding: 20;
gap: 20px;`;
