const Autherization = 'f44a4aabfc5992514d262d7f517327e7';
const userAddressId = '60877';
const storeId = '4';

const baseURl = 'https://api.manoapp.com/api/v1/users/products/whats_new/';


// returns a json list of products
const getProducts = async () => {
    const query = `?Authorization=${Autherization}?userAddressId=${userAddressId}?storeId=${4}`;
    const call = await fetch(baseURl + query);

    const response = await call.json();

    return response;
}
// return a json list of products
const getProductDetail = async (id) => {
    const query = '';
    const response = await fetch(base + query);

    const data = await response.json();
}


// for testing 
getProducts();

// for testing
getProductDetail();