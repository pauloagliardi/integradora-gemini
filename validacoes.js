function validarEnvioPrompt(prompt) {
  return prompt.trim() !== "";
}

function validarRecebimentoResposta(data) {
  if (
    data.candidates &&
    data.candidates.length > 0 &&
    data.candidates[0].content.parts[0].text.trim() !== ""
  ) {
    return true;
  }
  return false;
}

// exporta as funções corretamente
module.exports = { validarEnvioPrompt, validarRecebimentoResposta };