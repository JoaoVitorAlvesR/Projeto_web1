const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb+srv://User:9xZ0THdEkxPymLXx@cluster0.rvwcv.mongodb.net/?retryWrites=true&w=majority')
  console.log('Conectou com Mongoose!')
  
}

main().catch((err) => console.log(err))

module.exports = mongoose