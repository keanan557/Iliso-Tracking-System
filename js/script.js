document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const employeeTableBody = document.getElementById('employeeTableBody');
    const searchInput = document.querySelector('.search-box input');
    const sortBySelect = document.getElementById('sort-by');
    const dataInfo = document.querySelector('.pagination-info');
    const paginationControls = document.querySelector('.pagination-controls');
    const employeeModal = document.getElementById('employeeModal');
    const adminModal = document.getElementById('adminModal');
    const logoutModal = document.getElementById('logoutModal');
    const panicButton = document.getElementById('panic-button');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const submitEmployeeButton = document.getElementById('submitEmployee');
    const cancelEmployeeButton = document.getElementById('cancelEmployee');
    const submitAdminButton = document.getElementById('submitAdmin');
    const cancelAdminButton = document.getElementById('cancelAdmin');

    // Pagination variables
    let currentPage = 1;
    const pageSize = 8;
    let allEmployees = [];
    let filteredEmployees = [];

    // Fetch employee data
    fetch('./assets/employees_data.json')
        .then(res => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        })
        .then(data => {
            allEmployees = data.allEmployees || [];
            filterAndRender();
            initializeModals(); // Initialize modals after data loads
        })
        .catch(err => {
            console.error('Error loading employees:', err);
            // Fallback data if fetch fails
            allEmployees = [
                {
                    "name": "John Doe",
                    "department": "HR",
                    "time": "09:00 AM",
                    "email": "john@example.com",
                    "id": "EMP001",
                    "status": "On Site"
                },
                {
                    "name": "Jane Smith",
                    "department": "Sales",
                    "time": "08:45 AM",
                    "email": "jane@example.com",
                    "id": "EMP002",
                    "status": "Off Site"
                }
            ];
            filterAndRender();
            initializeModals(); // Initialize modals after fallback data loads
        });

    // Initialize all modal functionality
    function initializeModals() {
        // Admin modal
        document.getElementById('adminButton').addEventListener('click', (e) => {
            e.preventDefault();
            adminModal.style.display = 'flex';
        });

        // Employee modal
        document.querySelector('.add-employee-btn').addEventListener('click', (e) => {
            e.preventDefault();
            employeeModal.style.display = 'flex';
        });

        // Cancel buttons
        document.getElementById('cancelAdmin').addEventListener('click', (e) => {
            e.preventDefault();
            adminModal.style.display = 'none';
        });

        document.getElementById('cancelEmployee').addEventListener('click', (e) => {
            e.preventDefault();
            employeeModal.style.display = 'none';
        });

        // Form submissions
        document.getElementById('adminForm').addEventListener('submit', (e) => {
            e.preventDefault();
            adminModal.style.display = 'none';
            // Handle admin form submission
        });

        document.getElementById('employeeForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const employeeName = document.getElementById('employeeName').value;
            const empDept = document.getElementById('empDept').value;
            const email = document.getElementById('email').value;
            const employeeId = document.getElementById('employeeId').value;

            if (!employeeName || !empDept || !email || !employeeId) {
                alert('Please fill in all fields.');
                return;
            }

            const employeeData = {
                name: employeeName,
                department: empDept,
                email: email,
                employeeId: employeeId
            };

            fetch('add_employee.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employeeData)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        allEmployees.push({
                            name: employeeName,
                            department: empDept,
                            email: email,
                            id: employeeId,
                            status: 'Unmarked',
                            time: new Date().toLocaleTimeString()
                        });
                        filterAndRender();
                        document.getElementById('employeeName').value = '';
                        document.getElementById('empDept').value = '';
                        document.getElementById('email').value = '';
                        document.getElementById('employeeId').value = '';
                        alert('Employee added successfully!');
                    } else {
                        alert('Error adding employee: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while adding the employee.');
                });

            employeeModal.style.display = 'none';
        });
    }

    // Main function to filter and render table
    function filterAndRender() {
        const searchTerm = searchInput.value.toLowerCase();
        const sortBy = sortBySelect.value;

        // Filter employees
        filteredEmployees = allEmployees.filter(emp =>
            emp.name.toLowerCase().includes(searchTerm) ||
            emp.department.toLowerCase().includes(searchTerm) ||
            emp.email.toLowerCase().includes(searchTerm) ||
            emp.id.toLowerCase().includes(searchTerm)
        );

        // Sort by status if needed
        if (sortBy === 'on-site') {
            filteredEmployees.sort((a, b) => {
                if (a.status === b.status) return 0;
                return a.status === 'On Site' ? -1 : 1;
            });
        } else if (sortBy === 'off-site') {
            filteredEmployees.sort((a, b) => {
                if (a.status === b.status) return 0;
                return a.status === 'Off Site' ? -1 : 1;
            });
        }

        renderEmployeeTable();
        updatePagination();
    }

    // Render the employee table
    function renderEmployeeTable() {
        if (!employeeTableBody) return;

        employeeTableBody.innerHTML = '';

        const start = (currentPage - 1) * pageSize;
        const paginated = filteredEmployees.slice(start, start + pageSize);

        paginated.forEach(emp => {
            const row = document.createElement('tr');
            const statusClass = emp.status === 'On Site' ? 'status-on' : 'status-off';
            row.innerHTML = `
                <td>${emp.name}</td>
                <td>${emp.department}</td>
                <td>${emp.time}</td>
                <td>${emp.email}</td>
                <td>${emp.id}</td>
                <td><span class=" status-badge ${statusClass}">${emp.status}</span></td>
            `;
            employeeTableBody.appendChild(row);
        });

        updateDataInfo();
    }

    // Update the data info text
    function updateDataInfo() {
        if (!dataInfo) return;

        const startEntry = (currentPage - 1) * pageSize + 1;
        const endEntry = Math.min(currentPage * pageSize, filteredEmployees.length);
        dataInfo.textContent = `Showing data ${startEntry} to ${endEntry} of ${filteredEmployees.length} entries`;
    }

    // Update pagination controls
    function updatePagination() {
        if (!paginationControls) return;

        const totalPages = Math.ceil(filteredEmployees.length / pageSize);
        paginationControls.innerHTML = '';

        // Previous button
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '&lt;';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderEmployeeTable();
                updatePagination();
            }
        });
        paginationControls.appendChild(prevButton);

        // Page buttons
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // First page
        if (startPage > 1) {
            const firstButton = document.createElement('button');
            firstButton.textContent = '1';
            firstButton.addEventListener('click', () => {
                currentPage = 1;
                renderEmployeeTable();
                updatePagination();
            });
            paginationControls.appendChild(firstButton);

            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                paginationControls.appendChild(ellipsis);
            }
        }

        // Middle pages
        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = i === currentPage ? 'active' : '';
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderEmployeeTable();
                updatePagination();
            });
            paginationControls.appendChild(pageButton);
        }

        // Last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                paginationControls.appendChild(ellipsis);
            }

            const lastButton = document.createElement('button');
            lastButton.textContent = totalPages;
            lastButton.addEventListener('click', () => {
                currentPage = totalPages;
                renderEmployeeTable();
                updatePagination();
            });
            paginationControls.appendChild(lastButton);
        }

        // Next button
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '&gt;';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderEmployeeTable();
                updatePagination();
            }
        });
        paginationControls.appendChild(nextButton);
    }

    // Event listeners for search and sort
    searchInput.addEventListener('input', () => {
        currentPage = 1;
        filterAndRender();
    });

    sortBySelect.addEventListener('change', () => {
        currentPage = 1;
        filterAndRender();
    });

    // Mobile navigation
    hamburgerBtn.addEventListener('click', toggleMobileNav);
    overlay.addEventListener('click', toggleMobileNav);

    function toggleMobileNav() {
        mobileNav.classList.toggle('open');
        overlay.classList.toggle('open');
    }

    // Logout functionality
    document.getElementById('logoutButton').addEventListener('click', (e) => {
        e.preventDefault();
        logoutModal.style.display = 'flex';
    });

    document.getElementById('confirmLogoutBtn').addEventListener('click', () => {
        logoutModal.innerHTML = `
            <div class="logout-modal">
                <p>✅ Logged out successfully!</p>
            </div>
        `;
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    });

    document.getElementById('cancelLogoutBtn').addEventListener('click', () => {
        logoutModal.style.display = 'none';
    });

    // Panic button functionality
    panicButton.addEventListener('click', function() {
        if (this.classList.contains("off")) {
            this.classList.remove("off");
            this.classList.add("on");
            document.getElementById('panic-confirmation-modal').style.display = "flex";
        } else {
            this.classList.remove("on");
            this.classList.add("off");
        }
    });

    document.getElementById('confirm-continue').addEventListener('click', () => {
        window.location.href = "Panic-page.html";
    });

    document.getElementById('cancel-panic').addEventListener('click', () => {
        panicButton.classList.remove("on");
        panicButton.classList.add("off");
        document.getElementById('panic-confirmation-modal').style.display = "none";
    });
});
// Mobile logout functionality
const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
if (mobileLogoutBtn) {
    mobileLogoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMobileNav(); // Close the mobile menu
        logoutModal.style.display = 'flex'; // Show the same logout modal
    });
}