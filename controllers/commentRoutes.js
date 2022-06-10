const express = require('express');
const router = express.Router();
const { User, Blog, Comment } = require('../models');

router.get("/", (req, res) => {
    Comment.findAll().then(comments => {
        res.json(comments)
    })
        .catch(err => {
            res.status(500).json({ msg: "an error occurred", err })
        });
});

router.post("/", (req, res) => {
    console.log('it hit the route')
    Comment.create({
        ...req.body,
        UserId: req.session.user.id,
        
    }).then(commentData => {
        console.log('madeit')
        res.json(commentData)
    }).catch(err => {
        console.log(err)
    });
});

module.exports = router;