const ulList = document.querySelectorAll('ul#categories > li.item');
const ulAmount = ulList.length;
console.log(`Number of categories : ${ulList.length}`);
 
ulList.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;

    const ulAmount = item.querySelectorAll('ul > li');

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${ulAmount.length}`);

});




