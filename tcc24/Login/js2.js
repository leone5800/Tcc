document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    // Recuperar informações de registro do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Verificar as credenciais do usuário
      const user = users.find(user => user.username === username && user.password === password);
      
      if (user) {
        alert('Login successful!');
        // Redirecionar ou fazer qualquer outra ação desejada
      } else {
        alert('Login unsuccessful. Please check your credentials.');
      }
    });
  });