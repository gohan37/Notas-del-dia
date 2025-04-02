
const sendButton = document.getElementById('sendButton');
const textInput = document.getElementById('textInput');
const savedText = document.getElementById('savedText');

sendButton.addEventListener('click', async () => {
  const text = textInput.value;

  if (!text) {
    alert('Por favor, escribe algo.');
    return;
  }

  try {
    // Enviar texto al backend
    const response = await fetch('http://localhost:3000/save-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    // Mostrar el texto guardado
    savedText.textContent = data.savedText || 'Error al guardar el texto.';
  } catch (error) {
    console.error('Error:', error);
    savedText.textContent = 'Error al conectar con el backend.';
  }
});
