// Get all required DOM elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const profileButton = document.getElementById('profileButton');
const userInfoDropdown = document.getElementById('userInfoDropdown');
const adminModal = document.getElementById('adminModal');
const employeeModal = document.getElementById('employeeModal');
const logoutModal = document.getElementById('logoutModal');
const submitadminButton = document.getElementById('submitadmin');
const canceladminButton = document.getElementById('canceladmin');
const submitemployeeButton = document.getElementById('submitemployee');
const cancelemployeeButton = document.getElementById('cancelemployee');
const employeeTableBody = document.getElementById('employeeTableBody');
const pagination = document.getElementById('pagination');
const searchBox = document.getElementById('searchBox');
const sortByStatus = document.getElementById('sortByStatus');
const dataInfo = document.getElementById('dataInfo');

// Track employee data
let allEmployees = [];
let currentPage = 1;
const pageSize = 5;

// Toggle sidebar on mobile
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('mobile-open');
});

// Toggle profile dropdown
profileButton.addEventListener('click', () => {
  const isVisible = userInfoDropdown.style.display === 'block';
  userInfoDropdown.style.display = isVisible ? 'none' : 'block';
});

// Optional: close dropdown if clicked outside
document.addEventListener('click', (e) => {
  if (!profileButton.contains(e.target) && !userInfoDropdown.contains(e.target)) {
    userInfoDropdown.style.display = 'none';
  }
});

// Show modal when "Add buttons" in nav are clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (e.target.textContent.trim() === 'Add New Admin') {
      adminModal.style.display = 'flex';
    }
    if (e.target.textContent.trim() === 'Add New Employee') {
      employeeModal.style.display = 'flex';
    }
    if (e.target.textContent.trim() === 'Log-Out') {
      logoutModal.style.display = 'flex';
      setTimeout(() => {
        logoutModal.style.display = 'none';
      }, 2000);
    }
  });
});

// Submit new employee (stub logic)
submitadminButton.addEventListener('click', () => {
  adminModal.style.display = 'none';
});

// Cancel modal
canceladminButton.addEventListener('click', () => {
  adminModal.style.display = 'none';
});


submitemployeeButton.addEventListener('click', () => {
  employeeModal.style.display = 'none';
});


cancelemployeeButton.addEventListener('click', () => {
  employeeModal.style.display = 'none';
});

// Load employee data
fetch('./assets/employees_data.json')
  .then(res => res.json())
  .then(data => {
    allEmployees = data.allEmployees || [];
    renderEmployeeTable();
  })
  .catch(err => console.error('Error loading employees:', err));

// Render employee table
function renderEmployeeTable() {
  employeeTableBody.innerHTML = '';

  const searchTerm = searchBox.value.toLowerCase();
  const selectedStatus = sortByStatus.value;

  const filteredEmployees = allEmployees.filter(emp => {
    const matchSearch =
      emp.name.toLowerCase().includes(searchTerm) ||
      emp.department.toLowerCase().includes(searchTerm) ||
      emp.email.toLowerCase().includes(searchTerm) ||
      emp.id.toLowerCase().includes(searchTerm);

    const matchStatus = selectedStatus === 'all' || emp.status === selectedStatus;

    return matchSearch && matchStatus;
  });

  const start = (currentPage - 1) * pageSize;
  const paginated = filteredEmployees.slice(start, start + pageSize);

  paginated.forEach(emp => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.department}</td>
      <td>${emp.time}</td>
      <td>${emp.email}</td>
      <td>${emp.id}</td>
      <td><button class="${emp.status === 'On Site' ? 'onsite' : 'offsite'}">${emp.status}</button></td>
    `;
    employeeTableBody.appendChild(row);
  });

  // Update data info
  updateDataInfo(filteredEmployees.length);

  // Update pagination controls
  updatePagination(filteredEmployees.length);
}

// Update data info
function updateDataInfo(total) {
  const startEntry = (currentPage - 1) * pageSize + 1;
  const endEntry = Math.min(currentPage * pageSize, total);
  dataInfo.textContent = `Showing data ${startEntry} to ${endEntry} of ${total} entries`;
}

// Update pagination controls
function updatePagination(total) {
  pagination.innerHTML = '';
  const totalPages = Math.ceil(total / pageSize);

  // Previous
  const prev = document.createElement('a');
  prev.textContent = 'Previous';
  prev.href = '#';
  prev.className = currentPage === 1 ? 'disabled' : '';
  prev.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderEmployeeTable();
    }
  });
  pagination.appendChild(prev);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const page = document.createElement('a');
    page.textContent = i;
    page.href = '#';
    page.className = i === currentPage ? 'active' : '';
    page.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      renderEmployeeTable();
    });
    pagination.appendChild(page);
  }

  // Next
  const next = document.createElement('a');
  next.textContent = 'Next';
  next.href = '#';
  next.className = currentPage === totalPages ? 'disabled' : '';
  next.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderEmployeeTable();
    }
  });
  pagination.appendChild(next);
}

// Events: Search and Filter
searchBox.addEventListener('input', () => {
  currentPage = 1;
  renderEmployeeTable();
});

sortByStatus.addEventListener('change', () => {
  currentPage = 1;
  renderEmployeeTable();
});
