<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Employee Cards</title>
  <style>
    /* Admin styles */

    body {
      font-family: 'Inter', 'Open Sans', sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      height: 100%;
      padding: 0;
      display: flex;
      min-height: 100vh;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      width: 250px;
      background: #f8f9fb;
      padding: 1rem;
      height: 100vh;
      transition: max-height 0.3s ease, background-color 0.3s ease;
    }

    .flex-spacer {
      flex-grow: 1;
    }

    .sidebar-header .brand {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 50px auto;
      padding: 0.5rem 0;
    }

    .sidebar-header .brand img {
      max-width: 100%;
      max-height: 50px;
      object-fit: contain;
    }

    .sidebar ul {
      list-style: none;
      padding: 0;
    }

    .sidebar ul li:hover {
      transform: scale(1.05);
    }

    .sidebar ul li.active {
      background-color: #0f4392;
    }

    .nav-link {
      display: flex;
      align-items: center;
      color: #f8f9fb;
      width: 100%;
      text-decoration: none;
      background: none;
      border: none;
      font: inherit;
      cursor: pointer;
    }

    .nav-link i {
      font-size: 1.8rem;
      margin-right: 10px;
      color: #f8f9fb;
    }

    .sidebar ul li {
      border-radius: 6px;
      margin: 8px 0;
      padding: 10px;
      opacity: 1;
      transform: scaleY(1);
      background-color: #0f4392;
      transition: opacity 0.3s ease, transform 0.3s ease;
      transform-origin: top;
      cursor: pointer;
    }

    /* Overlay for logout */
    #logoutModal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      /* overlay */
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    /* Centered modal box */
    #logoutModal .logout-modal {
      background: #fff;
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      max-width: 350px;
      width: 90%;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
      animation: slideFadeIn 0.3s ease-in-out;
    }

    .main-layout {
      display: flex;
      min-height: 100vh;
    }

    /* Card layout */
    .card-container {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }


    /* Page heading */
    .page-heading {
      text-align: center;
      font-size: 32px;
      color: #333;
      margin-bottom: 50px;
      font-weight: bold;
    }


    .main-content {
      flex: 1;
      padding: 40px 20px;
      box-sizing: border-box;
    }

    /* Individual card styling */
    .card {
      background-color: white;
      width: 250px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.2s;
    }

    .card:hover {
      transform: scale(1.03);
      border: 2px solid #5061a9;
    }

    /* Avatar styles */
    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0 auto 10px;
      border-radius: 8px;
      /* optional: slightly rounded corners */
    }

    .profile-dropdown {
      width: 200px;
    }

    .profile-dropdown .nav-link:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }

    .profile-dropdown .nav-link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      color: #1f1f1f;
      padding: 25px;
      background: transparent;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .user-info-dropdown {
      background: #f8f9fb;
      border-radius: 8px;
      margin-top: 10px;
      padding: 15px;
      box-shadow: 0 0px 12px rgba(0, 0, 0, 0.2);
      width: 180px;
    }

    /* Initials fallback */
    .initial {
      width: 60px;
      height: 60px;
      background-color: #d1d1d1;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: bold;
      margin: 0 auto 10px;
    }

    /* bvfgbvhjkrgtlthg */

    .menu-button {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    .menu {
      position: absolute;
      bottom: 40px;
      right: 10px;
      background: white;
      border: 1px solid #ddd;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      display: none;
      flex-direction: column;
      font-size: 14px;
      z-index: 1000;
    }

    .menu button {
      padding: 8px 12px;
      background: none;
      border: none;
      text-align: left;
      cursor: pointer;
    }

    .menu button:hover {
      background-color: #f0f0f0;
    }


    /* Modal overlay */
    #addAdminModal.modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      /* Flex will be enabled via JS */
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    /* Modal box */
    #addAdminModal .modal-content {
      background-color: #fff;
      padding: 30px 40px;
      border-radius: 12px;
      width: 400px;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      gap: 15px;
      animation: slideFadeIn 0.3s ease-in-out;
    }

    /* Modal header */
    #addAdminModal h2 {
      margin-bottom: 10px;
      text-align: center;
      font-size: 24px;
      color: #2c3e50;
    }

    /* Input fields */
    #addAdminModal input {
      padding: 12px 14px;
      font-size: 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.3s;
    }

    #addAdminModal input:focus {
      border-color: #5061a9;
    }

    /* Buttons */
    #addAdminModal button {
      padding: 12px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }

    .add-admin-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    /* Add Admin Button */
    #openAddAdminModal {
      padding: 12px 24px;
      font-size: 16px;
      background-color: #0f4392;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }

    #openAddAdminModal:hover {
      background-color: #092b5f;
      transform: translateY(-2px);
    }

    #addAdminModal button:first-of-type {
      background-color: #5061a9;
      color: white;
    }

    #addAdminModal button:first-of-type:hover {
      background-color: #3b4b88;
    }

    #addAdminModal button:last-of-type {
      background-color: #ccc;
      color: #333;
    }

    #addAdminModal button:last-of-type:hover {
      background-color: #aaa;
    }


    /* Modal overlay */
    #editModal.modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    /* Modal box */
    #editModal .modal-content {
      background-color: #fff;
      padding: 30px 40px;
      border-radius: 12px;
      width: 400px;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      gap: 15px;
      animation: slideFadeIn 0.3s ease-in-out;
    }

    /* Modal header */
    #editModal h2 {
      margin-bottom: 10px;
      text-align: center;
      font-size: 24px;
      color: #2c3e50;
    }

    /* Input fields */
    #editModal input {
      padding: 12px 14px;
      font-size: 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.3s;
    }

    #editModal input:focus {
      border-color: #5061a9;
    }

    /* Buttons */
    #editModal button {
      padding: 12px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }

    #editModal button:first-of-type {
      background-color: #5061a9;
      color: white;
    }

    #editModal button:first-of-type:hover {
      background-color: #3b4b88;
    }

    #editModal button:last-of-type {
      background-color: #ccc;
      color: #333;
    }

    #editModal button:last-of-type:hover {
      background-color: #aaa;
    }
  </style>
