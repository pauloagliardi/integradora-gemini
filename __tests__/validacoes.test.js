// validacoes.test.js
const { validarEnvioPrompt, validarRecebimentoResposta } = require('../validacoes');

describe('Testes de validação', () => {
  // --- validarEnvioPrompt ---
  test('Retorna true para prompt válido', () => {
    expect(validarEnvioPrompt('Um texto qualquer')).toBe(true);
  });

  test('Retorna false para prompt vazio', () => {
    expect(validarEnvioPrompt('')).toBe(false);
  });

  test('Retorna false para prompt só com espaços', () => {
    expect(validarEnvioPrompt('   ')).toBe(false);
  });

  // --- validarRecebimentoResposta ---
  test('Retorna true para resposta válida', () => {
    const data = {
      candidates: [
        { content: { parts: [{ text: 'Resposta válida' }] } }
      ]
    };
    expect(validarRecebimentoResposta(data)).toBe(true);
  });

  test('Retorna false se não houver candidatos', () => {
    expect(validarRecebimentoResposta({})).toBe(false);
  });

  test('Retorna false se texto estiver vazio', () => {
    const data = {
      candidates: [
        { content: { parts: [{ text: '' }] } }
      ]
    };
    expect(validarRecebimentoResposta(data)).toBe(false);
  });
});