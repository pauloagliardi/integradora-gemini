function validarEnvioPrompt(prompt) {
  return prompt.trim() !== "";
}

function validarRecebimentoResposta(data) {
  return (
    data.candidates &&
    data.candidates.length > 0 &&
    data.candidates[0].content.parts[0].text.trim() !== ""
  );
}