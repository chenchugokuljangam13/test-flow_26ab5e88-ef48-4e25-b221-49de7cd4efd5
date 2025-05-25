const express = require('express');
const { Post, UserPost } = require('../db/models');

const router = express.Router();

/**
 * Create a new blog post
 * req.body is expected to contain {text: required(string), tags: optional(Array<string>)}
 */
router.post('/', async (req, res, next) => {
  try {
    // Validation
    if (!req.user) {
      return res.sendStatus(401);
    }

    const { text, tags } = req.body;

    if (!text) {
      return res
        .status(400)
        .json({ error: 'Must provide text for the new post' });
    }

    // Create new post
    const values = {
      text,
    };
    if (tags) {
      values.tags = tags.join(',');
    }
    const post = await Post.create(values);
    await UserPost.create({
      userId: req.user.id,
      postId: post.id,
    });

    res.json({ post });
  } catch (error) {
    next(error);
  }
});

/*
  NEWLY ADDED FUNCTION
  This function is find the posts of the authors according to specified field
  req.query is expected to contain {authorIds: required(string), sortBy: optional(string), direction: optional(string)}
*/
router.get('/', async (req, res, next) => {
  try {
    if(!req.user) {
      return res.sendStatus(401);
    }

    const sortByList = ['id', 'likes', 'reads', 'popularity'];
    const directionList = ['asc', 'desc'];

    let {authorIds, sortBy, direction} = req.query;

    if(!sortBy) {
      sortBy = "id";
    } else if(!sortByList.includes(sortBy)) {
      return res.status(500).send({
        message: `${sortBy} filter is not allowed.`
      });
    }

    if(!direction) {
      direction = "asc"
    } else if(!directionList.includes(direction)) {
      return res.status(500).send({
        message: `${direction} direction is not allowed.`
      });
    }

    authorIds = authorIds.split(",");
    authorIds = authorIds.map(Number);

    let posts = await Post.getPostsByUserIds(authorIds, sortBy, direction);

    posts = posts.map((post) => {
      // console.log(post);
      return {...post , "tags": post.tags.split(",")};
      // return post;
    });

    res.status(200).send({
      posts
    })

  } catch (error) {
    next(error);
  }
})

module.exports = router;
