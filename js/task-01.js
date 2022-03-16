const list = document.querySelector('#categories');
const listItems = list.children;

numberOfCategories(listItems);
displayCategories(listItems);

function numberOfCategories(items) {
    console.log(`Number of categories: ${items.length}`);
}

function displayCategories(items) {
    Array.prototype.forEach.call(items, item => {
        console.log('Category: ', item.firstElementChild.textContent);
        console.log('Elements: ', item.lastElementChild.children.length);
    });
}