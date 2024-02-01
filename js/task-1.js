'use strict';

const categoryItems = document.querySelectorAll('li.item');

console.log('Number of categories: ' + categoryItems.length)

  categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryItemCount = item.querySelectorAll('li').length;

      console.log(`Category: ${categoryTitle}`);
      console.log(`Elements: ${categoryItemCount}`)
  });


