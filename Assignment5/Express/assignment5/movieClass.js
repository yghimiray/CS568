const { ObjectID } = require('mongodb').ObjectId;
const getDB = require('./mongoDb').getDB;

module.exports = class Movie {
    constructor(_id, name, rating, genre) {
        this._id = _id;
        this.name = name;
        this.rating = rating;
        this.genre = genre
    }

    save() {
        return getDB().collection('movies').insertOne(this);
    }

    static listAll() {
        return getDB().collection('movies').find();
    }

    static searchById(_id) {
        return getDB().collection('movies').findOne({ _id: _id});
    }


    update(_id) {
        return getDB().collection('movies').updateOne({ _id: _id }, { $set: { name: this.name, rating: this.rating, genre: this.genre } });
    }

    static deleteById(_id) {
        return getDB().collection('movies').deleteOne({ _id: _id });
    }

};