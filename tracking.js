'use strict';
let pictureFiles = document.querySelectorAll('img');
// let clicks = 0;
// let views = 0;

let pictureName = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];
// let product1 = document.getElementById('product1');
// let product2 = document.getElementById('product2');
// let product3 = document.getElementById('product3');
let allProducts = [];
function Product(pictureName) {
  this.clicks = 0;
  this.views = 0;
  this.id = pictureName;
  this.src = `./assets/${pictureName}.jpg`;
  allProducts.push(this);

}
new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');


function randomPictureGen() {
  let index =  Math.floor(Math.random() * allProducts.length);
  return allProducts[index];

}
console.log(allProducts);
// function renderPictureGen() {
// let productArray=[];
allProducts[0] = randomPictureGen();
allProducts[1] = randomPictureGen();
allProducts[2] = randomPictureGen();
// console.log(allProducts)
for (let i = 0; i < pictureName.length; i++) {
  allProducts.push(new Product(pictureFiles[i]));
}
pictureFiles[0].id = allProducts[0].id;
pictureFiles[0].src =allProducts[0].src;
allProducts[0].views++;
pictureFiles[1].id = allProducts[1].id;
pictureFiles[1].src =allProducts[1].src;
allProducts[1].views++;
pictureFiles[2].id = allProducts[2].id;
pictureFiles[2].src =allProducts[2].src;
allProducts[2].views++;
while (allProducts[0]===allProducts[1]){
  allProducts[1] = randomPictureGen();
}
while (allProducts[1]===allProducts[2]){
  allProducts[2] = randomPictureGen();
}
while (allProducts[2]===allProducts[0]){
  allProducts[0] = randomPictureGen();
}
function handleClick(event) {
  for (let i = 0; i < allProducts.length; i++){
    console.log(event.target.id, allProducts[i].id);
    if (event.target.id === allProducts[i].id) {
      allProducts[i].clicks++;
    }
  }
}

pictureFiles.forEach(function (img){
  img.addEventListener('click', handleClick);
});

// renderPictureGen();








// let product1 = randomProduct();
// let product2 = randomProduct();
// let product3 = randomProduct();

// function randomProduct() {
//   while (product1 === product2) {
//     product2 = randomPictureGen();
//   }
//   while (product1 === product3) {
//     product3 = randomPictureGen();
//   }
//   while (product2 === product3) {
//     product3 = randomPictureGen();
//   }
//   image1.src = allProducts[image1].src;
//   image2.src = allProducts[image2].src;
//   image3.src = allProducts[image3].src;
//   image1.id = allProducts[image1].id;
//   image2.id = allProducts[image2].id;
//   image3.id = allProducts[image3].id;
//   allProducts[image1].views++;
//   allProducts[image2].views++;
//   allProducts[image3].views++;
// }
// function handleProductClick(event){
//   for (let i = 0; i < allProducts.length; i++) {

//     console.log(event.target.id, allProducts[i].id);
//     if (event.target.id === allProducts[i].id) {
//       allProducts[i].clicks++;
//     }
//   }


// new Product('bag');
// image1.src=Product.allProducts[0].src;
