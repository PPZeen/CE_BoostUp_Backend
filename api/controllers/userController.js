const mongoose = require('mongoose');
const users = mongoose.model('users');

exports.list_all_users = (req, res) => {
    users.find({}, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.create_a_user = (req, res) => {
    const newUser = new users(req.body);
    newUser.save((err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.read_a_user = (req, res) => {
    users.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.update_a_user = (req, res) => {
    users.findByIdAndUpdate({_id: req.params.userId}, req.body, {new: true},
        (err, user) => {
            if (err) {res.send(err); console.log('Error.')}
            res.json(user);
        }
    );
};

exports.delete_a_user = (req, res) => {
    users.deleteOne({_id: req.params.userId}, (err, user) => {
        if (err) res.send(err);
        res.json({
            "message": `User with ID = ${req.params.userId} is deleted`
        });
    });
};