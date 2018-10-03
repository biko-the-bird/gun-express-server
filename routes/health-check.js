module.exports = function on(app){
    app.get(`/health-check`, function(req, res) {
       res.sendStatus(200);
      
    })
}
