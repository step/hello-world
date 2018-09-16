---
title: "Why Objects"
date: 2018-01-29T22:58:16+05:30
weight: 11
---

#### The world as it is today

Let us look at how the world exists without objects.

John and Kavita are two people who are writing some code.


John wants to calculate the area of a square. So he writes this fancy function.

```javascript
var areaOfSquare=function(square) {
  return square.length * square.length;
};

exports.areaOfSquare=areaOfSquare;
```

You can see that his function expects an object that has the length property in it. John being kind, shares his code by exporting his function.


Kavita comes along, finds that this is exactly what she needs and uses his function.

```javascript
let square={length:10};
console.log(areaOfSquare(square));

let tile={lenght:20};
console.log(areaOfSquare(tile));
```

Kavita is excited and runs her code, only to find that while the first square's area is calculated correctly, the second square, indicated by the variable tile, produces `NaN`.

```javascript
100
NaN
```

Observe closely and you will find that Kavita made a spelling mistake in the definition of tile and used `lenght` instead of `length`. Kavita quickly realises that there needs to be a consistent way of creating a square object. The possibility of making typing mistakes is high.

She complains to John about this problem. But being more than just someone who complains, she comes up with a solution.

She writes the following function.

```javascript
var createSquare=function(length) {
  return {length:length};
}

exports.createSquare=createSquare;
```

This is beautiful! It works! Every time one wants to make a square object, they call this function. Kavita is happy. For now. After a while, she discovers something interesting. She was writing some code and something strange happened. Here's what she wrote.


```javascript
var tile=createSquare(20);
var chocolate=createSquare(10);

var squares=[tile,chocolate];

console.log("The area of tile is",areaOfSquare(squares));
```

Observe this very closely. The `areaOfSquare` function expects an object whose `length` property is defined. `squares` is a list that has a `length` property.

Kavita wanted to pass `tile` to `areaOfSquare`, but she mistakenly passed `squares`. This worked because `squares` is a list and has the property length. Now this is a problem, because any object that has the property `length` can be passed to areaOfSquare and will be calculated. As long as that property is a number, the result will even seem sensible.

John and Kavita realise that one of the problems of functions is that when they operate on data, they expect the data to come from the outside. This is not safe. Anybody can pass anything.

Instead, what if there were a way where the data and the functions that operated on it stayed together. Even better, what if that function knew how to get the data it needed instead of relying on people to pass it the data?

#### Can bind help?

Please read about [how bind works]({{< ref "others/how_does_bind_work.md" >}}) if you haven't already. It is important and necessary for the rest of this section.

Kavita and John are still not sure how to fix the problem of a method expecting its arguments to have the property `length`. Having discovered `bind` however, they decide to try something.

Consider a new definition of `createSquare` now.

```javascript
const areaOfSquare=function() {
  return this.length * this.length;
}
```


```javascript
let tile=createSquare(10);
let areaOfTile=areaOfSquare.bind(tile);

console.log(areaOfTile());
```

produces

```javascript
100
```

Yay! This works. Or does it? Let us see.

Kavita can still bind a list to `areaOfSquare`.

```javascript
let numbers=[1,2,3];

let areaOfNumbers=areaOfSquare.bind(numbers);
console.log(areaOfNumbers());
```

produces

```javascript
9
```

Nothing prevents us from doing this. Which means, the behaviour `areaOfSquare` still doesn't have anything to do with a square. It simply works on a property called `length`.

This problem simply can't be solved unless we somehow ensure that the function `areaOfSquare` knows only about a square. Importantly, this bind should happen automatically.


#### So, why should data and behaviour be bound together?

Not having a system that automatically ties data and behaviour does the following:

* Expects us to know how to define data, which might cause bugs.
  * `{length:10}` vs `{lenght:10}`
* Allows unrelated behaviour to be applied on unrelated data
  * calling `areaOfSquare` with a list
* Forces us to manually tie data and behaviour, thus increasing the possibility of bugs.
  * using `bind` or some other such method
* Even manually binding doesn't solve problems
  * Every new instance of an object has to be bound again to the behaviour desired.


It would be good to read how to [define behaviour in an object]({{< ref "behaviour_in_an_object.md" >}}) next.