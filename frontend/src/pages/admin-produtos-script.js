// Filter functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput")
  const filterButtons = document.querySelectorAll(".filter-btn")
  const tableRows = document.querySelectorAll("#productsTableBody tr")

  // Search functionality
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase()

    tableRows.forEach((row) => {
      const text = row.textContent.toLowerCase()
      if (text.includes(searchTerm)) {
        row.style.display = ""
      } else {
        row.style.display = "none"
      }
    })
  })

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      tableRows.forEach((row) => {
        if (filter === "all") {
          row.style.display = ""
        } else if (filter === "ambient" && row.getAttribute("data-genre") === "ambient") {
          row.style.display = ""
        } else if (filter === "electronic" && row.getAttribute("data-genre") === "electronic") {
          row.style.display = ""
        } else if (filter === "jazz" && row.getAttribute("data-genre") === "jazz") {
          row.style.display = ""
        } else if (filter === "in-stock" && row.getAttribute("data-stock") === "in-stock") {
          row.style.display = ""
        } else if (filter === "low-stock" && row.getAttribute("data-stock") === "low-stock") {
          row.style.display = ""
        } else {
          row.style.display = "none"
        }
      })
    })
  })
})

// Modal functions
function openAddProductModal() {
  document.getElementById("addProductModal").style.display = "block"
}

function closeAddProductModal() {
  document.getElementById("addProductModal").style.display = "none"
}

// Product management functions
function editProduct(productId) {
  alert(`Editar produto ${productId}`)
}

function deleteProduct(productId) {
  if (confirm("Tem certeza que deseja excluir este produto?")) {
    alert(`Produto ${productId} excluído`)
  }
}

function viewProduct(productId) {
  alert(`Visualizar produto ${productId}`)
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("addProductModal")
  if (event.target === modal) {
    modal.style.display = "none"
  }
}

// Form submission
document.querySelector(".product-form").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Produto adicionado com sucesso!")
  closeAddProductModal()
})
