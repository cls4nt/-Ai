const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlterntivas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const TextoResultado = document.querySelector(".caixa-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu do colégio voce se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, eles também gera imagem e áudios hiper-realistas. Qual é seu primeiro pensamento?",
        alternativas: [

            {
                texto: "Isso é assustador!",
                afirmacao: "No inicio, eu ficaria com medo do que esse tecnologia pode fazer."
            },
            {
                texto: "Isso é incrivel",
                afirmacao: "Sempre quis saber como usar uma IA em meu dia a dia?"
            }
        ]
    }
]