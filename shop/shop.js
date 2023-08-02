const api = 'https://fakestoreapi.com/products';
let data = [];
async function apicall() {
    try {
        let response = await fetch(api);
        let result = await response.json();
       
        data = result;
        console.log(result);
        // filterProducts([], data);
        mensstore(result);
        womensstore(result);
        jewelerystore(result);
        electronicstore(result);
    } catch (error) {
        console.log(error);
    }
}
console.log(data);
apicall();

//generate colors
function generatecolors() {
        
    const characters = ['red', 'white', 'yellow', 'black', 'blue'];
    let uniqueColors = [];
    while (uniqueColors.length < 3) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const color = characters[randomIndex];

        if (!uniqueColors.includes(color)) {
            uniqueColors.push(color);
        }
    }
    return uniqueColors;
}
//generate size
function generatesize() {
        
    const characters = ['S', 'M', 'L', 'XL'];
    let size = '';
    for (let i = 0; i < characters.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        size = characters[randomIndex];
    }
    return size;
}

//star generator 
   

    function starcount(rating){

        let stars =  Math.round(rating);

        if(stars === 1){
            return '<i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i>';
        }else if(stars === 2){
            return '<i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i>';
        }else if(stars === 3){
            return '<i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i>';
        }else if(stars === 4){
            return '<i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i>';
        }else{
            return '<i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i><i class="fa-solid fa-star fa-xs" style="color: #ffd700;"></i>';
        }
    };

    //search function
    const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const allProducts = document.querySelectorAll('.cart');

    allProducts.forEach((product) => {
        const productName = product.querySelector('.down-side p').textContent.toLowerCase();
        if (searchTerm === '' || productName.includes(searchTerm)) {
            product.style.display = 'block'; // Show the product if the search input is empty or its name matches the search query
        } else {
            product.style.display = 'none'; // Hide the product if its name does not match the search query
        }
    });
}

    // mens store
    function mensstore(data){
        let mens = document.getElementsByClassName('mens')[0];

        const data1 = data.filter((element) => element.category === "men's clothing");

        data1.forEach( (element) => {
            let div = document.createElement('div');
        div.className = 'cart';
        
        let colors =  generatecolors();
        let sizes =  generatesize();
        let stars = starcount(element.rating.rate);
    //


        div.innerHTML= 
        `
        <img src="${element.image}" class="img1" alt="">
        <div class="down-side">
            <p>Price: $${element.price}</p>
            <span>Size: ${sizes}</span>
        </div>
        <span class="category">${element.category}</span>
        <div class="color">
            <p>Colors: </p>
        
                <span class="colored" style="background-color: ${colors[0]};"></span>
                <span class="colored" style="background-color: ${colors[1]};"></span>
                <span class="colored" style="background-color: ${colors[2]};"></span>
            
        </div>
        <div class="rating">
            <p>Rating:</p>
            <span>${stars}</span>
        </div>
        <button class="addtocartbtn" onClick="addcart(${element.id})" >Add To Cart</button>
        `

            mens.appendChild(div);
        })

        
    }
     // womens store
     function womensstore(data){
        let womain = document.getElementsByClassName('womens')[0];

        const data1 = data.filter((element) => element.category === "women's clothing");

        data1.forEach( (element) => {
            let div = document.createElement('div');
        div.className = 'cart';

        let colors =  generatecolors();
        let sizes =  generatesize();
        let stars = starcount(element.rating.rate);

        div.innerHTML= 
        `
        <img src="${element.image}" class="img1" alt="">
        <div class="down-side">
            <p>Price: $${element.price}</p>
            <span>Size: ${sizes}</span>
        </div>
        <span class="category">${element.category}</span>
        <div class="color">
            <p>Colors:</p>
            <span class="colored" style="background-color: ${colors[0]};"></span>
            <span class="colored" style="background-color: ${colors[1]};"></span>
            <span class="colored" style="background-color: ${colors[2]};"></span>
        </div>
        <div class="rating">
            <p>Rating:</p>
            <span>${stars}</span>
        </div>
        <button class="addtocartbtn" onClick="addcart(${element.id})">Add To Cart</button>
        `
            womain.appendChild(div);
        })

        
    }
    // jeweley store
    function jewelerystore(data){
        let jewelery = document.getElementsByClassName('jewelery')[0];

        const data1 = data.filter((element) => element.category === "jewelery");

        

        data1.forEach( (element) => {
            let div = document.createElement('div');
        div.className = 'cart';

        let colors =  generatecolors();
        let sizes =  generatesize();
        let stars = starcount(element.rating.rate);

        div.innerHTML= 
        `
        <img src="${element.image}" class="img1" alt="">
        <div class="down-side">
            <p>Price: $${element.price}</p>
            <span>Size: ${sizes}</span>
        </div>
        <span class="category">${element.category}</span>
        <div class="color">
            <p>Colors:</p>
            <span class="colored" style="background-color: ${colors[0]};"></span>
            <span class="colored" style="background-color: ${colors[1]};"></span>
            <span class="colored" style="background-color: ${colors[2]};"></span>
        </div>
        <div class="rating">
            <p>Rating:</p>
            <span>${stars}</span>
        </div>
        <button class="addtocartbtn" onClick="addcart(${element.id})">Add To Cart</button>
        `
            jewelery.appendChild(div);
        })

        
    } 
    // electronics
    function electronicstore(data){
        let electronics = document.getElementsByClassName('electronics')[0];

        const data1 = data.filter((element) => element.category === "electronics");

        data1.forEach( (element) => {
            let div = document.createElement('div');
        div.className = 'cart';

        let colors =  generatecolors();
        let sizes =  generatesize();
        let stars = starcount(element.rating.rate);

        div.innerHTML= 
        `
        <img src="${element.image}" class="img1" alt="">
        <div class="down-side">
            <p>Price: $${element.price}</p>
            <span>Size: ${sizes}</span>
        </div>
        <span class="category">${element.category}</span>
        <div class="color">
            <p>Colors:</p>
            <span class="colored" style="background-color: ${colors[0]};"></span>
            <span class="colored" style="background-color: ${colors[1]};"></span>
            <span class="colored" style="background-color: ${colors[2]};"></span>
        </div>
        <div class="rating">
            <p>Rating:</p>
            <span>${stars}</span>
        </div>
        <button class="addtocartbtn" onClick="addcart(${element.id})">Add To Cart</button>
        `
        electronics.appendChild(div);
        })

        
    } 
