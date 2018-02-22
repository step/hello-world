---
title: "Defining Behaviour In An Object"
date: 2018-01-30T11:13:35+05:30
draft: true
weight: 12
---

If you have read the post [Why Objects?](/why_objects), then you will understand the need for tying data and behaviour together. If you haven't read it, please do so before you proceed any further.

Kavita and John have understood that it is necessary to tie data and behaviour together. One manner of doing it is to define the behaviour when you create the object.

``` javascript
var areaOfSquare=function() {
  return this.length * this.length;
}

var createSquare=function(length) {
  let square={length:length}
  square.area=areaOfSquare;
  return square;
}

exports.createSquare=createSquare;
```

This can be used very easily now.

``` javascript
var tile=createSquare(10);
console.log(tile.area());

var chocolate=createSquare(2);
console.log(chocolate.area());

var squares=[tile,chocolate];

var areas=squares.map((square) => square.area());

console.log(areas);
```

As you can see, this cleans things up considerably. However, observe that we had to manually associate the object's `area` property with the function `areaOfSquare` in `createSquare`. Also, we had to manually create an empty object `square` and associate the `length` property that way as well.


#### Problems with this approach

This is alright when there is just one property and one function. But if we had many, which is often the case, this approach has the same problem as with all manual wiring scenarios. You can easily cause a typing mistake.


For example:
``` javascript
var addSong=function(song) {
  this.songs.push(song);
}

var totalPlayTime=function() {
  return this.songs.reduce((playTime,song) => playTime+song.length);
}

var removeSong=function(song) {
  // code to remove song
}

var shuffle=function() {
  // code to shuffle
}

var createPlaylist=function() {
  let playList={songs:[]};
  playList.addSong=addSong;
  playList.totalPlaytime=totalPlayTime;
  playList.removeSong=removesong;
  playList.shuffle=shuffle;
}
```

See if you can spot any problems in the example above. There's a very subtle problem that has serious consequences. Look closely.

----

Another disadvantage is that behaviours are now listed as properties. Consider the prior example of creating squares.


``` javascript
var tile=createSquare(10);
console.log(tile);
```

produces

``` javascript
{ length: 10, area: [Function: areaOfSquare] }
```

While this doesn't directly affect us, it exposes more than it needs to. For instance, one now knows that the original function that the `area` property is bound to is `areaOfSquare` and they might try to access that function directly.

We all know you have kidneys, hearts and other organs, but if anybody other than you had access to it, a lot of havoc can occur. It helps to prevent people from using functions in a manner other than advertised or recommended.

#### What do we need?

It would be helpful if the language had a mechanism where we could automatically do the following:

* Automatically create a new object and use `this` to refer to that object
* Separate properties from behaviour and not list behaviour as properties.
* Automatically wire function names up to the desired behaviour name without having to explicitly mention it.

It turns out that Javascript does allow us to do this!

Read all about it under [constructors]({{< ref "constructors.md" >}}).

