/* eslint-disable */
const names = ["Álifer", "Julio", "David Designer", "Fabio Carente"];

names.forEach(function(valorAtual, indiceDoArray, array) {});
// const App = () => {} === function App() {

const julio = names.filter(name => {
  return name === "Julio";
});

const alifer = names.filter(name => /* return */ name === "Álifer");
const fabio = names.filter(fabio => fabio === "Fabio Carente");

const david = names.filter(name => {
  return name === "David Designer";
});

const exemploPraBugarACabeca = names.map(
  name =>
    name
      .split("") // Caractere por caractere
      .map(letter => letter.toLowerCase()) // Percorrer os caracteres e transformá-los em lowerCase
      .join("") // Junto de novo
);
// Tudo que for retornado no map, vai ser incluído dentro da variável
const euNaoSeiNemOQueEuToFazendoMais = names.map(indice => {
  if (indice > 0) {
    return; // === return undefined.
  } else {
    return "Foda-se!";
  }
});
console.log(euNaoSeiNemOQueEuToFazendoMais);
