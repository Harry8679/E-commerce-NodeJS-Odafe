const home = (req, res) => {
    res.send('Hello from Controller');
}

const postUser = (req, res) => {
    console.log(req.body);
    res.send('User Post Route');
}

module.exports = { home, postUser };