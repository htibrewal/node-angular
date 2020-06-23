const router = require('express').Router();

const user = {
    username: 'test@gmail.com',
    password: 'test@123'
}

router.post('/', (req, res) => {
    const {email, password} = req.body;

    if (email === user.username) {

        if (password === user.password) {
            res.status(200).send({
                status: true,
                message: 'Login successful',
                data: {
                    user
                }
            });
        } else {
            res.status(200).send({
                status: false,
                message: 'Incorrect password entered'
            });
        }
    } else {
        res.status(200).send({
            status: false,
            message: 'Username not found'
        });
    }
})

module.exports = router;