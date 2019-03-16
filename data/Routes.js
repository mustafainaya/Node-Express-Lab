const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const posts = await db.find(req.query);
		res.status(200).json(posts);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'The posts information could not be retrieved.' });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const post = await db.findById(req.params.id);
		console.log('find by id', req.params.id);

		if (post) {
			res.status(200).json(post);
		} else {
			res.status(404).json({ message: 'The post with the specified ID does not exist.' });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'The post information could not be retrieved.' });
	}
});
router.post('/', async (req, res) => {
	try {
		const post = await Posts.add(req.body);
		res.status(201).json(post);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Error adding the post'
		});
	}
});
router.delete('/:id', async (req, res) => {
	try {
		const count = await post.remove(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: 'The post has been deleted' });
		} else {
			res.status(404).json({ message: 'The post could not be found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Error removing the post'
		});
	}
});

module.exports = router;
