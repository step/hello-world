---
title: "Match the following"
date: 2018-01-30T11:57:08+05:30
draft: true
weight: 31
---

---
title: Match The Following
---

#### Match The Following

You are given two files. Each file contains different parts of the same string. The aim of this exercise is to match pairs of strings. For every string in the first file, there is a string in the second file whose first four characters are the same as the last four characters of the first.

Sample of File 1:
{{< highlight text >}}
79oklw
381jstc
453usja
535bdxv
{{< / highlight >}}

Sample of File 2:
{{< highlight text >}}
jstc331
oklw737
bdxv211
usja514
{{< / highlight >}}

Sample output:
{{< highlight text >}}
79oklw737
381jstc331
453usja514
535bdxv211
{{< / highlight >}}

In the above samples, `oklw`, `jstc`, `usja` and `bdxv` form the endings of the strings in File 1. They also form the beginnings of the string in File 2.

Your task is to match these strings and provide the output as shown in the sample output above.

_Note: The order of strings in File 1 does not match the order of strings in File 2. Obviously. :smiling_imp:_

There are two sets of files provided. The first set consists of a small data set, only 4 strings in each file. The second set, consists of 456976 strings in each file.

_Right click and save the link._

[Test Files For Match The Following](/data/match_data.tar.gz)

Write your program and test it with the smaller set before you test it with the larger set.
