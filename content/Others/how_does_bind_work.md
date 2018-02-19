---
title: "How does bind work ?"
date: 2018-01-30T11:51:36+05:30
draft: true
---


#### What is `bind`?

The English word [bind](https://www.merriam-webster.com/dictionary/bind) is a verb that means to make secure by tying.

[Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) is a function that can do very useful things. Assuming that you understand the concept of `this` in Javascript, bind is very easy to understand. `bind` simply ties an object to a function, so that the function assumes `this` to refer to the object when it executes.

#### The way `bind` works.

Consider this function:

{{< highlight javascript >}}
const areaOfSquare=function() {
  return this.length * this.length;
}
{{< / highlight >}}

This function doesn't expect any input. Instead, it relies on the `this` object. It expects the `this` object to have the property length defined on it.

If we just call it, then it will try to use the length defined in a global object or where you are calling it from:

{{< highlight javascript >}}
this.length=10;
let squareArea=areaOfSquare();
console.log(squareArea);
{{< / highlight >}}

produces:

{{< highlight javascript >}}
100
{{< / highlight >}}

This "`magic`" returns a valid value, in this case `100` because length has been defined on the global object. `areaOfSquare` tries to figure out what `this` means and uses the global object as `this`.

However, we can do something interesting with bind here.

{{< highlight javascript >}}
var tile={length:10};
var areaOfTile=areaOfSquare.bind(tile);

console.log(areaOfTile());
{{< / highlight >}}

produces:

{{< highlight javascript >}}
100
{{< / highlight >}}

This also works magically! How? The answer lies with bind. `bind` ties the function `areaOfSquare` to the object `tile`. `bind` then returns a new function, which in this case is assigned to `areaOfTile`. When `areaOfTile` is called, `this` refers to `tile` as it has been bound.

So, `bind` simply binds a function to a given object and when the function is called, all references to `this` in that function, will now point to the object.


It is important to remember that `bind` returns a reference to a new function and doesn't change the original function at all.

For instance:

{{< highlight javascript >}}
const areaOfSquare=function() {
  return this.length * this.length;
}

let tile={length:10};
this.length=5;
let areaOfTile=areaOfSquare.bind(tile);

let tileArea=areaOfTile();
let squareArea=areaOfSquare();

console.log(tileArea);
console.log(squareArea);
{{< / highlight >}}

produces

{{< highlight javascript >}}
100
25
{{< / highlight >}}
