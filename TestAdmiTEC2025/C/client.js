var contentDiv = document.getElementById("content");
var sendButton = document.getElementById("sendButton");
var resetButton = document.getElementById("resetButton");
var result = document.getElementById("result");

sendButton.addEventListener("click", checkAnswers);
resetButton.addEventListener("click", reset);

function htmlFormat(text) {
    let formattedText = text
        .replace(/\n\n/g, "<br><br><p class='center'><strong>")
        .replace(/\no/g, "</p><br><p class='center'>")
        .replace(/\nc/g, "</p><p><br>")
        .replace(/\n/g, "<br><br>")
        .replace(/\\cdot/g, "&sdot;")
        .replace(/\\le/g, "&le;")
        .replace(/\\ge/g, "&ge;")
        .replace(/\^(\w+)/g, "<sup>$1</sup>")
        .replace(
            /\\frac\{([^}]*)\}\{([^}]*)\}/g,
            "<span style='display:inline-block;text-align:center;'><sup>$1</sup>&frasl;<sub>$2</sub></span>"
        )
        .replace(/\[IMG-(\d+)\]/g, (match, num) => {
            return `</p><br><div class="imgDiv"><img src="C/img/${num}.png"></div><br><p>`;
        });

    return formattedText;
}

window.addEventListener("load", function () {
    for (p of preguntas) {
        p.txtPregunta = htmlFormat(p.txtPregunta)
        p.respPregunta = htmlFormat(p.respPregunta)


        var el = document.createElement("div");
        el.innerHTML = `<h3>${p.idPregunta}. ${p.txtPregunta}</h3>`;
        el.id = "p-" + p.idPregunta;
        for (o in p.respOpciones) {
            p.respOpciones[o] = htmlFormat(p.respOpciones[o])
            el.innerHTML += `<label><input type="radio" name="${p.idPregunta}" value="${parseInt(o) + 1}">${p.respOpciones[o]}<br></label>`;
        }
        el.innerHTML += `<div class="respDiv hidden"><h1>Explicación:</h1> <p>${p.respPregunta}</p></div>`;
        contentDiv.appendChild(el);
    }

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("click", function (e) {
            document.querySelector(".evaluation").classList.remove("hidden");
            var currentName = e.target.name;
            var nextQuestion = document.querySelector(`input[name="${parseInt(currentName) + 1}"]`);
            if (nextQuestion) {
                nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});

function checkAnswers() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    sendButton.classList.add("hidden");
    resetButton.classList.remove("hidden");
    result.classList.remove("hidden");
    result.innerText = "";
    document.querySelectorAll("input").forEach(input => input.disabled = true);
    document.querySelectorAll("label").forEach(label => label.classList.add("disabled"));
    document.querySelectorAll(".respDiv").forEach(div => div.classList.remove("hidden"));

    var score = 0;
    var correctAnswers = [];
    var incorrectAnswers = [];
    var unanswered = [];

    for (p of preguntas) {
        var preguntaDiv = document.getElementById("p-" + p.idPregunta);
        var selected = document.querySelector(`input[name="${p.idPregunta}"]:checked`);
        document.querySelector(`input[name="${p.idPregunta}"][value="${p.idRespPregunta}"]`).parentElement.classList.add("correct");
        if (selected != null) {
            if (selected.value == p.idRespPregunta) {
                score++;
                preguntaDiv.classList.add("correct");
                correctAnswers.push(p);
            } else {
                preguntaDiv.classList.add("incorrect");
                selected.parentElement.classList.add("incorrect");
                incorrectAnswers.push(p);
            }
        } else {
            preguntaDiv.classList.add("unanswered");
            unanswered.push(p);
        }
    }

    result.innerText = `Preguntas respondidas: ${score}/${preguntas.length} \n\nRespuestas correctas: ${correctAnswers.length} \nRespuestas incorrectas: ${incorrectAnswers.length} \nSin responder: ${unanswered.length}\n\nNota: ${(score * 100 / preguntas.length).toFixed(2)}/100.00`;
}

function reset() {
    window.scrollTo({ top: 0 });
    window.location.reload();

}
