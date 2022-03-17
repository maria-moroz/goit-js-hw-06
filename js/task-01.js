const list = document.querySelector('#categories');
const listItems = document.querySelectorAll('.item');

numberOfCategories(listItems);
displayCategories(listItems);

function numberOfCategories(items) {
    console.log(`Number of categories: ${items.length}`);
}

function displayCategories(items) {
    items.forEach( item => {
        console.log('Category: ', item.firstElementChild.textContent);
        console.log('Elements: ', item.lastElementChild.children.length);
    });
}