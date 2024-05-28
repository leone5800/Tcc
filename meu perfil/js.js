document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de clique ao ícone de busca
    document.getElementById('search-icon').addEventListener('click', function() {
        search();
    });

    // Adiciona evento de clique ao campo de busca
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            search();
        }
    });
});

// Função para realizar a busca
function search() {
    var searchTerm = document.getElementById('search-input').value;
    if (searchTerm.trim() !== '') {
        alert('Realizar busca por: ' + searchTerm);
    } else {
        alert('Digite algo para pesquisar.');
    }
}

// Função para alternar o menu lateral
function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// Função para fazer logoff
function logoff() {
    alert('Função de logoff ainda não implementada.');
}
document.addEventListener('DOMContentLoaded', function() {
    // Array com os textos que serão exibidos
    var texts = ["Encontre os melhores produtos com os melhores preços!", "Explore nossa variedade de produtos!", "Descubra ofertas incríveis todos os dias!"];
    var index = 0;
    var textElement = document.querySelector('.text-container h2');

    // Função para alternar os textos com efeito de fade
    function changeTextWithFade() {
        textElement.classList.add('fade-out'); // Adiciona a classe para iniciar o fade-out

        setTimeout(function() {
            textElement.textContent = texts[index]; // Atualiza o texto
            textElement.classList.remove('fade-out'); // Remove a classe para iniciar o fade-in
        }, 500); // Aguarda 500ms antes de atualizar o texto para permitir o efeito de fade-out

        index = (index + 1) % texts.length;
    }

    // Inicia a animação, alterando o texto com efeito de fade a cada 3 segundos
    setInterval(changeTextWithFade, 3000);
});
document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    // Função para alternar os slides
    function nextSlide() {
        // Oculta o slide atual
        slides[currentSlide].style.opacity = 0;

        // Avança para o próximo slide
        currentSlide = (currentSlide + 1) % slides.length;

        // Exibe o próximo slide
        slides[currentSlide].style.opacity = 1;
    }

    // Inicia o slideshow automaticamente
    setInterval(nextSlide, 5000); // Altere o valor (em milissegundos) para ajustar a velocidade do slideshow
});



    // Fazer o header acompanhar a rolagem da página
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    };

    // Exibir ou ocultar o botão "Voltar ao Topo" conforme a posição da página
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1'; // Tornar a seta visível
        } else {
            backToTopBtn.style.opacity = '0'; // Ocultar a seta
        }
    });

    window.addEventListener('DOMContentLoaded', function() {
        // Função para centralizar a logo horizontalmente
        function centerLogo() {
            var logo = document.querySelector('.logo-container');
            var windowWidth = window.innerWidth;
            var logoWidth = logo.offsetWidth;
    
            // Calcula a posição horizontal central da logo
            var leftPosition = (windowWidth - logoWidth) / 2;
    
            // Define a posição da logo
            logo.style.left = leftPosition + 'px';
        }
    
        // Chama a função ao carregar a página e ao redimensionar a janela
        window.addEventListener('resize', centerLogo);
        centerLogo(); // Chama a função inicialmente ao carregar a página
    });
    

    window.addEventListener('DOMContentLoaded', function() {
        // Função para centralizar a logo horizontalmente
        function centerLogo() {
            var logo = document.querySelector('.logo-container');
    
            // Define a posição da logo como 50% da largura da janela
            logo.style.left = '50%';
            logo.style.transform = 'translateX(-50%)'; // Centraliza a logo
        }
    
        // Chama a função ao carregar a página e ao redimensionar a janela
        window.addEventListener('resize', centerLogo);
        centerLogo(); // Chama a função inicialmente ao carregar a página
    });
    

    function updateAvatar(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                document.getElementById('avatar-img').src = e.target.result;
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    // Carrega as informações do perfil ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    loadProfileInfo();
});

// Salva as informações do perfil ao editar e sair do campo
document.querySelectorAll('.profile-info [contenteditable=true]').forEach(item => {
    item.addEventListener('input', function() {
        saveProfileInfo();
    });
});

// Função para salvar a foto de perfil
function updateAvatar(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('avatar-img').src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}




// Função para alternar entre edição e visualização
function toggleEdit(elementId) {
    var element = document.getElementById(elementId);
    var isEditable = element.getAttribute('contenteditable');

    if (isEditable === 'false') {
        element.setAttribute('contenteditable', 'true');
        element.focus();
    } else {
        element.setAttribute('contenteditable', 'false');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('upload-file').addEventListener('change', function() {
        updateAvatar(this);
    });
});

