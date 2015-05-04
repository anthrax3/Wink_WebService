
exports.home = function ( req, res ) {
    res.send( "Welcome to wink!", 200 );
};

exports.default = function ( req, res ) {
    res.send( "Page Not Found", 404 );
};
