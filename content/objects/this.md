---
title: "What is this ?"
date: 2018-01-30T11:25:03+05:30
weight: 14
---

> _But `this` is preposterous!<br/>Yes, it is._

#### What is `this`?

`this` is a reference to some object. What does that mean? It means that `this` is not something that has an intrinsic value.

Consider
``` javascript
let a=5;
```

`a=5` in the above example tells us that `a` has a value of `5`. Unlike `a`, `this` doesn't have a value of its own. Instead, it is simply a reference to some other object in memory.

#### The global object

The best way to understand `this` is to simply try a few things out. Open a node repl and simply type in `this` and press enter. What do you get? You should get a screenful of strange things. These strange things are key value pairs, much like any other object. You might get something like this

![global object](/images/global_object.png)

_Note: Colours might be different/absent based on your settings_

The above screenshot represents what is called the global object. When you typed `this` into your node repl, it referred to this global object which currently holds all the context. What context, you might ask?

Let us see.

Try this:
``` javascript
this.hero="goldie";
this.villain="silvery";

console.log(this.hero,"is greater than",this.villain);
```

produces

``` javascript
goldie is greater than silvery
```

Two things to note here.

1. When you typed in `this.hero="goldie"`, it didn't complain about `this` not being defined. Which means, `this` was already defined.
1. If `this` didn't hold special meaning, you would think that this was just any other object.

Now let us try this:
``` javascript
console.log(hero,"is greater than",villain);
```

produces

``` javascript
goldie is greater than silvery
```

What sorcery is this?! We defined `this.hero` and `this.villain`. How did `hero` and `villain` get defined. After all, we put attributes into some object called `this`. How do `hero` and `villain` automatically get defined?

We need to understand that there is a global object that node uses. This global object is referenced by `this`. Whenever we assign something to a variable, the variable gets defined within the global object.

Let us try it the other way around

``` javascript
sidekick="bronzy";
console.log(this.sidekick,"is also better than the villain");
```

produces

``` javascript
bronzy is also better than the villain
```

This means, that the association is both ways. When we define something on `this` it becomes globally available and when we define something globally, it becomes an attribute in the global object.

#### What else is in the global object?

The global object contains references to several things apart from variables that we define globally. We have all used `console.log`. If you look at `console.log` and didn't know that `console` was something special in Javascript, you would think that `console` is an object.

In fact, `console` is an object. Given that we never defined it, then it is likely that `console` is defined in the global object. Let us see.

``` javascript
this.console
```
gives us

``` javascript
Console {
  log: [Function: bound log],
  info: [Function: bound log],
  warn: [Function: bound warn],
  error: [Function: bound warn],
  dir: [Function: bound dir],
  time: [Function: bound time],
  timeEnd: [Function: bound timeEnd],
  trace: [Function: bound trace],
  assert: [Function: bound assert],
  Console: [Function: Console] }
```

Further, when we do the following, see what happens:

``` javascript
this.console.log("Hello world");
```

produces

``` javascript
Hello World
```

Not only is there a reference named `this.console.log`, but it works just like `console.log`. It works that way because it *is* the same.

It is critical to note that `this.something` and `something` are only equivalent when `this` is the global object. That means, node will not do a lookup of variables, functions etc unless `this` is the global object.

``` javascript
var Person=function(name) {
  this.name=name;
}

Person.prototype.jump=function() {
  console.log(name,"is jumping");
}

Person.prototype.jumpTwice=function() {
  jump();
  jump();
}

let kavita=new Person("kavita");
kavita.jumpTwice();
```

results in

``` javascript
ReferenceError: jump is not defined
```

Why so? If you look at it, in the `jumpTwice` method, there is a reference to `jump`. The `this` object when `jumpTwice` is called is in fact the Person object and not the global object. Does javascript automatically know to call `kavita.jump()`? The answer is that it does not. It only does a lookup on the global object. It doesn't do lookup any other object. `jump` will be called only if it is defined in the global context. But that won't work, since we have a context. We don't want the whole world to jump when jump is called. We want only Kavita to jump.

To make this work, we need to understand calling contexts.


#### Calling context

To understand calling context, one must have read about [why objects]({{< ref "why_objects.md" >}}) and [constructors]({{< ref "constructors.md" >}}). So brush up on that if you haven't already.

Let us briefly go back to our `Square` example.

``` javascript
var Square=function(length) {
  this.length=length;
}

Square.prototype = {
  area:function() {
    return this.length*this.length
  }
}

var tile=new Square(10);
var areaOfTile=tile.area();
```

We all understand that when `new Square` is called, then a new empty object is bound to the Square function and is then called. At this point, when `this.length=length;` is executed, `this` refers to the empty object.

Similarly, when `tile.area()` is called, Javascript similarly changes `this` to refer to the `tile` object and then calls `area`. So all references to `this` in the `area` method are simply references to what was placed before the `area` function.

``` javascript
tile.area();  // Calling context in area is `tile`
chocolate.perimeter(); // Calling context in perimeter is `chocolate`
kavita.depositIntoAccount(200); // Calling context in depositIntoAccount is `kavita`
```

A calling context is simply the context that Javascript has called a function with. In the global context, this is the global object. In other cases, it is mostly the object to which that function belongs. Sometimes this is not the case as we will see later. But for the most part, as shown above the calling context is set to whoever/whatever made that call.

A picture is worth a thousand words, so here:

![Calling Context](/images/calling_context.png)

_Note: The above image was generated using [Python Tutor](http://www.pythontutor.com/live.html#mode=edit)_

As the image above illustrates, when we execute the code above, and when we eventually get to line number 7 that reads `return this.length * this.length`, we can see that `this` points to the same object that `tile` points to. Note the blue arrow and gray arrow that lead from `this` and `tile` respectively.

I would highly recommend trying [Python Tutor](http://www.pythontutor.com/live.html#mode=edit) for yourself. It will definitely help you grasp these concepts better.