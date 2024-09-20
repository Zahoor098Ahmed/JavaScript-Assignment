// app.js

// Event listener for the Edit Profile form submission
document.getElementById('editProfileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const cnic = document.getElementById('cnic').value;
  
    // Create a profile object
    const profileData = {
      firstName: firstName,
      lastName: lastName,
      cnic: cnic
    };
  
    // Update the profile in Firebase (you may want to specify a user ID)
    database.ref('profiles/' + cnic).set(profileData)
      .then(() => {
        alert('Profile updated successfully!');
        document.getElementById('editProfileForm').reset(); // Reset the form
      })
      .catch((error) => {
        console.error('Error updating profile: ', error);
      });
  });
  
  // Event listener for the Check Result form submission
  document.getElementById('checkResultForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get CNIC from the form
    const checkCnic = document.getElementById('checkCnic').value;
  
    // Retrieve the result from Firebase
    database.ref('marks').orderByChild('studentId').equalTo(checkCnic).once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          let results = [];
          snapshot.forEach(childSnapshot => {
            const data = childSnapshot.val();
            results.push(`Course: ${data.course}, Marks: ${data.marks}/${data.totalMarks}, Grade: ${data.grade}`);
          });
          document.getElementById('resultData').innerText = results.join('\n');
          document.getElementById('resultDisplay').style.display = 'block';
        } else {
          alert('No results found for this CNIC.');
        }
      })
      .catch((error) => {
        console.error('Error checking results: ', error);
      });
  });
  