</head>

<body>
  <div class="main-layout">
    <!-- 🧱 Sidebar: The lefty that holds all the secrets -->
    <aside class="sidebar" id="sidebar">
      <!-- 🧾 Where logos flex harder than muscles -->
      <div class="sidebar-header">
        <span>
          <div class="brand">
            <img src="https://github.com/luthandodake10111/iliso--frontend-images-/raw/main/iliso%20logo.png"
              alt="Logo" />
          </div>
        </span>
      </div>

      <!-- 📋 TOP SECRET MENU FOR THE ELITE -->
      <ul class="nav-menu top-menu" id="topMenu">
        <li class="nav-link" id="addminButton">
          <i class="bx bx-user-plus"></i>
          <a href="Dashboard.html"><span>Dashboard</span></a>
        </li>
        <li class="nav-link" id="employeeButton">
          <i class="bx bx-user-plus"></i>
          <span>View Admin</span>
        </li>
        <li class="nav-link" id="">
          <i class="bx bx-user-plus"></i>
          <span>View Employee</span>
        </li>
      </ul>

      <!-- ⛓️ Invisible shackles holding the sidebar together -->
      <div class="flex-spacer"></div>

      <!-- 😎 Profile button pretending to be modest -->
      <div class="profile-dropdown">
        <button class="nav-link" id="profileButton">
          <img src="https://github.com/luthandodake10111/iliso--frontend-images-/raw/main/tara%20logo.png" alt="Profile"
            class="profile-image" />
          <span class="tooltip">Tara Snell</span>
        </button>

        <!-- 🕶️ Secret dropdown that only appears under duress -->
        <div class="user-info-dropdown" id="userInfoDropdown" style="display: none">
          <div class="user-details">
            <div class="user-title">Project Manager</div>
          </div>
        </div>
      </div>

      <!-- 😬 Guilt-inducing logout prompt -->
      <div class="modal-overlay" id="logoutModal" style="display: none">
        <div class="logout-modal">
          <p>⚠️ Are you sure you want to log out?</p>
          <div class="button-group">
            <button id="confirmLogoutBtn">Yes, log me out</button>
            <button id="cancelLogoutBtn">Cancel</button>
          </div>
        </div>
      </div>

      <!-- 👋 Exit stage left -->
      <ul class="nav-menu bottom-menu" id="bottomMenu">
        <li class="nav-link" id="logoutButton">
          <span>Log-Out</span>
        </li>
      </ul>

    </aside>

    <div class="main-content">
      <!-- Page Heading -->
      <h1 class="page-heading">Administration Information</h1></br>
      <!-- Employee Cards -->
      <div class="card-container" id="cardContainer"></div>
      <div class="add-admin-container">
        <button id="openAddAdminModal">➕ Add Admin</button>
      </div>

      <!-- Add Admin Modal -->
      <div id="addAdminModal" class="modal">
        <div class="modal-content">
          <form action="" id="addAdminForm" method="post">
            <h2>Add New Admin</h2>
            <input type="text" placeholder="Username" id="adminName" />
            <input type="email" placeholder="Email" id="adminEmail" />
            <input type="text" placeholder="Phone-number" id="admiPhone" />
            <input type="password" placeholder="Password" id="adminPassword" />
            <input type="password" placeholder="Main-Password" id="adminMainPassword" />
            <button type="submit">Add</button>
            <button type="button" id="cancelAddAdminModal">Cancel</button>
          </form>
        </div>
      </div>


      <!-- Edit Modal -->
      <div id="editModal" class="modal">
        <div class="modal-content">
          <h2>Edit Admin</h2>
          <input type="text" id="editName" placeholder="Full Name" />
          <input type="email" id="editEmail" placeholder="Email" />
          <input type="text" id="editPhone" placeholder="Contact No" />
          <input type="text" id="editId" placeholder="Employee ID" />
          <button class="save-btn" onclick="saveEdit()">Save</button>
          <button class="cancel-btn" onclick="closeModal()">Cancel</button>

        </div>
      </div>
    </div>
  </div>

  <script>

    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const profileButton = document.getElementById('profileButton');
    const userInfoDropdown = document.getElementById('userInfoDropdown');
    const logoutModal = document.getElementById('logoutModal');

    profileButton.addEventListener('click', () => {
      const isVisible = userInfoDropdown.style.display === 'block';
      userInfoDropdown.style.display = isVisible ? 'none' : 'block';
    });

    // ~~~ NINJA MOVE: Click Outside to Vanish ~~~
    document.addEventListener('click', (e) => {
      if (!profileButton.contains(e.target) && !userInfoDropdown.contains(e.target)) {
        userInfoDropdown.style.display = 'none';
      }
    });



    document.addEventListener("DOMContentLoaded", () => {
      const addModal = document.getElementById("addAdminModal");
      const openAddBtn = document.getElementById("openAddAdminModal");
      const cancelAddBtn = document.getElementById("cancelAddAdminModal");
      const addForm = document.querySelector("#addAdminModal form");

      const logoutButton = document.getElementById("logoutButton");
      const confirmLogoutBtn = document.getElementById("confirmLogoutBtn");
      const cancelLogoutBtn = document.getElementById("cancelLogoutBtn");

      if (openAddBtn) openAddBtn.addEventListener("click", () => addModal.style.display = "flex");
      if (cancelAddBtn) cancelAddBtn.addEventListener("click", () => addModal.style.display = "none");

      if (logoutButton) logoutButton.addEventListener("click", () => logoutModal.style.display = "flex");
      if (confirmLogoutBtn) confirmLogoutBtn.addEventListener("click", () => {
        logoutModal.innerHTML = `<div class="logout-modal"><p>✅ Logged out successfully!</p></div>`;
        setTimeout(() => window.location.href = "login.html", 2000);
      });
      if (cancelLogoutBtn) cancelLogoutBtn.addEventListener("click", () => logoutModal.style.display = "none");

      if (addForm) addForm.addEventListener("submit", submitNewAdmin);
    });




    // ========= Modal Handling ========= //
    document.addEventListener("DOMContentLoaded", () => {
      const addModal = document.getElementById("addAdminModal");
      const openAddBtn = document.getElementById("openAddAdminModal");
      const cancelAddBtn = document.getElementById("cancelAddAdminModal");
      const addForm = document.querySelector("#addAdminModal form");

      openAddBtn.addEventListener("click", () => {
        addModal.style.display = "flex";
      });

      cancelAddBtn.addEventListener("click", () => {
        addModal.style.display = "none";
      });

      addForm.addEventListener("submit", submitNewAdmin);
    });

    // ========= Employee Array ========= //
    let employees = [
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

    // ========= Submit New Admin ========= //
    function submitNewAdmin(event) {
      event.preventDefault(); // stop form from reloading the page

      const name = document.getElementById('adminName').value.trim();
      const email = document.getElementById('adminEmail').value.trim();
      const phone = document.getElementById('admiPhone').value.trim();
      const password = document.getElementById('adminPassword').value.trim();
      const mainPassword = document.getElementById('adminMainPassword').value.trim();

      if (!name || !email || !phone || !password || !mainPassword) {
        alert("Please fill in all fields.");
        return;
      }

      // Add to employees array
      employees.push({
        name,
        email,
        contact: phone,
        id: Math.floor(Math.random() * 100000).toString(), // simple random ID
        avatar: "" // default no avatar
      });

      // Re-render cards
      reloadCards();

      // Close modal and reset form
      document.getElementById("addAdminModal").style.display = "none";
      event.target.reset();
    }

    // ========= Render Cards ========= //
    const container = document.getElementById("cardContainer");

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

    reloadCards();

    // ========= Toggle Dropdown Menu ========= //
    function toggleMenu(button) {
      const menu = button.nextElementSibling;
      document.querySelectorAll(".menu").forEach(m => {
        if (m !== menu) m.style.display = "none";
      });
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    }

    // ========= Edit & Delete Logic ========= //
    let editingIndex = null;

    function editEmployee(index) {
      editingIndex = index;
      const emp = employees[index];
      document.getElementById("editName").value = emp.name;
      document.getElementById("editEmail").value = emp.email;
      document.getElementById("editPhone").value = emp.contact;
      document.getElementById("editId").value = emp.id;
      document.getElementById("editModal").style.display = "flex";
    }

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

    function closeModal() {
      document.getElementById("editModal").style.display = "none";
      editingIndex = null;
    }

    // ========= Close menus when clicking outside ========= //
    document.addEventListener("click", function (e) {
      if (!e.target.matches(".menu-button")) {
        document.querySelectorAll(".menu").forEach(menu => menu.style.display = "none");
      }
    });

  </script>
</body>

</html>