document.getElementById("whatsapp-btn").addEventListener("click", async () => {
  const formData = new FormData();
  formData.append("nome", document.getElementById("nome").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("telefone", document.getElementById("telefone").value);
  formData.append("cpf", document.getElementById("cpf").value);
  formData.append("endereco", document.getElementById("endereco").value);
  formData.append("cidade", document.getElementById("cidade").value);
  formData.append("sexo", document.getElementById("sexo").value);

  try {
    await fetch("https://webhook.site/232aa86c-3c54-4b9b-9b8e-f0947e8c5c2d", {
      method: "POST",
      body: formData
    });

    window.location.href = "https://chat.whatsapp.com/KMMBtNoL6ZNEgoh4JM2eBC";
  } catch (error) {
    alert("Erro ao enviar dados. Tente novamente.");
    console.error("Erro:", error);
  }
});