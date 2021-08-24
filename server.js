'use strict';




const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const server = express();
server.use(cors()); 

mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true, useUnifiedTopology: true}); 


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})

/////////Schema____________________________ 

const BookSaddam = new mongoose.Schema({
    title : String ,
    description :String ,
    email:String ,
    statues: String ,
  });


  // Model___________________________________________ 

  const book = mongoose.model('book', BookSaddam); ////book : collection Name / Book saddam : sc name  comile sc with model 

  function seedDataCollection() {
      
    const BrokenGlass =new book({  /// follow model name (book)
        title: 'Broken Glass',
        description : 'The Congolese writer says he was “trying to break the French language” with Broken Glass – a black comedy told by a disgraced teacher without much in the way of full stops or paragraph breaks',
        email : 'adiga037@gmail.com',
        statues : 'avalibel' 
    })
    const GirlDragon =new book({
        title: 'Girl With the Dragon Tattoo',
        description : 'Radical journalist Mikael Blomkvist forms an unlikely alliance with troubled young hacker Lisbeth Salander as they follow a trail of murder and malfeasance connected with one of Sweden’s most powerful families in the first novel of the bestselling Millennium trilogy',
        email : 'adiga037@gmail.com',
        statues : 'avalibel' 
        
    })
    
    const HarryPotter =new book({
        title: 'Harry Potter and the Goblet of Fire',
        description : 'A generation grew up on Rowling’s all-conquering magical fantasies, but countless adults have also been enthralled by her immersive world. Book four, the first of the doorstoppers, marks the point where the series really takes off. The Triwizard Tournament provides pace and tension',
        email : 'adiga037@gmail.com',
        statues : 'avalibel' 
        
    })


    const TheDayYouBegin =new book({
        
        title: 'The Day You Begin',

        description : 'National Book Award winner Jacqueline Woodson and two-time Pura Belpré Illustrator Award winner Rafael López have teamed up to create a poignant, yet heartening book about finding courage to connect, even when you feel scared and alone.',
    

        email : 'areej.hossein@gmail.com',
        
        statues : 'avalibel' 
        
    })

    BrokenGlass.save();
    GirlDragon.save();
    HarryPotter.save();
    TheDayYouBegin.save();
    
  } 
//   seedDataCollection(); // npm start only one time 

//////////////////////////////////////////////////////// 

// localhost:3001/books?email=adiga037@gmail.com    // same time use searh qery same idea 

server.get('/books',booksHandler);

function booksHandler(req,res) {
    
    console.log('inside book func')

    let searchEmail = req.query.email;
    // console.log(searchEmail);
    book.find({email:searchEmail},function(err,bookData){ //// save data in bookData if no err 
        if(err) {
            console.log('error in getting the data')
        } else {
            console.log('hello')
            console.log(bookData);
            res.send(bookData) 
        }
    })
}
