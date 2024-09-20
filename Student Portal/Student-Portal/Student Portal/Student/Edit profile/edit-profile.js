// editProfile.js

// Reference to the user's profile in Firebase (assuming user data is stored under 'users' path)
const userId = "exampleUserId"; // Replace with the current logged-in user's ID or fetch it dynamically

// Fetch existing user data
firebase.database().ref('users/' + userId).once('value')
  .then(snapshot => {
    const userData = snapshot.val();
    
    // Populate form fields with existing user data
    document.getElementById('firstName').value = userData.firstName;
    document.getElementById('lastName').value = userData.lastName;
    document.getElementById('cnic').value = userData.cnic;
  })
  .catch(error => {
    console.error('Error fetching user data: ', error);
  });

// Handle form submission for profile update
document.getElementById('profileForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get updated values
  const updatedFirstName = document.getElementById('firstName').value;
  const updatedLastName = document.getElementById('lastName').value;
  const updatedCNIC = document.getElementById('cnic').value;

  // Update user data in Firebase
  firebase.database().ref('users/' + userId).update({
    firstName: updatedFirstName,
    lastName: updatedLastName,
    cnic: updatedCNIC
  }).then(() => {
    alert('Profile updated successfully!');
  }).catch((error) => {
    console.error('Error updating profile: ', error);
  });
});
