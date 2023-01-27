// first we get the item element
const item = document.querySelector('.item');
const container = document.querySelector('.list-of-products');


const displayProducts = () => {

    // loop over the returned 
    getProducts()
        .then(data => data.forEach(product => {
            // building the html template
            html = `
            <div class="item d-none attr="${product.id}">
                <img src="${product.img}">
                <p class="name">${product.name}</p>
                <p class="price">${product.price}$</p>
            </div>
            `;
            // adding it to the container class
            container.innerHTML += html;
        }));

}

item.addEventListener('click', (e) => {

    const currentItem = e.target
    if (e.target.classList == "item") {
        // display a new detail image

        // get the id from the html
        const currId = e.target.getAttribute('attr');

        // we use this attribute to call the another function with detail and displays them
        getProductDetail(currId)
            .then(data => {
                `<div class="detail-card">
            <img src="">
            <p class="name">${data.name}</p>
            <p class="price">${data.price}</p>
            <p class="category">${data.category}</p>
            <p class="quantity">${data.quantity}</p>
            </div>`;
            }).catch(err => console.log(err));

    }
});