//category 
let cat1 = document.getElementsByClassName('cat1')[0];
let cat2 = document.getElementsByClassName('cat2')[0];
let cat3 = document.getElementsByClassName('cat3')[0];
let cat4 = document.getElementsByClassName('cat4')[0];
let cat5 = document.getElementsByClassName('cat5')[0];

// Add event listeners to the category buttons
cat1.addEventListener('click', () => showAll());
cat2.addEventListener('click', () => showCategory("men's clothing"));
cat3.addEventListener('click', () => showCategory("women's clothing"));
cat4.addEventListener('click', () => showCategory("jewelery"));
cat5.addEventListener('click', () => showCategory("electronics"));

// Function to show all products
function showAll() {
    const allProducts = document.querySelectorAll('.cart');
    allProducts.forEach((product) => {
        product.style.display = 'block';
    });
}

// Function to show products of a specific category
function showCategory(category) {
    
    const allProducts = document.querySelectorAll('.cart');
    const allHeadings = document.querySelectorAll('.stores h2');
    allProducts.forEach((product) => {
        const categoryText = product.querySelector('.category').textContent;
        if (categoryText === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    allHeadings.forEach((heading) => {
        if (heading.classList.contains(`${category}-heading`)) {
            heading.style.display = 'block'; // Show the selected category heading
        } else {
            heading.style.display = 'none'; // Hide other category headings
        }
    });
}



//add to cart button clicked function
let aa = [];
function addcart(element) {
    console.log(element);
    if(aa.includes(element)){
        alert('minimum 1 qanity')
    }else{
        aa.push(element);
    localStorage.setItem('id',aa);
    }
    
}
let abc = localStorage.getItem('id');
aa.push(abc.split(',').map(Number));



// get all filter data
let applybutton = document.getElementById('applybtn');
applybutton.addEventListener('click', () => {
    let filters = [];
    //colors
    let red = document.getElementById('red').checked;
    let blue = document.getElementById('blue').checked;
    let green = document.getElementById('green').checked;
    let black = document.getElementById('black').checked;
    let white = document.getElementById('white').checked;

    //size
    let s = document.getElementById('s').checked;
    let m = document.getElementById('m').checked;
    let l = document.getElementById('l').checked;
    let xl = document.getElementById('xl').checked;
    //rating
    let myRangeInput = document.getElementById('myRange');
    let ratingValue = myRangeInput.value;
    //price range
    let pr1 = document.getElementById('pr1').checked;
    let pr2 = document.getElementById('pr2').checked;
    let pr3 = document.getElementById('pr3').checked;
    let pr4 = document.getElementById('pr4').checked;

    //get values
    if (red) {
        filters.push('red');
    }
    if (blue) {
        filters.push('blue');
    }
    if (green) {
        filters.push('green');
    }
    if (black) {
        filters.push('black');
    }
    if (white) {
        filters.push('white');
    }

    if (s) {
        filters.push('s');
    }
    if (m) {
        filters.push('m');
    }
    if (l) {
        filters.push('l');
    }
    if (xl) {
        filters.push('xl');
    }
    if (pr1) {
        filters.push('0-25');
    }if (pr2) {
        filters.push('25-50');
    }
    if (pr3) {
        filters.push('50-100');
    }
    if (pr4) {
        filters.push('100');
    }
    filters.push(ratingValue);
    console.log(filters);
    
});

// function filterProducts(filters ,data) {
//     const filteredData = data.filter((element) => {
//         // Check if the element matches all the selected filters
//         return (
//             filters.includes(element.color) &&
//             filters.includes(element.size) &&
//             filters.includes(element.category) &&
//             element.rating.rate >= filters[filters.length - 1] &&
//             element.price >= parseFloat(filters[filters.length - 2]) &&
//             element.price <= parseFloat(filters[filters.length - 3])
//         );
//     });

//     // Clear the existing products in the view
//     const stores = document.getElementsByClassName('stores')[0];
//     stores.innerHTML = '';

//     // Render the filtered products
//     filteredData.forEach((element) => {
//         let div = document.createElement('div');
//         div.className = 'cart';

//         let colors = generatecolors();
//         let sizes = generatesize();
//         let stars = starcount(element.rating.rate);

//         div.innerHTML = `
//             <img src="${element.image}" class="img1" alt="">
//             <div class="down-side">
//                 <p>Price: $${element.price}</p>
//                 <span>Size: ${sizes}</span>
//             </div>
//             <span class="category">${element.category}</span>
//             <div class="color">
//                 <p>Colors:</p>
//                 <span class="colored" style="background-color: ${colors[0]};"></span>
//                 <span class="colored" style="background-color: ${colors[1]};"></span>
//                 <span class="colored" style="background-color: ${colors[2]};"></span>
//             </div>
//             <div class="rating">
//                 <p>Rating:</p>
//                 <span>${stars}</span>
//             </div>
//             <button class="addtocartbtn" onClick="addcart(${element.id})">Add To Cart</button>
//         `;

//         stores.appendChild(div);
//     });
// }






    

// log out button

const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
    localStorage.removeItem('user');

    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1000);
    
});







