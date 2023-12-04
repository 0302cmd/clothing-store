let cartCount = 0;
let cartTotal = 0;
let cartItemsArray = [];

function updateCartCount() {
  document.querySelector(".cart-count").innerText = cartCount;
}

function addToCart(productName, price) {
  cartCount++;
  cartTotal += price;
  updateCartCount();

  cartItemsArray.push({ productName, price });
}

function displayCartItems() {
  const modalItems = document.getElementById("modal-items");
  modalItems.innerHTML = "";

  cartItemsArray.forEach((item) => {
    const newItem = document.createElement("li");
    newItem.innerText = `${item.productName} - R$${item.price.toFixed(2)}`;
    modalItems.appendChild(newItem);
  });
}

function displayTotal() {
  const modalTotal = document.getElementById("modal-total");
  modalTotal.innerText = `Total: R$${cartTotal.toFixed(2)}`;
}

function checkout() {
  const modal = document.getElementById("modal");
  const modalItems = document.getElementById("modal-items");
  const modalTotal = document.getElementById("modal-total");

  modalItems.innerHTML = ""; // Limpar itens anteriores do modal

  // Cria um item para cada produto no carrinho no modal
  cartItemsArray.forEach((item) => {
    const newItem = document.createElement("li");
    newItem.innerText = `${item.productName} - R$${item.price.toFixed(2)}`;
    modalItems.appendChild(newItem);
  });

  modalTotal.innerText = `Total: R$${cartTotal.toFixed(2)}`;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.classList.toggle("show");
}

function init() {
  // Adicionar event listener para o clique no ícone do carrinho
  document
    .querySelector(".carrinho-botao")
    .addEventListener("click", toggleCart);

  // Adicionar event listener para finalizar compra
  document.querySelector(".botao-fin").addEventListener("click", checkout);

  // Adicionar event listener para fechar o modal
  document.querySelector(".close").addEventListener("click", closeModal);
}

// Inicialização
init();
