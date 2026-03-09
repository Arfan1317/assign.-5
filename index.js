document.getElementById('loginForm').addEventListener('submit', function(event) {
           
            event.preventDefault();

            const usernameValue = document.getElementById('username').value;
            const passwordValue = document.getElementById('password').value;

            if (usernameValue === 'admin' && passwordValue === 'admin123') {
               
                window.location.href = 'dashboard.html'; 
            } else {
                alert('Invalid credentials! Please use Username: admin and Password: admin123');
            }
        });