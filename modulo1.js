function clicou(){

    var idade = prompt("Digite sua idade?")
        if(idade >=18){
            window.open("https://google.com.br")
        }else{
            alert("Você é menor de idade, não podemos exibir o site!")
        }
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por clicar</strong>";
    }
    
    function move(){
        document.getElementById("frase").innerHTML = "Você passou o mouse aqui"
       
}
    function voltar(){
        document.getElementById("frase").innerHTML = "Passe o mouse aqui"
    }

function funcaoChange(elemento){
    console.log(elemento.value)
}