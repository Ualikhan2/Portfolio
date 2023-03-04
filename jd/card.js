// Find all cart buttons
const cartButtons = document.querySelectorAll('.cart-btn');

// Add event listener to each button
cartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to handle adding item to cart
function addToCart(event) {
  // Get the ID and name of the product
  const productId = event.target.closest('.card').getAttribute('data-id');
  const productName = event.target.closest('.card').getAttribute('data-name');

  // Get the current cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if the item is already in the cart
  const existingItemIndex = cartItems.findIndex(item => item.id === productId);
  if (existingItemIndex >= 0) {
    // If the item is already in the cart, increment its quantity
    cartItems[existingItemIndex].quantity += 1;
  } else {
    // If the item is not in the cart, add it with a quantity of 1
    cartItems.push({ id: productId, name: productName, quantity: 1 });
  }

  // Save the updated cart items to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Redirect the user to the shopping cart page
  window.location.href = 'Korzina.html';
}