/* eslint-disable */
function doCallback(nome, sobrenome, QualquerPorra, QualquerPorra2) {
  const name = nome + "AAA";
  const surname = sobrenome + "BBB";
  QualquerPorra(name, surname);
  QualquerPorra2(name);
}

const callback1 = (nome, sobrenome) => {
  console.log(nome, sobrenome);
  // QUalquer coisa, QUALQUER MESMO!
};

function callBack2(name) {
  console.log("Nome: ", name);
}

doCallback("Álifer", "Quevedo", callback1, name => {
  console.log("Nome: ", name);
});

name => {};
name => {};
