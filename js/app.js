'use strict';

// array to hold all of our Products to track
Product.allProducts = [];
var lastVisited = [1,2,3];


// create objects for our Products
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.receivedClicks=0;
  this.lastVisited=false;
  this.displayedCount=0;
  this.previousImageIndex=0;
  Product.allProducts.push(this);
}
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet', 'img/pet-sweep.jpg');
new Product('usb', 'img/usb.gif');
new Product('unicorn', 'img/unicorn.jpg');
new Product('Cruiser', 'img/cruisin-goat.jpg');
new Product('Kissing', 'img/kissing-goat.jpg');
new Product('Sassy', 'img/sassy-goat.jpg');
new Product('Smiling', 'img/smiling-goat.jpg');
new Product('Sweater', 'img/sweater-goat.jpg');

// need event listenter to track clicks of Product images
var imgContainer = document.getElementById('Product-pic1');
var imgContainer1 = document.getElementById('Product-pic2');
var imgContainer2 = document.getElementById('Product-pic3');

imgContainer.addEventListener('click', randomProduct);
imgContainer1.addEventListener('click', randomProduct1);
imgContainer2.addEventListener('click', randomProduct2);

Product.allProducts[1].lastVisited = true;
Product.allProducts[1].previousImageIndex = 1;
imgContainer.src = Product.allProducts[1].filepath;

Product.allProducts[2].lastVisited = true;
Product.allProducts[2].previousImageIndex = 2;
imgContainer1.src = Product.allProducts[2].filepath;

Product.allProducts[3].lastVisited = true;
Product.allProducts[4].previousImageIndex = 2;
imgContainer2.src = Product.allProducts[3].filepath;


// display random Product images
function randomProduct() {
  var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
  var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
  var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);

  while (
    (lastVisited.includes(randomIdx)) || (lastVisited.includes(randomIdxNS1)) || (lastVisited.includes(randomIdxNS2))
    || randomIdx===randomIdxNS1 || randomIdx === randomIdxNS2 || randomIdxNS1 === randomIdxNS2) {
    randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
  }
  Product.allProducts[randomIdx].lastVisited = true;
  Product.allProducts[randomIdx].previousImageIndex = 1;
  imgContainer.src = Product.allProducts[randomIdx].filepath;
  Product.allProducts[randomIdx].receivedClicks= Product.allProducts[randomIdx].receivedClicks+1;
  Product.allProducts[randomIdx].displayedCount= Product.allProducts[randomIdx].displayedCount+1;

  Product.allProducts[randomIdxNS1].lastVisited===true;
  Product.allProducts[randomIdxNS1].previousImageIndex = 2;
  imgContainer1.src = Product.allProducts[randomIdxNS1].filepath;

  Product.allProducts[randomIdxNS2].lastVisited===true;
  imgContainer2.src = Product.allProducts[randomIdxNS2].filepath;
  Product.allProducts[randomIdxNS2].previousImageIndex = 3;

  lastVisited[0] = randomIdx;
  lastVisited[1] = randomIdxNS1;
  lastVisited[2] = randomIdxNS1;
  validateMaximumClicks();
}



// display random Product images
function randomProduct1() {
  var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
  var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
  var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);

  while (
    (lastVisited.includes(randomIdx)) || (lastVisited.includes(randomIdxNS1)) || (lastVisited.includes(randomIdxNS2))
    || randomIdx===randomIdxNS1 || randomIdx === randomIdxNS2 || randomIdxNS1 === randomIdxNS2) {
    randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
  }
  Product.allProducts[randomIdx].lastVisited = true;
  Product.allProducts[randomIdx].previousImageIndex = 1;
  imgContainer.src = Product.allProducts[randomIdx].filepath;

  Product.allProducts[randomIdxNS1].lastVisited===true;
  Product.allProducts[randomIdxNS1].previousImageIndex = 2;
  imgContainer1.src = Product.allProducts[randomIdxNS1].filepath;
  Product.allProducts[randomIdxNS1].receivedClicks= Product.allProducts[randomIdxNS1].receivedClicks+1;
  Product.allProducts[randomIdxNS1].displayedCount= Product.allProducts[randomIdxNS1].displayedCount+1;

  Product.allProducts[randomIdxNS2].lastVisited===true;
  imgContainer2.src = Product.allProducts[randomIdxNS2].filepath;
  Product.allProducts[randomIdxNS2].previousImageIndex = 3;

  lastVisited[0] = randomIdx;
  lastVisited[1] = randomIdxNS1;
  lastVisited[2] = randomIdxNS1;
  validateMaximumClicks();
}

