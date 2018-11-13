const db = require('../models');
const Comment = db.Comment;

const index = (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) throw err;
        res.json(comment);
    });
};

const show = (req, res) => {
    const { id } = req.params;
    Comment.findById(id, (err, comment) => {
        if (err) res.send({error: true, message: `No comment with id ${id}`});
        res.json(comment)
    });
};

const create = (req, res) => {
    Comments.create(req.body, (err, newComment) => {
        if (err) throw err;
        res.json(newComment);
    });
};

const update = (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedComment) => {
        if (err) throw err;
        res.json(updatedComment)
    });
};

const destroy = (req, res) => {
    Comment.finByIdAndDelete(req.params.id, (err, deletedContact) => {
        if (err) throw err;
        res.json({ msg: 'Success' });
    });
};

module.exports = {
    index, 
    show,
    create, 
    update,
    destroy,
}




// function create(req, res) {
//     //insert some code here
// }

// function update(req, res) {
//     console.log('****', req.body);
//     Comment.findByIdAndUpdate(req.params.comment_id,
//         {$set: req.body}, function(err, comment) {
//         if (err) res.send(err);
//         else res.json(comment); 
//     });
// }

// function destroy(req, res) {
//     //optional insert some code here
// }

