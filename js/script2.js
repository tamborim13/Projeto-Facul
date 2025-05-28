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
        const formData = new FormData();
    formData.append("nome", document.getElementById("nome").value);
    formData.append("email", document.getElementById("email").value);
    // ... repita para os outros campos

    await fetch("https://webhook.site/SEU-LINK", {
      method: "POST",
      body: formData
});
    window.location.href = "https://chat.whatsapp.com/KMMBtNoL6ZNEgoh4JM2eBC";

  } catch (error) {
    alert("Erro ao enviar dados. Tente novamente.");
    console.error(error);
  }
});