module.exports.set =  (app) => {
    app.get('/', (req, res) => {
        res.send('HELLO FUCKING WORLD!!!');
    });
}