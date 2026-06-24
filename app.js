  require('dotenv').config();
var API_KEY = process.env.API_KEY;

function enviarrequisicao(){
      
    var promptusuario = document.getElementById("txtprompt").value 
     
       if(promptusuario.trim() ==="") {

        alert("O campo de prompt não pode estar vazio!")
          return
       }
          document.getElementById("txtresposta").innerText= "Processando requisiçao ... Aguarde!"
      
            var url ="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="+ API_KEY;
                var payload ={
                  contents:[{parts:[{text: promptusuario}]  }]
                   }

                   fetch(url,{
                    method: "POST",
                     headers:{"Content-Type":"application/json"},
                      body: JSON.stringify(payload)

                    })
                .then(function(response) { return response.json() })
                .then(function(data){
                 var textoresposta = data.candidates[0].content.parts[0].text;
                document.getElementById("txtresposta").innerText= textoresposta;
                  })

                .catch(function(error){
                 document.getElementById("txtresposta") .innerText ="ocorreu um erro" + error
                })
                

                
                }