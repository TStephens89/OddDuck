'use strict';
let pictureFiles = document.querySelectorAll('img');
let chartEl = document.getElementById('myChart');
let ctx = chartEl.getContext('2d');
// let clicks = 0;
// let views = 0;
let totalRound = 0;
let pictureName = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];
// let product1 = document.getElementById('product1');
// let product2 = document.getElementById('product2');
// let product3 = document.getElementById('product3');
let allProducts = [];
function Product(pictureName) {
  this.clicks = 0;
  this.views = 0;
  this.id = pictureName;
  this.src = `./assets/${pictureName}`;
  // allProducts.push(this);
}
Product.prototype.handleClick = function () {

};
for (let i = 0; i < pictureName.length; i++) {
  allProducts.push(new Product(pictureName[i]));
}




function randomPictureGen() {
  let index = Math.floor(Math.random() * allProducts.length);
  return allProducts[index];

}
console.log(allProducts);
function renderPictureGen() {
  // let productArray=[];
  let product1 = randomPictureGen();
  let product2 = randomPictureGen();
  let product3 = randomPictureGen();
  while (product1.id === product2.id || product1.id === product3.id || product2.id === product3.id) {
    product1 = randomPictureGen();
    product2 = randomPictureGen();
    product3 = randomPictureGen();
  }
  // console.log(allProducts)
  // for (let i = 0; i < pictureName.length; i++) {
  //   allProducts.push(new Product(pictureFiles[i]));
  // }
  pictureFiles[0].id = product1.id;
  pictureFiles[0].src = product1.src;
  allProducts[0].views++;
  pictureFiles[1].id = product2.id;
  pictureFiles[1].src = product2.src;
  allProducts[1].views++;
  pictureFiles[2].id = product3.id;
  pictureFiles[2].src = product3.src;
  allProducts[2].views++;
}
renderPictureGen();
function handleClick(event) {
  for (let i = 0; i < allProducts.length; i++) {
    // console.log(event.target.id, allProducts[i].id);
    if (event.target.id === allProducts[i].id) {
      allProducts[i].clicks++;
    }
  }
  if (totalRound > 24) {
     renderChart();
    // alert('place chart here');
  } else {
    renderPictureGen();
    totalRound++;
    console.log(totalRound);

  }
  // let newImages = document.getElementById('images');
  // newImages.innerHTML = 'You have reached your voting limit!';
  // return;
}

pictureFiles.forEach(function (img) {
  img.addEventListener('click', handleClick);
});
function renderChart() {
  // generate our click data, generate our view data
  // loop through our images
  let clicks = [];
  let views = [];

  for (let i = 0; i < allProducts.length; i++) {
    clicks.push(allProducts[i].clicks);
    views.push(allProducts[i].views);
  }
  new Chart (ctx, {
    type: 'bar',
    data: {
      labels: pictureName,
      datasets: [{
        label: '# of Clicks',
        data: clicks,
        backgroundColor: 'yellow'
      }, {
        label: '# of Views',
        data: views,
        backgroundColor: 'purple'
      }],
    }
  });

}

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
