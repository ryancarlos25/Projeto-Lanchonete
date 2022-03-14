
let valueprato;
let valorbebida;
let valorsobremesa;
let totalvalue;
let prato;
let bebida;
let sobremesa;



function escolherfrango() {
  
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("pastel").style.borderColor = "white";
    prato = "Frango";
    valueprato = 19.90;
    
}

function escolherpastel() {
  
    document.getElementById("pastel").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    prato = "Paste de Camarão"
    valorprato = 9.90;
}

function escolherlata() {
  
    document.getElementById("lata").style.borderColor = "green";
    document.getElementById("2lts").style.borderColor = "white"
    document.getElementById("refresco").style.borderColor = "white"
    bebida = "Refrigerante em lata";
    valorbebida = 3.50;

}

function escolher2lts() {
  
    document.getElementById("2lts").style.borderColor = "green";
    document.getElementById("lata").style.borderColor = "white";
    document.getElementById("refresco").style.borderColor = "white";
    bebida = "Refrigerante 2Lts";
    valorbebida = 8.50;
}

function escolherrefresco() {
  
    document.getElementById("refresco").style.borderColor = "green";
    document.getElementById("lata").style.borderColor = "white";
    document.getElementById("2lts").style.borderColor = "white";
    bebida = "Refresco";
    valorbebida = 3.50;
}

function escolherpudim() {
  
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("torta").style.borderColor = "white";
    document.getElementById("bolo").style.borderColor = "white";
    sobremesa = "Pudim";
    valorsobremesa = 3.50;
}

function escolhertorta() {
  
    document.getElementById("torta").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("bolo").style.borderColor = "white";
    sobremesa = "Torta de limão";
    valorsobremesa = 4.50;
}

function escolherbolo() {
  
    document.getElementById("bolo").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("torta").style.borderColor = "white";
    sobremesa = "Bolo de chocolate";
    valorsobremesa = 3.50;
}

// Calculadora //

function insert(num)
        {
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }

        
        function calcular()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            if(resultado)
            {
                document.getElementById('resultado').innerHTML = eval(resultado);
            }
            else
            {
                document.getElementById('resultado').innerHTML = "Nada..."
            }
        }

function finalizarpedido() {
let mensagem;
   
mensagem = 
    "Olá, gostaria de pedir um combo: " + 
    prato + ", " + 
    bebida + " e " + 
    sobremesa + ".";

    window.open("https://api.whatsapp.com/send/?phone=%2B5521984748088&text= " + mensagem);
}

