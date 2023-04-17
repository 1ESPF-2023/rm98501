//RECUPERANDO O BOTÃO1 COM O GETELEMENTBYID
const botao = document.getElementById("btn-1");

//RECUPERANDO UM ITEM ESPECIFICO COM A 
//FUNÇÃO querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

// Recuperar uma lista de elementos com a function querySelectoraALL
const seletores = document.querySelectorAll("li");

seletores.forEach((item)=>{

    if(item.textContent == "item-15") {
        let meuItem = item;
        console.log(`Items selecionados : ${meuItem.textContent}`);
        meuItem.textContent = "Ta dominado!"
    }
})

//setTimeOut
//serInterval
//Random
//Math.Ceil
//Math.Random
//Math.Floor