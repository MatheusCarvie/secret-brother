const listBrother = [];

function add() {
  const input = document.getElementById("amigo");
  const value = input.value.trim();

  if (value === "") {
    alert("⚠ Por favor, digite um nome antes de adicionar!");
    return;
  }

  listBrother.push(value);
  updatedList();
  input.value = "";
  input.focus();
}

function updatedList() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listBrother.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    ul.appendChild(li);
  });
}

function random() {
  if (listBrother.length === 0) {
    alert("A lista está vazia! Adicione um nome primeiro.");
    return;
  }

  const index = Math.floor(Math.random() * listBrother.length);
  const match = listBrother[index];

  const result = document.getElementById("resultado");
  result.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = `🎉 O escolhido foi: ${match}!`;
  result.appendChild(li);
}
