---
title: "Function Guidelines"
date: 2018-01-30T11:38:43+05:30
draft: true
---

Here are some guidelines that will help you write better functions. If you follow them that is. Just reading doesn't guarantee anything. :smiling_imp:

----

**Responsibility**

* A function should do only one thing and do it well :star: :star: :star:


**Naming your functions**

* Write the usage first, define later.
* Verbs make better names than nouns.
* Take your time to name the function well. Especially the first time.
* Think about the order of your arguments
* Use interrogatives as prefixes when function answers a question.
    * `is`, `does`, `has`, `are` etc are all useful prefixes

----

**Function length**

* Try not to exceed a critical number of lines per function. I find 10 to be my limit. :star: :star: :star:
* Do not "write now, refactor later".
* If a function is already written, ask yourself if you really need to add another line of code there.

----

**Return values**

* A function should always return something.
* If the function doesn't have anything meaningful to return, return a truthy/falsy value.
* Do not return inconsistent types.
    * Do not return strings in a function that is supposed to return a number

----

**Arguments**

* Prioritise your most needed arguments to the left hand side.
* Optional arguments should always occur at the end of an argument list.
* Non-primitives are always passed by reference.

----
