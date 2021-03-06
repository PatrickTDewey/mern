const Joke = require("../models/joke.model")
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((jokes) => res.json({ jokes: jokes }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json({ joke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.randomJoke = (req, res) => {
    Joke.aggregate([{$sample: {size: 1}}])
      .then((randomJ) => res.json({randomJoke: randomJ}))
      .catch(e => res.json({message:"Something went wrong", error: e}))
}
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ user: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}