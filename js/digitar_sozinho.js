const digitarSozinho = document.querySelector("#texto");
const meuTexto = "Emmanuel Marcos de Oliveira";
const interval = 200;

function showText(digitarSozinho, meuTexto, interval) {
  const char = meuTexto.split("").reverse();
  const typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }

    const next = char.pop();

    digitarSozinho.innerHTML += next;
  }, interval);
}
showText(digitarSozinho, meuTexto, interval);
