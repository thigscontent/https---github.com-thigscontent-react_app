  const Book = require("../models/Book");
  const bookRepository =require('../repositories/bookRepository');
  
  exports.getAllBooks = async function (req, res) {
    try{
      const books = await bookRepository.findAll();
      res.status(200).json(books);
    }
    catch (error){
        res.status(400).json({ message: error.message })
    }
};
  
  exports.createBook = async function (req, res) {

    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      res.status(201).json({data: {savedBook}})
    } 
    catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
  exports.updateBook = async function (req, res) {
    try {
      const book = await bookRepository.updateById(req.params.id, req.body);
      res.status(200).json(book);
    }
    catch (error){
      res.status(400).json({ message: error.message})
    }
};
  
  exports.deleteBook = async function (req, res) {
    try {
      const deleteBook = await bookRepository.deleteById(req.params.id);
      res.status(200).json({message: "Livro deletado com sucesso"});
  }
  catch (error){
      res.status(400).json({ message: error.message})
  }
};