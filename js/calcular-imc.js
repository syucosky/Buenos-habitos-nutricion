var paciente = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < paciente.length; i++)
{
    var pacientes = paciente[i];

    var tdPeso = pacientes.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdIMC = pacientes.querySelector(".info-imc");



    var pesoEsValido = validarPeso(peso);
    var alturaEsValida = validarAltura(altura);

    if (!pesoEsValido)
    {   
        console.log("peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        pacientes.classList.add("paciente-incorrecto");
    }
    if (!alturaEsValida)
    {   
        console.log("Altura incorrecto");
        tdIMC.textContent = "Altura incorrecto";
        pacientes.classList.add("paciente-incorrecto");
        alturaEsValida = false;
    }
    if (pesoEsValido && alturaEsValida)
    {
        tdIMC.textContent = calculariMC(peso,altura);
    }
}

function calculariMC(peso,altura)
{
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso)
{
    if (peso >= 0 && peso < 1000)
    {
        return true;
    }else
    {
        return false;
    }
}
function validarAltura(altura)
{
    if (altura >= 0 && altura < 3.00)
    {
        return true;
    }else
    {
        return false;
    }
}