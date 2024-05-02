const Book = require("../models/Book");

class BookRepository {
  async create(userData){
    const book = new Book(userData);
    await book.save();
    return book;
  }
  
  async findAll() {
    return Book.find();
  }
  
  async updateById(id, bookData) {
      return Book.findByIdAndUpdate(id, bookData, { new: true })
  }

  async deleteById(id) {
        return Book.findByIdAndDelete(id)
    }
}
module.exports = new BookRepository();
