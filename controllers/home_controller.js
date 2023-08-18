module.exports.home = function(req, res){
    res.end('<h1>Express is up and Running</h1>');
};

module.exports.login = function(req, res){
    res.end('<p>this is login page</p>');
};