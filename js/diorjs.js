document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Get product details from the parent element
        const productElement = this.closest('.product');
        const productId = productElement.querySelector('button').getAttribute('data-product');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));

        // Create the product object
        const product = {
            id: productId,
            name: productName,
            price: productPrice
        };

        // Get the current cart from localStorage or initialize it if not present
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add product to cart
        cart.push(product);

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the cart count in the header
        updateCartCount();
    });
});

// Update the cart count in the header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

// Initialize the cart count on page load
updateCartCount();
