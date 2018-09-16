---
title: "Patterns"
date: 2018-01-30T11:59:56+05:30
weight: 32
---

#### Text based patterns

The aim of this exercise is to develop a library that can generate text based geometric patterns. There are several problems in this exercise. Do them one by one. As you attempt each, you might realise better ways of solving these.

_Do not reinvent unnecessary wheels_

**1. Filled Rectangle**

Generate a filled rectangle of MxN dimension. Additionally the user should be able to specify the character used to fill the rectangle.
``` js
// 1 x 1, *
*

// 2 x 1, *
**

// 1 x 2, +
+
+

// 2 x 2, -
--
--

// 20 x 7, A
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAA
```

----

**2. Hollow Rectangle**

Generate a hollow rectangle of MxN dimension. Additionally the user should be able to specify the character that outlines the rectangle.

``` js
// 1 x 1, *
*

// 2 x 1, *
**

// 1 x 2, +
+
+

// 2 x 2, -
--
--

// 3 x 3, *
***
* *
***

// 20 x 7, +
++++++++++++++++++++
+                  +
+                  +
+                  +
+                  +
+                  +
++++++++++++++++++++
```
----

**3. Cyclical Lines**

Generate N lines of length M. The text used to generate the line should be cycled through a list of characters

``` js
// 3 x 1,+,-
+
-
+

// 2 x 4,+,-
++++
----

// 3 x 3, +,-,*
+++
---
***

// 5 x 3, +,-,*
+++
---
***
+++
---

// 4 x 1, +
+
+
+
+

```

----
**4. Left Aligned Triangle**

Generate a left-aligned right angled triangle of size N as follows:

``` js
// 2,-
-
--

// 3,+
+
++
+++

// 6, *
*
**
***
****
*****
******

```
----
**5. Right Aligned Triangle**

Generate a right-aligned right angled triangle of size N as follows:

``` js
// 2,-(the empty line below is simply to differentiate. Your output should not contain it)

 -
--

// 3,+(the empty line below is simply to differentiate. Your output should not contain it)

  +
 ++
+++

// 6, * (the empty line below is simply to differentiate. Your output should not contain it)

     *
    **
   ***
  ****
 *****
******

```

----
**6. Left Aligned Hollow Triangle**

Generate a left-aligned right angled hollow triangle of size N as follows:

``` js
// 2,-
-
--

// 3,+
+
++
+++

// 4,+
+
++
+ +
++++

// 6, *
*
**
* *
*  *
*   *
******

```
----
**7. Right Aligned Hollow Triangle**

Generate a right-aligned right angled hollow triangle of size N as follows:

``` js
// 2,-(the empty line below is simply to differentiate. Your output should not contain it)

 -
--

// 3,+(the empty line below is simply to differentiate. Your output should not contain it)

  +
 ++
+++

// 4,+(the empty line below is simply to differentiate. Your output should not contain it)

   +
  ++
 + +
++++

// 6, * (the empty line below is simply to differentiate. Your output should not contain it)

     *
    **
   * *
  *  *
 *   *
******

```
----
**8. Diamond**

Generate a diamond of size N and the specified character. N specifies the widest part of the diamond(the middle line). N needs to be odd. If an even number is supplied, round it *up* to the nearest odd.

``` js
// 3,+
 +
+++
 +

// 5,*
  *
 ***
*****
 ***
  *

// 4,* (round up to 5)
  *
 ***
*****
 ***
  *

```
----
**9. Hollow Diamond**

Generate a hollow diamond of size N and the specified character. N specifies the widest part of the diamond(the middle line). N needs to be odd. If an even number is supplied, round it *up* to the nearest odd.

``` js
// 3,+
 +
+ +
 +

// 5,*
  *
 * *
*   *
 * *
  *

// 4,* (round up to 5)
  *
 * *
*   *
 * *
  *

```
----
**10. Angled Hollow Diamond**

Generate a hollow diamond whose edges are sloped. Unlike the previous diamond examples, this diamond only uses the character specified on the tips of the diamond.

``` js
// 3,-
 -
- -
 -

// 5,+
  +
 / \
+   +
 \ /
  +

// 7,*
   *
  / \
 /   \
*     *
 \   /
  \ /
   *

```
----