function updateAvatar(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('avatar-img').src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}


// Função para salvar as informações do perfil no armazenamento local
function saveProfileInfoLocally() {
    const username = document.getElementById('username').innerText;
    const email = document.getElementById('email').innerText;
    const location = document.getElementById('location').innerText;
    const phone = document.getElementById('phone').innerText;
    
    const profile = {
        username: username,
        email: email,
        location: location,
        phone: phone
    };

    // Salva as informações no armazenamento local
    localStorage.setItem('profileInfo', JSON.stringify(profile));
}


document.querySelectorAll('.profile-info [contenteditable=true]').forEach(item => {
    // Define o número máximo de caracteres permitidos em cada campo
    var maxLength = 50; // Altere conforme necessário

    // Adiciona um evento de input para monitorar e limitar o número de caracteres
    item.addEventListener('input', function() {
        limitMaxLength(item, maxLength);
    });

    // Adiciona um evento de keydown para impedir a quebra de linha quando Enter é pressionado
    item.addEventListener('keydown', function(e) {
        preventLineBreak(e, item);
    });
});

// Função para limitar o número de caracteres
function limitMaxLength(element, maxLength) {
    // Verifica se o número de caracteres excede o limite máximo
    if (element.textContent.length > maxLength) {
        // Se exceder o limite de caracteres, mantenha apenas os primeiros caracteres
        element.textContent = element.textContent.slice(0, maxLength);
    }
}

// Função para impedir a quebra de linha ao pressionar Enter
function preventLineBreak(event, element) {
    // Verifica se a tecla Enter foi pressionada e se não há quebra de linha
    if (event.key === 'Enter' && !event.shiftKey) {
        // Impede o comportamento padrão (quebra de linha)
        event.preventDefault();
        // Move o foco para o próximo elemento, se houver
        var nextElement = element.nextElementSibling;
        if (nextElement) {
            nextElement.focus();
        }
    }
}



// Variável para armazenar se as alterações foram feitas
var changesMade = false;

// Adiciona evento de clique aos botões de edição
document.querySelectorAll('.edit-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        // Verifica se as alterações foram feitas
        if (changesMade) {
            showModal();
        } else {
            toggleEdit(this.dataset.field);
        }
    });
});

// Adiciona evento de tecla pressionada aos campos editáveis
document.querySelectorAll('[contenteditable="true"]').forEach(field => {
    field.addEventListener('keydown', function(event) {
        // Verifica se a tecla pressionada foi "Enter"
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita quebra de linha no campo
            showModal();
        } else {
            // Atualiza a variável de controle para exibir o botão "Salvar"
            changesMade = true;
            showSaveButton();
        }
    });
});
// Variáveis globais para armazenar os valores originais dos campos
var originalValues = {};

// Função para alternar a visibilidade do botão "Salvar"
function toggleSaveButton() {
    var saveButton = document.getElementById("save-btn");
    saveButton.style.display = saveButton.style.display === "none" ? "block" : "none";
}

// Variáveis globais para armazenar os valores originais dos campos
var originalValues = {};

// Função para alternar a visibilidade dos botões "Salvar" e "Descartar"
function toggleActionButtons() {
    var saveButton = document.getElementById("save-btn");
    var discardButton = document.getElementById("discard-btn");
    saveButton.style.display = saveButton.style.display === "none" ? "block" : "none";
    discardButton.style.display = discardButton.style.display === "none" ? "block" : "none";
}

// Função para salvar as alterações
function saveChanges() {
    // Lógica para salvar as alterações aqui
    // Você pode implementar essa lógica de acordo com as necessidades do seu aplicativo
    // Aqui apenas ocultamos os botões de salvar e descartar
    toggleActionButtons();
}

// Função para descartar as alterações
function discardChanges() {
    // Restaura os valores originais dos campos
    for (var field in originalValues) {
        var element = document.getElementById(field);
        element.innerText = originalValues[field];
        element.setAttribute("contenteditable", "false");
    }
    // Oculta os botões de salvar e descartar
    toggleActionButtons();
}

// Função para ligar ou desligar a edição de um campo
function toggleEdit(field) {
    var element = document.getElementById(field);
    var isEditable = element.getAttribute("contenteditable") === "true";
    
    if (!isEditable) {
        // Armazena o valor original do campo antes de editar
        originalValues[field] = element.innerText;
    }
    
    // Inverte o estado de editabilidade do campo
    element.setAttribute("contenteditable", !isEditable);
    
    // Chama a função para alternar a visibilidade dos botões "Salvar" e "Descartar"
    toggleActionButtons();
}
