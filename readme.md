# is-mate [![Build Status Travis](https://travis-ci.org/t1st3/is-mate.svg?branch=master)](https://travis-ci.org/t1st3/is-mate) [![Coverage Status](https://coveralls.io/repos/github/t1st3/is-mate/badge.svg?branch=master)](https://coveralls.io/github/t1st3/is-mate?branch=master)

> Check if the current session runs [Mate desktop](http://mate-desktop.com/).


## Install

```
$ npm install --save is-mate
```


## Usage

```js
const isMate = require('is-mate');

isMate().then(data => {
  console.log(data);
  //=> true or false
});
```


## API

### isMate()

Is a promise.


## License

MIT © [t1st3](http://tiste.org)
