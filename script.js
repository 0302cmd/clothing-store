let cartCount = 0;
let cartTotal = 0;

function addToCart(productName, price) {
  cartCount++;
  cartTotal += price;
  document.getElementById("cart-count").innerText = cartCount;

  const cartItems = document.getElementById("cart-items");
  const newItem = document.createElement("li");
  newItem.innerText = `${productName} - R$${price.toFixed(2)}`;
  cartItems.appendChild(newItem);

  document.getElementById(
    "cart-total"
  ).innerText = `Total: R$${cartTotal.toFixed(2)}`;
}

function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.classList.toggle("show");
}

function checkout() {
  const modal = document.getElementById("modal");
  const modalItems = document.getElementById("modal-items");
  const modalTotal = document.getElementById("modal-total");

  // Limpa o conteúdo atual do modal
  modalItems.innerHTML = "";
  modalTotal.innerText = `Total: R$${cartTotal.toFixed(2)}`;

  // Cria um item para cada produto no carrinho no modal
  const cartItems = document
    .getElementById("cart-items")
    .getElementsByTagName("li");
  for (let i = 0; i < cartItems.length; i++) {
    const newItem = document.createElement("li");
    newItem.innerText = cartItems[i].innerText;
    modalItems.appendChild(newItem);
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Adicione esta parte para controlar o clique no ícone do carrinho
document.getElementById("cart-icon").addEventListener("click", function () {
  toggleCart();
});
