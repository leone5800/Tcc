
    var profileIcon = document.querySelector(".profile-icon");
    profileIcon.addEventListener("click", function() {
        document.getElementById("profileOptions").classList.toggle("show");
    });

    var profilePicForm = document.getElementById("profilePicForm");
    var profilePicInput = document.getElementById("profilePicInput");

    profilePicForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(profilePicForm);

        fetch('', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
        
            var profileIcon = document.querySelector(".profile-icon");
            profileIcon.src = data.newProfilePicURL;

            document.getElementById("profileOptions").classList.remove("show");
        })
        .catch(error => {
            console.error('Erro ao fazer upload da foto de perfil:', error);
        });
    });
    function toggleMenu() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('show');
    }


