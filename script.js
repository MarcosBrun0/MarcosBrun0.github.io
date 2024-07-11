document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const btnMostrarMais = document.getElementById("btnMostrarMais");
    const projetosOcultos = document.querySelectorAll(".projeto.oculto");
  
    btnMostrarMais.addEventListener("click", function() {
      projetosOcultos.forEach(projeto => {
        projeto.classList.toggle("oculto");
      });
  
      // Alterar o texto do botão após mostrar os projetos
      if (btnMostrarMais.textContent === "Mostrar Mais Projetos") {
        btnMostrarMais.textContent = "Mostrar Menos Projetos";
      } else {
        btnMostrarMais.textContent = "Mostrar Mais Projetos";
      }
    });
  });
  