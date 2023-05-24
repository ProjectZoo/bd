
function logar(){
    
    let nome = document.getElementById("nome").value 
    let senha = document.getElementById("senha").value 

    let dados = [

        { "id" : Date.now(),"nome": will,"senha": 1234},//0
     {"id" : Date.now(),"nome": bob,"senha": 4141}, //1
     {"id" : Date.now(),"nome": will,"senha": 4231} //2
        

    ]
    for(let i=0;dados.length> i;i++){

    }
}


if(nome == dados[1].nome && senha == dados[1].senha){
    alert("Está logado")
}else {
    alert("Não encontrado")
}




function teste(){
   
    let item =["zucas"]
    let nomes=[[pedro, zaz, théo]+ ","+ item]

    localStorage.setItem("todos",nomes);

    //Retrieve
    document.getElementById("demo").innerHTML= localStorage.getItem("todos")
}

function retorno(){
    
}

