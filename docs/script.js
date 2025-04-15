
   // Array to hold cart items
let cartItems = [];

// Function to handle adding a product to the cart
function addToCart(productId, productName, productPrice, productImage) {
    // Create an item object to represent the product
    const item = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
        image: productImage
    };
    
    // Add the item to the cart
    cartItems.push(item);
    updateCartDisplay();
    alert(`Product ${productName} added to your cart!`); // Alert to confirm addition
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemList = document.querySelector('.cart-item-list');
    cartItemList.innerHTML = ''; // Clear the existing cart display

    let total = 0; // Variable to keep track of the total price

    // Add each item in the cart to the cart display
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Create item elements
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:50px; height:auto;">
            <div>${item.name} - $${item.price.toFixed(2)}</div>
        `;
        cartItemList.appendChild(cartItem);
        total += item.price; // Add item price to total
    });

    // Display the total
    const totalDisplay = document.createElement('div');
    totalDisplay.classList.add('total-display');
    totalDisplay.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    cartItemList.appendChild(totalDisplay);
}

// Event listener for all add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        const productName = this.getAttribute('data-product-name');
        const productPrice = this.getAttribute('data-product-price');
        const productImage = this.getAttribute('data-product-image'); // Get image from data attribute
        
        addToCart(productId, productName, productPrice, productImage);
    });
});