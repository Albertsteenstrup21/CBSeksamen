document.addEventListener('DOMContentLoaded',function () {

    //Opdater bruger
    let submitButtonUpdate = document.getElementById('submitUpdate');

    submitButtonUpdate.addEventListener('click', function(e) {
        // preventDefault sikrer at siden ikke opdatere imens form input oplyses
        e.preventDefault();
  
        let user_idInput = document.getElementById('user_idUpdate').value;
        let usernameInput = document.getElementById('username').value;
        let passwordInput = document.getElementById('password').value;
        let regionInput = JSON.parse(document.getElementById('newRegion').value);
  
        let updateUser = {
            user_id: user_idInput,
            newUsername: usernameInput,
            newPassword: passwordInput,
            newRegion: regionInput
        }
        
        //Poster givne oplysninger
        fetch('http://localhost:3000/updateUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(response => {
            window.alert('User updated');
            location.href = "/";   
        })
        .catch((error) => {
            console.log('Error:', error)
        })
    });
});