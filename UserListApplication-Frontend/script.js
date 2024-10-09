// async function fetchUsers() {
//     try {
//         const response = await fetch('http://localhost:8080/users');
//         const users = await response.json();
//         displayUsers(users);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// }

async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:8080/users');
        const users = await response.json();
        console.log(users); // Check what data is received
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}


function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear existing content

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
            <strong>${user.name}</strong> <br>
            Email: ${user.email} <br>
            <button onclick="viewDetails(${user.id})">View Details</button>
        `;
        userList.appendChild(userDiv);
    });
}

async function viewDetails(userId) {
    try {
        // const response = await fetch(`http://localhost:8080/users/${userId}`);
        const response = await fetch('http://localhost:8080/users');

        const user = await response.json();
        displayUserDetails(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
}

function displayUserDetails(user) {
    const userDetails = document.getElementById('user-details');
    userDetails.innerHTML = `
        <h2>User Details</h2>
        <strong>Name:</strong> ${user.name} <br>
        <strong>Email:</strong> ${user.email} <br>
        <strong>Phone:</strong> ${user.phone} <br>
        <strong>Address:</strong> ${user.address.street}, ${user.address.city} <br>
    `;
    userDetails.style.display = 'block';
}

// Fetch users when the page loads
fetchUsers();
