var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    },500);
    // event.target.parentNode; TR = paciente = remover
})

/*
pacientes.forEach(function(pacientes) {
    pacientes.addEventListener("dblclick", function() {
        console.log("duplo click");
        this.remove();
    }); // escuta duplo click
});
*/