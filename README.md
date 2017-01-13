[![Build Status](https://travis-ci.org/k-kuwahara/ja-greetings.svg?branch=master)](https://travis-ci.org/k-kuwahara/ja-greetings)

# ja-greetings

```
_______________
            あ
      今  おけ
    よ年  めま
    ろも  でし
    し    とて
  おく    う
  願    ご
  い    ざ
  し    い
  ま    ま
  す    す
  。    。
---------------
```

`ja-greetings` is a cli tool that displays the greetings of each season in Japan.


## Install
・local install

```
$ npm i ja-greetings
```

・global install

```
$ npm i ja-greetings -g
```
※The corresponding version of nodejs is version 6 or higher!


## Usage

Please add the following to `package.json`.
```
…
  "scripts": {
    "greet": "ja-greetings"
  },
…
```

Just run the command! (the following is an example)
```
$ npm run greet new
```

If you have globally installed, you can execute with the following command.

```
$ ja-greetings new
```


__Optios:__
```
  -d, --dialect   Greeting from each prefecture dialect
  -s, --surround  Decoration of the surround
  -h, --help      Show help
```


__Dialects:__
```
kyoto osaka okinawa
```

__Surrounds:__
```
no        Do not surround text
w-star    ☆
b-star    ★
asterisk  ＊
slash     top: /￣, bottom: ＿/
```

## License
[MIT](https://github.com/k-kuwahara/ja-greetings/blob/master/LICENSE)


## Others
I'm waiting for you at any time, including code reviews, bug reports, feature additions, questions and more!
