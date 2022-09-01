const tools = require('../util/tools');

exports.get_root = (req, res) => {
    let date = tools.dateTime()
    let welcome = {
        message: 'Welcome to Pizza Lucé Events API',
        date: date,
        ip: req.header('x-forwarded-for'),
        language: req.header('accept-language'),
        software: req.header('user-agent')
    }

    res.json(welcome)
}