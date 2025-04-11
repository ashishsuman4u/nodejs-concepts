# Event Loop in NodeJs

Event loop in NodeJs is different than Eventloop of browser. Event loop in NodeJs resides in LibUV library of NodeJs framework.

![Eventloop in Action.](./eventloop.svg)

## Output

```
process.nextTick call will always be first
1st Promise callback
2nd Promise callback
3rd Promise callback
process.nextTick call in between promises. It will execute after all promises.

1st setTimeout with 0ms time
2nd setTimeout with 0ms time
process.nextTick will be called in between setTimeout
Promise callback will be called in between setTimeout
3rd setTimeout with 0ms time

1st setImmediate callback
2nd setImmediate callback
process.nextTick will be called in between setImmediate
Promise callback will be called in between setImmediate
3rd setImmediate callback

close event callback

1st file read callback
2nd file read callback
process.nextTick will be called in between file read
Promise callback will be called in between file read
3rd file read callback
```
