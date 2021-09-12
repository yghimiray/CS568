const Movie = require('./movieClass');

exports.save = async (req,res,next) =>{
try{
    const movie = req.body;
    // res.json({name: "OK"})
    res.status(200).json(await new Movie(movie._id,movie.name, movie.rating, movie.genre).save())
}catch(error){
    next(error);
}
}

exports.listAll = async (req,res,next) =>{
    try{
        res.status(200).json(await Movie.listAll().toArray());
    }catch(error){
        next(error);
    }
    }

exports.searchById = async (req,res,next)=>{
    try{
        res.status(200).json(await Movie.searchById(req.params._id))
    }catch(error){
        next(error)
    }
}


        
exports.update = async (req,res,next) =>{
    try{
        const _id = req.params._id;
        const movie = req.body;
        const updatedMovie = new Movie(_id, movie.name, movie.rating, movie.genre);
        res.status(200).json(await updatedMovie.update(_id));
    }catch(error){
        next(error);
    }
    };


    
exports.deleteById = async (req,res,next) =>{
    try{
        await Movie.deleteById(req.params._id)
        console.log("Deleted Successfully")
        res.status(200).end();
    }catch(error){
        next(error);
    }
    };