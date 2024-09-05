const validateTransactionId = (txt) => {
  const regex = /ID\s+da\s+transação:\s*([A-Za-z0-9]{32})/i;
  const isValid = regex.test(txt)
  return isValid 
}

const validateNecessaryFields = (txt) => {
  const regex = /Nome\s+[A-Za-z\s]+.*?CPF\s+[^\s]+.*?Instituição\s+[A-Za-z\s]+.*?Tipo de conta\s+[A-Za-z\s]+.*?Chave Pix\s+[^\s]+.*?Origem\s+Nome\s+[A-Za-z\s]+.*?Instituição\s+[A-Za-z\s]+.*?Agência\s+\d+.*?Conta\s+[^\s]+.*?CPF\s+[^\s]+/is;
  const isValid =  regex.test(txt)
  return isValid
}

module.exports = (txt) => {
  return validateTransactionId(txt)
    && validateNecessaryFields(txt)
}