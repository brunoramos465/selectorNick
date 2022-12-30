


function color (){ 
    document.getElementById("back-button").style.display ="none";

    document.getElementById("black-button").addEventListener("click", function(){
        document.querySelector("body").setAttribute("class", "black");  
        document.getElementById("black-button").style.display = "none"; // esconder botão
        document.getElementById("back-button").style.display = "inline"; // aparecer botão
    }) 
    

    document.getElementById("black-button").addEventListener("click", function(){
        document.getElementById("zero").setAttribute("class", "container-black");

    })
    
    document.getElementById("back-button").addEventListener("click", function(){
        document.querySelector("body").setAttribute("class","black-normal");
        document.getElementById("black-button").style.display = "inline";
        document.getElementById("back-button").style.display = "none";
        
    })
    
    document.getElementById("back-button").addEventListener("click", function(){
        document.getElementById("zero").setAttribute("class", "container-normal");
    })
    
}

color ();

function avatar() {
  const resultado = document.querySelector("#resultado");
  const imgbutton1 = document.querySelector(".img-button1");
  const imgbutton2 = document.querySelector(".img-button2");
  const imgbutton3 = document.querySelector(".img-button3");
  const imgbutton4 = document.querySelector(".img-button4");
  const imgbutton5 = document.querySelector(".img-button5");
  const imgbutton6 = document.querySelector(".img-button6");
  const imgbutton7 = document.querySelector(".img-button7");
  const imgbutton8 = document.querySelector(".img-button8");

  imgbutton1.addEventListener("click", function() {
  resultado.innerHTML = imgbutton1.innerHTML;
  document.getElementById("avatar").style.display = "none";
  document.getElementById("name").style.display = "inline"
  }); 

  imgbutton2.addEventListener("click", function(){
    resultado.innerHTML = imgbutton2.innerHTML;
    document.getElementById("avatar").style.display = "none";
    document.getElementById("name").style.display = "inline"

  })

  imgbutton3.addEventListener("click", function (){
    resultado.innerHTML = imgbutton3.innerHTML;
    document.getElementById("avatar").style.display = "none";
    document.getElementById("name").style.display = "inline"

  })

  imgbutton4.addEventListener("click", function(){
    resultado.innerHTML = imgbutton4.innerHTML;
    document.getElementById("avatar").style.display = "none";
    document.getElementById("name").style.display = "inline"

  })
  imgbutton5.addEventListener("click", function(){
    resultado.innerHTML = imgbutton5.innerHTML;
    document.getElementById("avatar").style.display = "none";
    document.getElementById("name").style.display = "inline"

  })
  
  imgbutton6.addEventListener("click", function(){
    resultado.innerHTML = imgbutton6.innerHTML;
    document.getElementById("avatar").style.display = "none";
    document.getElementById("name").style.display = "inline"

  })

  imgbutton7.addEventListener("click", function(){
    resultado.innerHTML = imgbutton7.innerHTML;
    document.getElementById("avatar").style.display = "none";
    document.getElementById("name").style.display = "inline"

  })
  imgbutton8.addEventListener("click", function(){
    resultado.innerHTML = imgbutton8.innerHTML;
    document.getElementById("avatar").style.display = "none";    // esconder botão
    document.getElementById("name").style.display = "inline"


  })


}

avatar ();


function nickName (){
  
  const form = document.getElementById("form")
  const resultadoNick = document.getElementById("resultado-nick");

  form.addEventListener('submit', function(e){
    e.preventDefault();

    const nick = document.getElementById("textnick").value;

    resultadoNick.innerHTML  = `<strong>${nick}</strong>`;
  
     
    document.getElementById("avatar").style.display = "none"; 
    document.getElementById("name").style.display = "none"; // esconder botão
    document.getElementById("ola").style.display = "flex";
    document.getElementById("ola").style.justifyContent = "center";
    document.getElementById("resultado").style.display = "inline";



    const textone = document.getElementById("text-one");
    document.getElementById("text-one").style.display = "flex";

   
   
    const data = new Date();
    const hora = data.getHours();
    const min = data.getMinutes();
    const dataH = data.getDate();
    const mes = data.getMonth() + 1 ;
    const ano = data.getFullYear();

    
   
    textone.innerHTML = `<p> Olá ${nick}, tudo bem? Você acabou de criar o seu login no 
    nosso site as ${hora}:${min} do dia ${dataH}/${mes}/${ano}. <br>
    Obrigado pelo acesso ${nick}, volte sempre!!!</p>`;
    

    document.getElementById("continuar").style.display = "flex";



  
  })

  
  

}

nickName ();

function resultado (){


  document.getElementById("name").style.display = "none"; // esconder botão

}


resultado();




// escolha o seu avatar
// https://www.gratispng.com/png-uhu0c1/
// escolha o seu nick
// mostrar a foto + nick