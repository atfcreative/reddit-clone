const db = require('../models');
const TextPost = db.TextPost;

const index = (req, res) => {
    TextPost.find({}, (err, posts) => {
        if (err) throw err;
        res.json(posts);
        console.log('seeded posts are:', posts);
    });
};

const show = (req, res) => {
    const { id } = req.params;
    TextPost.findById(id, (err, TextPost) => {
        if (err) res.send({error: true, message: `No post with id ${id}`});
        res.json(TextPost)
    });
};

const create = (req, res) => {
    TextPost.create(req.body, (err, newTextPost) => {
        if (err) throw err;
        res.json(newTextPost);
    });
};

const update = (req, res) => {
    TextPost.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedTextPost) => {
        if (err) throw err;
        res.json(updatedTextPost)
    });
};

const destroy = (req, res) => {
    TextPost.finByIdAndDelete(req.params.id, (err, deletedTextPost) => {
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

// function index(req, res) {
//     TextPost.find({}, function(err, textPosts) {
//         if (err) res.send(err);
//         else res.json(textPosts);
//     });
// }

// function create(req, res) {
//     //insert some code here
// }

// function show(req, res) {
//     //insert some code here
// }

// function update(req, res) {
//     //insert some code here
// }

// function destroy(req, res) {
//     //optional insert some code here
// }

// module.exports.index = index;
// module.exports.create = create;
// module.exports.show = show;
// module.exports.update = update;
// module.exports.destroy = destroy;