// display random Product images
function randomProduct2() {
  var randomIdx = Math.floor(Math.random() * Product.allProducts.length);
  var randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
  var randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);

  while (
    (lastVisited.includes(randomIdx)) || (lastVisited.includes(randomIdxNS1)) || (lastVisited.includes(randomIdxNS2))
    || randomIdx===randomIdxNS1 || randomIdx === randomIdxNS2 || randomIdxNS1 === randomIdxNS2) {
    randomIdx = Math.floor(Math.random() * Product.allProducts.length);
    randomIdxNS1 = Math.floor(Math.random() * Product.allProducts.length);
    randomIdxNS2 = Math.floor(Math.random() * Product.allProducts.length);
  }
  Product.allProducts[randomIdx].lastVisited = true;
  Product.allProducts[randomIdx].previousImageIndex = 1;
  imgContainer.src = Product.allProducts[randomIdx].filepath;

  Product.allProducts[randomIdxNS1].lastVisited===true;
  Product.allProducts[randomIdxNS1].previousImageIndex = 2;
  imgContainer1.src = Product.allProducts[randomIdxNS1].filepath;

  Product.allProducts[randomIdxNS2].lastVisited===true;
  imgContainer2.src = Product.allProducts[randomIdxNS2].filepath;
  Product.allProducts[randomIdxNS2].previousImageIndex = 3;
  Product.allProducts[randomIdxNS2].receivedClicks= Product.allProducts[randomIdxNS2].receivedClicks+1;
  Product.allProducts[randomIdxNS2].displayedCount= Product.allProducts[randomIdxNS2].displayedCount+1;

  lastVisited[0] = randomIdx;
  lastVisited[1] = randomIdxNS1;
  lastVisited[2] = randomIdxNS1;
  validateMaximumClicks();
}

randomProduct();
randomProduct1() ;
randomProduct2() ;

function validateMaximumClicks() {
  var maximumClicksAllowed = 25;
  var totalCounts = 0;
  var ProductLists = [];
  var ProductClicks = [];
  for(var i = 0; i < Product.allProducts.length; i++) {
    totalCounts = totalCounts + Product.allProducts[i].receivedClicks;
   
    ProductLists[i]=Product.allProducts[i].name;
    ProductClicks[i]=Product.allProducts[i].receivedClicks;


    if(totalCounts>=maximumClicksAllowed) {
      imgContainer.removeEventListener('click', randomProduct);
      imgContainer1.removeEventListener('click', randomProduct1);
      imgContainer2.removeEventListener('click', randomProduct2);
      console.log('Maximum clicked reached to 25');
      alert('Maximum clicked reached to 25');
      for(var j = 0;  j< ProductLists.length; j++) {
        console.log('Product Name: ' + ProductLists[j].name + ' Clicks Received : ' + ProductClicks[j].receivedClicks);
      }
      var canvas = document.getElementById('chart');
      var ctx = canvas.getContext('2d');
      var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ProductLists,
            datasets: [{
                label: 'Votes for My Fav Things',
                data: ProductClicks,
                backgroundColor: ['#000000', '#444444', '#888888', '#f3f3f3']
            }]
        },
        options: {}
    });
      break;
    }

  }

}
