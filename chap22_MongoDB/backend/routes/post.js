const express = require('express');
const router = express.Router();

// const printInfo = (req, res) => {
//     req.body = {
//         method: req.method,
//         path: `/api${req.path}`,
//         params: req.params,
//     };
//     res.send(req.body);
// };

// router.get('/post', printInfo);
// router.post('/post', printInfo);
// router.get('/post/:id', printInfo);
// router.delete('/post/:id', printInfo);
// router.put('/post/:id', printInfo);
// router.patch('/post/:id', printInfo);

const Post = require('../schemas/post');

/* write */
router.post('/', async (req, res) => {
    /* POST /api/post
    {
        title: "제목",
        body: "내용",
        tags: ["태그1", "태그2"]
    }
    */
    console.log(req.body);
    const { title, body, tags } = req.body;
    console.log(title, body, tags);
    try {
        const newPost = new Post({
            title,
            body,
            tags,
        });
        const created = await newPost.save(); // save()함수를 실행시켜 데이터 베이스에 저장
        console.log(created);
    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;
