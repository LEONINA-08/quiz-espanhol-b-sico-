alert("JavaScript funcionando!");

function corrigirQuiz(){
    let pontuacao = 0;
    let erros = [];

    //Pergunta 1
    const p1 = document.querySelector('input[name="pergunta1"]:checked');

    if(p1 && p1.value ==="Contraste"){
        pontuacao++;
        }else{
            erros.push({
                pergunta: 1, 
                correta:"Contraste"
            });
        }

       // pergunta 2
       const p2 = document.querySelector('input[name="pergunta2"]:checked');

       if(p2 && p2.value === "Se perdió por falta de planificación") {
        pontuacao++;
       }else {
        erros.push({
            pergunta: 2,
            correta: "Se perdió por falta de planificación"
        });
       }

       //pergunta 3 
       const p3 = document.getElementById("p3").value.trim();

       if(p3 !== ""){
        erros.push({
            pergunta: 3,
            correta: "uma resposta pessoal"
        });
       }

        // PERGUNTA 4
    const p4 = document.querySelector('input[name="pergunta4"]:checked');

    if (p4 && p4.value === "Encontrar una solución") {
        pontuacao++;
    } else {
        erros.push({
            pergunta: 4,
            correta: "Encontrar una solución"
        });
       }

       //pergunta 5
       const p5 = document.querySelector('input[name="pergunta5"]:checked');

       if(p5 &&  p5.value ==="La persona compró algo, pero tenía dudas sobre el precio" ){
        pontuacao++;

       }else{
        erros.push({
            pergunta:5,
            correta: "La persona compró algo, pero tenía dudas sobre el precio"
        });

       }
       //pergunta 6
       const p6 = document.getElementById("p6").value.trim();

       if(p6 !==""){
        pontuacao++;
       }else{
        erros.push({
            pergunta:6,
            correta:"Una goma, un lápiz, un sacapuntas, pegamento en barra, lápices de colores y unas tijeras."

        });
       }

       //mostrar a pontuacao
       const divErros = document.getElementById("erros");

       if(erros.length===0){
        divErros.innerHTML= `<p> 🎉 ¡Felicidades! ¡Has acertado todas las preguntas!</p>`;
       }else{
        let html = "<h3>Preguntas que debes revisar:</h3><ul>";

        erros.forEach(erro =>{
            html += `<li> <strong>Pregunta ${erro.pergunta}:</strong>
            respuesta correcta: ${erro.correta} </li>`;
        });
        html+="</ul>";
        divErros.innerHTML=html;
       }
       //Rola a página atéo resultado
       document.getElementById("resultado").scrollIntoView({
        behavior: "smooth"
       });








}