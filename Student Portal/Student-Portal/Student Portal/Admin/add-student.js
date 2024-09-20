// app.js

// Event listener for 'Add Student' form submission
document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;
  
    // Create student object
    const studentData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      cnic: cnic,
      userType: 'student' // Adding userType field as 'student'
    };
  
    // Firebase logic to add student data
    database.ref('students/' + cnic).set(studentData)
      .then(() => {
        alert('Student added successfully!');
        document.getElementById('addStudentForm').reset(); // Reset form after submission
      })
      .catch((error) => {
        console.error('Error adding student:', error);
      });
  });
  