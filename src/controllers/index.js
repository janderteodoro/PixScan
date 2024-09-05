const sharp = require('sharp')
const tesseract = require ('tesseract.js')

module.exports.nubankController = async (request, response) => {
  try {
    const { imageBase64 } = request.body
  
    if (!imageBase64) {
      return response.status(400).json({
        error: 'image base 64 not sended'
      })
    }
  
    const isBase64 = (str) => {
      const regex = /^[A-Za-z0-9+/]+={0,2}$/
      return regex.test(str)
    }
  
    if(!isBase64(imageBase64)){
      return response.status(400).json({ error: 'Image is not valid image base 64'})
    }
  
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '')
  
    const imageBuffer = Buffer.from(base64Data, 'base64')
    const processedImage = await sharp(imageBuffer).greyscale().toBuffer()
    const result = await tesseract.recognize(processedImage, 'por', {
      logger: (m) => console.log(m)
    })
    const extractedText = result.data.text

    const imageSizeInKb = Buffer.byteLength(imageBuffer) / 1024
  
    if (imageSizeInKb > 500) {
      return response.status(400).json({ error: 'image very large'})
    }
  
    return response.status(200).json({ message: 'image received with success'})
  } catch (error) {
    return response.status(500).json({ error: 'Error in analysis the receipt'})
  }
}

module.exports.mercadoPagoController = async (request, response) => {
  return response.json({ message: 'Mercado Pago' })
}

module.exports.picPayController = async (request, response) => {
  return response.json({ message: 'picPay' })
}

module.exports.bradescoController = async (request, response) => {
  return response.json({ message: 'Bradesco' })
}

module.exports.bancoDoBrasilController = async (request, response) => {
  return response.json({ message: 'Banco do Brasil' })
}

module.exports.santanderController = async (request, response) => {
  return response.json({ message: 'nubank' })
}
