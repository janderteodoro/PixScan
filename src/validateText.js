const validateTransactionId = (txt) => {
  const transactionIdRegex1 = /ID\s+da\s+transação:\s*\b[A-9Za-z0-9]+\b/i
  const transactionIdRegex2  = /ID\s+de\s+transação:\s*\b[A-Za-z0-9]+\b/i
  return transactionIdRegex1.test(txt) || transactionIdRegex2(txt)
}

const validateValue= (txt) => {
  const valueRegex = /Valor\s+R\$\s+\d{1,3}(?:\.\d{3})*,\d{2}/i
  return valueRegex.test(txt)
}

module.exports = (txt) => {
  return validateTransactionId(txt) &&
    validateValue(txt)
}