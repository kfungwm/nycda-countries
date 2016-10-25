// normal

var fs = require('fs');


// read the json file, and the
fs.readFile('countries.json', function(error, data) {
  var countryReadable = JSON.parse(data); // data wordt dan uitgelezen en onder de countryReadable

  console.log(countryReadable.name); // wordt de hele file gelezen (alle landen)

//
  for (var i = 0; i < countryReadable.length; i++) {
    if (countryReadable[i].name === process.argv[2]) {
        console.log(countryReadable[i]);
    }
  }
});



// fs.readFile('/etc/passwd', (err.data) => {
//   if (err) throw err;
//   console.log(data);
// });
//
//
//
// fs.readFile('countries.json', (err, data) {
//    if (err) throw err;
//    console.log(data);
//  });
//
//
//
//
//  fs.readFile('countries.json', function(err, data) {
//     console.log(data);
//   });
//
//
//
//
// var fs = require('fs');
// undefined
// > var object;
// undefined
// > fs.readFile('countries.json', function(error, data) {
// ... var string = data.toString();
// ... object = JSON.parse(string);
// ... }
// ... );
// > object



//




//
// // Dynamic
// var fs = require('fs');
//
// fs.readFile('countries.json', function(error, data) {
//   var countryReadable = JSON.parse(data);
//
//   console.log(process.argv);
//
//
//
//   for (var i = 0; i < countryReadable.length; i++) {
//     if (countryReadable[i].name === process.argv[2]) {
//         console.log(countryReadable[i].name);
//         console.log(countryReadable[i].capital);
//     }
//   }
// });
//
//
//
// // ===== Teacher
//
// var fs = require('fs');
//
// fs.readFile('countries.json', function(error, data) {
//   if (error) {
//     throw error;
//   }
//
//   var countryReadable = JSON.parse(data.toString());
//
//   for (var i = 0; i < countryReadable.length; i++) {
//     if (countryReadable[i].name === process.argv[2]) {
//         console.log(countryReadable[i]);
//     }
//   }
// });
