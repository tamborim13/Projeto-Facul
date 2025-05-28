document.getElementById("whatsapp-btn").addEventListener("click", () => {
  const data = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    cpf: document.getElementById("cpf").value,
    endereco: document.getElementById("endereco").value,
    cidade: document.getElementById("cidade").value,
    sexo: document.getElementById("sexo").value
  };

  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "dados_formulario.json";
  document.body.appendChild(link);

  // Quando o download começar, redireciona
  link.click();
  document.body.removeChild(link);

  // Aguarda um pequeno tempo para garantir que o download inicie
  setTimeout(() => {
    window.location.href = "https://chat.whatsapp.com/KMMBtNoL6ZNEgoh4JM2eBC";
  }, 500);
});