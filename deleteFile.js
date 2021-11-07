const fs = require ( 'fs' );

fs.unlink('nums.txt', function (err) {
    err 
    ? console.log ( err )
    : console.log('File deleted!');
}); 