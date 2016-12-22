/*
 .-------------------------------------------------------------.
'------..-------------..----------..----------..----------..--.|
|       \\            ||          ||          ||          ||  ||
|        \\           ||          ||          ||          ||  ||
|    ..   ||  _    _  ||    _   _ || _    _   ||    _    _||  ||
|    ||   || //   //  ||   //  // ||//   //   ||   //   //|| /||
|_.------"''----------''----------''----------''----------''--'|
 |)|      |       |       |       |    |      mga|      ||==|  |
 | |      |  _-_  |       |       |    |  .-.    |      ||==| C|
 | |  __  |.'.-.' |   _   |   _   |    |.'.-.'.  |  __  | "__=='
 '---------'|( )|'----------------------'|( )|'----------""
             '-'                          '-'
 - ASCII art from: http://www.ascii-code.com/ascii-art/vehicles/busses.php (Martin Atkins - mart.atkins@bigfoot.com)
*/

module.exports = function createTeloletMiddleware(teloletText) {
    return function teloletMiddleware(req, res, next) {
        res.setHeader('X-Om-Telolet-Om', (teloletText || 'Telolet'));
        next();
    };
};
