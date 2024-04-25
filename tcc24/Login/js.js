document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('registerForm');
  const registerSuccess = document.getElementById('registerSuccess');
  const input = document.querySelector("#phoneNumber"); // Seleciona o campo de número de telefone
  const openModalLink = document.getElementById('openModalLink');
  const modal = document.getElementById('myModal');
  const closeModalSpan = document.querySelector('.close');

  // Função para abrir o modal
  function openModal() {
    modal.style.display = "block";
  }

  // Função para fechar o modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listener para abrir o modal ao clicar no link dos Termos de Serviço
  openModalLink.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
  });

  // Event listener para fechar o modal ao clicar no botão "X"
  closeModalSpan.addEventListener('click', function () {
    closeModal();
  });

  // Event listener para fechar o modal ao clicar fora da área do modal
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });

  // Função para gerar um código de verificação de 6 dígitos
  function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Função para enviar e-mail de confirmação usando Gmail API
  function sendConfirmationEmail(email, verificationCode) {
    gapi.load('client:auth2', function () {
      gapi.client.init({
        'apiKey': 'AIzaSyDR4HmbrXcEDmbkyPWifxyVwXfsnfmlAFE',
        'clientId': '970509372650-40k4iq0v3u7o18b6ughme3rf641qimhk.apps.googleusercontent.com',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
        'scope': 'https://www.googleapis.com/auth/gmail.send'
      }).then(function () {
        return gapi.auth2.getAuthInstance().signIn();
      }).then(function () {
        const emailContent = [
          "Content-Type: text/plain; charset=\"UTF-8\"\n",
          "MIME-Version: 1.0\n",
          "Content-Transfer-Encoding: 7bit\n",
          "to: ", email, "\n",
          "from: otaviosouza1511@gmail.com\n",
          "subject: Confirmação de Registro\n\n",
          "Seu código de verificação é: ", verificationCode
        ].join('');
        
        return gapi.client.gmail.users.messages.send({
          'userId': 'me',
          'resource': {
            'raw': window.btoa(emailContent).replace(/\+/g, '-').replace(/\//g, '_')
          }
        });
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.error(error);
      });
    });
  }

  // Event listener para o formulário de registro
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter os dados do formulário
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const phoneNumber = input.value; // Campo de telefone selecionado anteriormente
    const terms = document.getElementById('terms').checked;

    // Verificar se todos os campos obrigatórios foram preenchidos
    if (!email || !confirmEmail || !username || !password || !age || !gender || !phoneNumber || !terms) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Verificar se os campos de e-mail são iguais
    if (email !== confirmEmail) {
      alert('Os campos de e-mail devem ser iguais.');
      return;
    }

    // Gerar e enviar o código de verificação
    const verificationCode = generateVerificationCode();
    sendConfirmationEmail(email, verificationCode);

    // Mostrar mensagem de registro concluído
    registerSuccess.classList.remove('hidden');

    // Limpar o formulário
    registerForm.reset();
  });

  // Inicialize o campo de número de telefone com a biblioteca intl-tel-input
  window.intlTelInput(input, {
    initialCountry: "auto",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  const daySelect = document.getElementById('day');
  const monthSelect = document.getElementById('month');
  const yearSelect = document.getElementById('year');

  // Adicionar opções para os dias
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Adicionar opções para os meses
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  // Adicionar opções para os anos (de 1900 a 2024)
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1900; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }
});


// Event listener para o formulário de registro
registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Obter os dados do formulário
  const formData = new FormData(registerForm);

  // Enviar dados para o backend PHP
  fetch('register.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      console.log(data); // Exibir a resposta do servidor no console
      // Adicione qualquer lógica adicional de acordo com a resposta do servidor
  })
  .catch(error => {
      console.error('Erro:', error);
  });

  // Limpar o formulário
  registerForm.reset();
});