const fs = require('fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close', () => {
  console.log('close event callback \n');
});

setImmediate(() => console.log('1st setImmediate callback'));
setImmediate(() => {
  console.log('2nd setImmediate callback');
  Promise.resolve().then(() => console.log('Promise callback will be called in between setImmediate'));
  process.nextTick(() => console.log('process.nextTick will be called in between setImmediate'));
});
setImmediate(() => console.log('3rd setImmediate callback \n'));

fs.readFile(__filename, () => console.log('1st file read callback'));
fs.readFile(__filename, () => {
  console.log('2nd file read callback');
  Promise.resolve().then(() => console.log('Promise callback will be called in between file read'));
  process.nextTick(() => console.log('process.nextTick will be called in between file read'));
});
fs.readFile(__filename, () => console.log('3rd file read callback \n'));

setTimeout(() => console.log('1st setTimeout with 0ms time'), 0);
setTimeout(() => {
  console.log('2nd setTimeout with 0ms time');
  Promise.resolve().then(() => console.log('Promise callback will be called in between setTimeout'));
  process.nextTick(() => console.log('process.nextTick will be called in between setTimeout'));
}, 0);
setTimeout(() => console.log('3rd setTimeout with 0ms time \n'), 0);

Promise.resolve().then(() => console.log('1st Promise callback'));
Promise.resolve().then(() => {
  console.log('2nd Promise callback');
  process.nextTick(() =>
    console.log('process.nextTick call in between promises. It will execute after all promises. \n')
  );
});
Promise.resolve().then(() => console.log('3rd Promise callback'));

process.nextTick(() => console.log('process.nextTick call will always be first'));

for (let index = 0; index < 1000000; index++) {}
