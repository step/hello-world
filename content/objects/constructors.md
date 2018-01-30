---
title: "Constructors"
date: 2018-01-30T11:16:11+05:30
draft: true
categories: ["Objects"]
---

Please read [Why Objects?](/why_objects), [How Bind Works](/how_does_bind_work) and [How To Define Behaviour In An Object](/behaviour_in_an_object) before you proceed any further.


We have now firmly established the need for an automated mechanism to create objects and associate behaviours with it. As mentioned earlier, Javascript has the ability to do so. We achieve this by using a concept called constructors.

#### What is a constructor?

A constructor is simply a mechanism that creates a desired object. You may define what you want to initialise that object with as a part of the constructor. For now, let us keep behaviour aside and look at some examples involving only properties and data.


We have seen an example before to create a square. However, since we weren't using Javascript's mechanism to construct, we wrote it as follows:
{{< highlight javascript >}}
var createSquare=function(length) {
  let square={length:length};
  // keep behaviour aside for now
  return square;
}

var tile=createSquare(10);
{{< / highlight >}}

Now, let us look at how to write this using Javascript's mechanism for dealing with constructors.
{{< highlight javascript >}}
// Square is the constructor here
var Square=function(length) {
  this.length=length;
}

var tile=new Square(10);
console.log(tile);
{{< / highlight >}}
produces

{{< highlight javascript >}}
Square { length: 10 }
{{< / highlight >}}

Immediately, we see a few things.

First, the function is named `Square` with a capital `S` and not `createSquare`. It is convention, not a rule, to capitalise constructors. The constructor `Square` is very similar to the way we defined `createSquare`, but there are some other obvious differences such as the usage of the keyword `this`, no return values and no explicit creation of an object.

The most interesting thing here though is the use of the `new` keyword while creating `tile`.

What exactly is happening here? Let us break it down.

1. `new` first creates an empty object.
2. `new` then binds the function `Square` to the empty object created in step 1.
3. It calls the newly bound function.
4. `Square` now executes with the `this` object set to the empty object from step 1.
5. `new` eventually returns the empty object from step 1 which by now has the property `length` and is thus no longer empty.

Take the time and re-read this as many times in order to understand the process.

#### Behaviour

We have been ignoring talking about behaviour for a while. In order to understand how to wire up behaviour, we have to go over a concept called `prototype`.

But, before that, a small confession.

**Functions are objects!**

In Javascript, functions are objects. At least, they behave like objects. You can set properties on them like you could on any other object. For instance:

{{< highlight javascript >}}
var Square=function(length) {
  this.length=length;
}

Square.colour="green";

console.log(Square);
console.log(Square.colour);
{{< / highlight >}}

produces

{{< highlight javascript >}}
{ [Function: Square] colour: 'green' }
green
{{< / highlight >}}

**OMG!**

What kind of _magic_ is this?!

No magic at all. This has always been true. Functions are objects in Javascript. Which means you can set properties on them like you could on any other object.

Want to set `colour` on a function? Go right ahead. It isn't particularly useful to set a property like that on functions.

However, there is a property that is useful. That property is called `prototype`.


If the `prototype` property is set on a function, then Javascript knows to use it as a template or a blueprint of behaviour when creating objects.

In other words, when you use the keyword `new`, then Javascript looks up the constructor you have provided. If the constructor has the property `prototype`, then it creates the object with the behaviour detailed in that property.

Talking about code is like dancing about architecture. So let us look at an example:

{{< highlight javascript >}}
var Square=function(length) {
  this.length=length;
}

Square.prototype = {
  area:function() {return this.length*this.length}
}

var tile=new Square(10);
console.log(tile.area());
{{< / highlight >}}

produces

{{< highlight javascript >}}
100
{{< / highlight >}}

Works like a charm!

#### Prototype

We've seen `prototype`. However, we need to understand what it is and how it works.

Prototype is a property. Its value is simply an object in itself.

For instance:
{{< highlight javascript >}}
var Square=function(length) {
  this.length=length;
}

Square.prototype={};
Square.prototype.colour="green";
Square.prototype.age=100;
Square.prototype.area=function(){
  return this.length*this.length;
}
console.log(Square.prototype);
{{< / highlight >}}

produces

{{< highlight javascript >}}
{ colour: 'green', age: 100, area: [Function] }
{{< / highlight >}}

You will see that we initialised `Square.prototype` as an empty object here and added some properties to it such as `colour`,`age`, and `area`.

Again, apart from `area`, none of these properties are really useful. Notice, the value of any of `prototype`'s properties can be functions. Just like any other object in Javascript.

We can define the `prototype` object in two different ways:

**Method 1**
{{< highlight javascript >}}
var Square=function(length) {
  this.length=length;
}

Square.prototype.area=function(){
  return this.length*this.length;
}

Square.prototype.perimeter=function(){
  return 4 * this.length;
}

{{< / highlight >}}

Observe closely. There's something interesting going on here. `Square.prototype.area` implies that `Square.prototype` is an object. But we didn't define it. It should have complained.

 So how does this work. Try defining any function in Javascript and try accessing its `prototype` property and you will see that Javascript inserts a `prototype` property by default into functions.

**Method 2**
{{< highlight javascript >}}
var Square=function(length) {
  this.length=length;
}

Square.prototype={
  area:function(){
    return this.length*this.length;
  },
  perimeter:function(){
    return 4 * this.length;
  }
}
{{< / highlight >}}

This method simply defines a fresh object with key value pairs. This `prototype` has two properties `area` and `perimeter`, both of which have functions for values. It is important to note the comma that comes between both properties. Remember, `prorotype` is an object. So when we define its properties as key-value pairs, we have to separate them with a comma.


Both methods are equally valid and any preference is primarily stylistic. The second method is more common.

We will shortly learn another technique that will make it even easier to define these things.