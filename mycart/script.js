
const api = 'https://fakestoreapi.com/products';

let abc = localStorage.getItem('id');
let idArray = [];
console.log(abc);
if (abc) {
  idArray = abc.split(',').map(Number);
} else {
  alert('cart is empty');
}
console.log(idArray);

async function apicall() {
  try {
    let response = await fetch(api);
    let result = await response.json();
    result.forEach((item) => {
      item.price = parseFloat(item.price); // Convert price to a number without the dollar sign
    });
    console.log(result);
    callcart(result);
  } catch (error) {
    console.log(error);
  }
}

apicall();

function callcart(data) {
  let cartItems = [];
  let checkoutItems = [];

  data.forEach((element) => {
    if (idArray.includes(element.id)) {
      cartItems.push(element);
      checkoutItems.push({ title: element.title, price: element.price, id: element.id });
    }
  });

  addcartdata(cartItems);
  updateCheckout(checkoutItems);
}

function addcartdata(data) {
  let mycart = document.getElementsByClassName('mycart')[0];
  mycart.innerHTML = '';

  data.map((element) => {
    let div = document.createElement('div');
    div.className = 'cart';

    div.innerHTML = `
      <div class="cart">
        <img class="img2" src="${element.image}" alt="">
        <p>title : ${element.title}</p>
        <p>price: ${element.price.toFixed(2)}</p>
        <p>color: ${element.color}</p>
        <button id="removecart" onClick="removecart(${element.id},${element.price})">Remove from cart</button>
      </div>
    `;

    mycart.appendChild(div);
  });
}

function calculateTotal(checkoutItems) {
  let total = 0;
  checkoutItems.forEach((item) => {
    total += item.price;
  });
  return total;
}

function updateCheckout(checkoutItems) {
  let checkout = document.getElementsByClassName('checkout')[0];
  checkout.innerHTML = '';

  checkoutItems.forEach((item, index) => {
    let div = document.createElement('div');
    div.id = `checkout-item-${item.id}`;
    div.className = 'list';
    div.innerHTML = `
      <p>${index + 1}.${item.title}</p>
      <p>$${item.price}</p>
    `;

    checkout.appendChild(div);
  });

  let totalElement = document.getElementById('total');
  if (totalElement) {
    totalElement.textContent = `Total: $${calculateTotal(checkoutItems)}`;
  } else {
    // If the totalElement is null, create it and set its textContent
    totalElement = document.createElement('p');
    totalElement.id = 'total';
    totalElement.textContent = `Total: $${calculateTotal(checkoutItems)}`;
    checkout.appendChild(totalElement);
  }
}

function removecart(itemId, price) {
  const index = idArray.indexOf(itemId);
  if (index >= 0) {
    idArray.splice(index, 1);
    localStorage.setItem('id', idArray);
    removeItemFromCheckout(itemId, price);
    apicall();
  }
}

function removeItemFromCheckout(itemId, price) {
  let checkout = document.getElementsByClassName('checkout')[0];
  let itemToRemove = document.getElementById(`checkout-item-${itemId}`);
  if (itemToRemove) {
    checkout.removeChild(itemToRemove);
  }

  let checkoutItems = Array.from(checkout.getElementsByClassName('list')).map((div) => {
    const title = div.getElementsByTagName('p')[0].innerText;
    const price = parseFloat(div.getElementsByTagName('p')[1].innerText.replace('$', ''));
    const id = parseInt(title.substring(0, title.indexOf('.')), 10);
    return { title, price, id };
  });

  updateCheckout(checkoutItems);
}

//payment metho

const clickCheckoutButton = document.getElementById('clickcheckout');
clickCheckoutButton.addEventListener('click', function (e) {
  // Call the Razorpay payment function with the total amount
  var options = {
    key: "rzp_test_xV39ZNbgU1Du4V", // Enter the Key ID generated from the Dashboard
    amount: 10000 ,//check this out if this is paisa or INR // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Complete Payment",
    description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    theme: {
      color: "#122620",
    },
    image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
    handler: function () { // run a function when your payment is successfull
      location.href = "./shop.html";
    },
    options: {
      checkout: {
        method: {
          netbanking: 0,
          card: 0,
          upi: 1,
          wallet: 0,
        },
      },
    },
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
  e.preventDefault();
});

