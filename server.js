'use strict';




const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');
const { getMaxListeners } = require('process');

const PORT = process.env.PORT;
const server = express();
server.use(cors()); 

mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true, useUnifiedTopology: true}); 

server.listen(PORT, () => {
    console.log(`listening on PORT `)
})

/////////////////////////shecma////////////////////////

const BookSaddam = new mongoose.Schema({
    title : String ,
    descrption :String ,
    email:String ,
  });


  // Model___________________________________________ 

  const BookModels = mongoose.model('Book', BookSaddam); 

  function seedDataCollection() {
      
    const BrokenGlass =new BookModels({
        title: 'Broken Glass',
        description : 'The Congolese writer says he was “trying to break the French language” with Broken Glass – a black comedy told by a disgraced teacher without much in the way of full stops or paragraph breaks',
        email : 'adiga037@gmail.com'
    })
    const GirlDragon =new BookModels({
        title: 'Girl With the Dragon Tattoo',
        description : 'Radical journalist Mikael Blomkvist forms an unlikely alliance with troubled young hacker Lisbeth Salander as they follow a trail of murder and malfeasance connected with one of Sweden’s most powerful families in the first novel of the bestselling Millennium trilogy',
        email : 'adiga037@gmail.com'
        
    })
    
    const HarryPotter =new BookModels({
        title: 'Harry Potter and the Goblet of Fire',
        description : 'A generation grew up on Rowling’s all-conquering magical fantasies, but countless adults have also been enthralled by her immersive world. Book four, the first of the doorstoppers, marks the point where the series really takes off. The Triwizard Tournament provides pace and tension',
        email : 'adiga037@gmail.com'
        
    })

    BrokenGlass.save();
    GirlDragon.save();
    HarryPotter.save();

    
  } 
//   seedDataCollection();
