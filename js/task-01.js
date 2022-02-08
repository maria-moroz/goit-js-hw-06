const list = document.querySelector('#categories');
const listItems = list.children;

function numberOfCategories(items) {
    console.log(`Number of categories: ${items.length}`);
}

function displayCategories(items) {
    for (let i = 0; i < items.length; i += 1) {
        console.log('Category: ', items[i].querySelector('h2').textContent);
        console.log('Elements: ', items[i].querySelectorAll('li').length);
    }
}

numberOfCategories(listItems);
displayCategories(listItems);