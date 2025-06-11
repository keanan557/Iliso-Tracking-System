// Array of employee objects
const employees = [
  {
    name: "TARA SNELL",
    email: "Tarasnell@lifechoices.co.za",
    contact: "082 633 9613",
    id: "12345",
    avatar: "/assets/Tara.png"
  },
  {
    name: "Keziah Petersen",
    email: "keziahpetersen@lifechoices.co.za",
    contact: "082 633 9613",
    id: "09876",
    avatar: "/assets/Keziah.png"
  },
  {
    name: "Maxine Oliver",
    email: "maxine@lifechoices.co.za",
    contact: "0216964157",
    id: "80988",
    avatar: "/assets/Maxine.png"
  }
];

// Get container
const container = document.getElementById("cardContainer");

// Render each card
employees.forEach((emp, index) => {
  const card = document.createElement("div");
  card.className = "card";

  const avatarElement = emp.avatar
    ? `<img src="${emp.avatar}" alt="${emp.name}" class="avatar">`
    : `<div class="initial">${emp.name.charAt(0)}</div>`;

  card.innerHTML = `
    ${avatarElement}
    <h3>${emp.name}</h3>
    <p><strong>Email:</strong><br>${emp.email}</p>
    <p><strong>Contact No:</strong><br>${emp.contact}</p>
    <p><strong>Employee ID:</strong><br>${emp.id}</p>
    <button class="menu-button" onclick="toggleMenu(this)">⋮</button>
    <div class="menu">
      <button onclick="editEmployee(${index})">Edit</button>
      <button onclick="deleteEmployee(${index})">Delete</button>
    </div>
  `;

  container.appendChild(card);
});

// Edit & Delete functionality
let editingIndex = null;

function toggleMenu(button) {
  const menu = button.nextElementSibling;
  const allMenus = document.querySelectorAll(".menu");
  allMenus.forEach(m => m !== menu && (m.style.display = "none"));
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Open modal with current values
function editEmployee(index) {
  editingIndex = index;
  const emp = employees[index];
  document.getElementById("editName").value = emp.name;
  document.getElementById("editEmail").value = emp.email;
  document.getElementById("editPhone").value = emp.contact;
  document.getElementById("editId").value = emp.id;
  document.getElementById("editModal").style.display = "flex";
}

// Save and re-render
function saveEdit() {
  if (editingIndex !== null) {
    employees[editingIndex].name = document.getElementById("editName").value;
    employees[editingIndex].email = document.getElementById("editEmail").value;
    employees[editingIndex].contact = document.getElementById("editPhone").value;
    employees[editingIndex].id = document.getElementById("editId").value;
    document.getElementById("editModal").style.display = "none";
    reloadCards();
  }
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  reloadCards();
}

function reloadCards() {
  container.innerHTML = "";
  employees.forEach((emp, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const avatarElement = emp.avatar
      ? `<img src="${emp.avatar}" alt="${emp.name}" class="avatar">`
      : `<div class="initial">${emp.name.charAt(0)}</div>`;

    card.innerHTML = `
      ${avatarElement}
      <h3>${emp.name}</h3>
      <p><strong>Email:</strong><br>${emp.email}</p>
      <p><strong>Contact No:</strong><br>${emp.contact}</p>
      <p><strong>Employee ID:</strong><br>${emp.id}</p>
      <button class="menu-button" onclick="toggleMenu(this)">⋮</button>
      <div class="menu">
        <button onclick="editEmployee(${index})">Edit</button>
        <button onclick="deleteEmployee(${index})">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

// Close any open menu when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.matches(".menu-button")) {
    document.querySelectorAll(".menu").forEach(menu => menu.style.display = "none");
  }
});
