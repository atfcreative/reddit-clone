const db = require('./models/index')
const Comment = db.Comment;
const TextPost = db.TextPost;

//seed data
var commentsData = [{
    content: 'This is the first comment',
    votes: 22
}, {
    content: 'This is the second comment',
    votes: 5
}, {
    content: 'This is the third comment',
    votes: 69
}, {
    content: 'This is the fourth comment',
    votes: 420
}];

    Comment.deleteMany({}, function(err, res) {
    if(err) {
        console.log('mmmrrrrrpppt remove does not compute: ', err);
        return;
    }
    console.log('All Comments removed buddy ;)');

    Comment.create(commentsData, function(err, newComment) {
        if (err) {
            console.log('mmmrrrrrpppt create does not compute: ', err);
            return;
        }
        console.log('Created Success', newComment.length, 'comments');
        console.log(newComment);
    
    TextPost.deleteMany({}, function(err, res) {
        if (err) {
            console.log('mmmrrrppp Errrooor removing text post', err);
            return;
        }
    console.log('removed all text posts');
    
    TextPost.create([{
        title: 'Title',
        content: 'Content',
        thumbnail_image_url: 'https://picsum.photos/200/300',
        votes: 12,
        comments: [Comment[0], Comment[1]]
    }, {
        title: 'Moby Dick',
        content: 'The White Whale',
        thumbnail_image_url: 'https://picsum.photos/200/300',
        votes: 50,
        comments: [Comment[0], Comment[1]]
    }], function(err, posts) {
        if (err) {
            console.log('mmmrrppp errrror creating text post', err);
            return;
        }
        console.log('created', posts.length, 'posts');
        console.log(posts);
        return;
        
            });
        });
    });
});

   

