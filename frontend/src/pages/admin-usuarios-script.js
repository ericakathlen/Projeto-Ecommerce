// Filter functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput")
  const filterButtons = document.querySelectorAll(".filter-btn")
  const tableRows = document.querySelectorAll("#usersTableBody tr")

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
        } else if (filter === "admin" && row.getAttribute("data-type") === "admin") {
          row.style.display = ""
        } else if (filter === "client" && row.getAttribute("data-type") === "client") {
          row.style.display = ""
        } else if (filter === "active" && row.getAttribute("data-status") === "active") {
          row.style.display = ""
        } else if (filter === "inactive" && row.getAttribute("data-status") === "inactive") {
          row.style.display = ""
        } else {
          row.style.display = "none"
        }
      })
    })
  })
})

// Modal functions
function openAddUserModal() {
  document.getElementById("addUserModal").style.display = "block"
}

function closeAddUserModal() {
  document.getElementById("addUserModal").style.display = "none"
}

// User management functions
function editUser(userId) {
  alert(`Editar usuário ${userId}`)
}

function deleteUser(userId) {
  if (confirm("Tem certeza que deseja excluir este usuário?")) {
    alert(`Usuário ${userId} excluído`)
  }
}

function toggleUserStatus(userId) {
  alert(`Status do usuário ${userId} alterado`)
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("addUserModal")
  if (event.target === modal) {
    modal.style.display = "none"
  }
}

// Form submission
document.querySelector(".user-form").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Usuário adicionado com sucesso!")
  closeAddUserModal()
})
