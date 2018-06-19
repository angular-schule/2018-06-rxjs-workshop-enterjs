function connect1(callback) {
  setTimeout(() => callback(), 2000);
}

function read1(callback) {
  setTimeout(() => callback(), 2000);
}

function close1(callback) {
  setTimeout(() => callback(), 2000);
}

/**********************************/

connect1((err, value) => {
  console.log('Connected! :-)');
  read1((err2, value) => {
    console.log('Read! :-/');

    close1((err3, value) => {
      console.log('Endlich :-(')
    });
  })
});

