const list = document.querySelector('#categories');
const listItems = list.children;

numberOfCategories(listItems);
displayCategories(listItems);

function numberOfCategories(items) {
    console.log(`Number of categories: ${items.length}`);
}

function displayCategories(items) {
    for (let i = 0; i < items.length; i += 1) {
        console.log('Category: ', items[i].firstElementChild.textContent);
        console.log('Elements: ', items[i].lastElementChild.children.length);
    }
}