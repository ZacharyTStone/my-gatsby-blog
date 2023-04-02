---
title: Understanding Array References and Creating Copies in JavaScript
date: "2023-04-02"
description: "A look at a coding question that explains how to make copies of objects in Javascript"
tags: ["programming concepts", "javascript"]
---

## Introduction

In this blog post, we'll be discussing a specific piece of JavaScript code and why the outcome is [1, 2, 3, 4], [1, 2, 3, 4]. Afterward, we will explore different ways to make a copy of an array that will not be a reference to the original array. This can be done using the spread operator, JSON.parse, and JSON.stringify, among other methods.

### The Code

Let's first examine the given JavaScript code:

```const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);
```

### Outcome Explanation

The outcome of the code is [1, 2, 3, 4], [1, 2, 3, 4]. To understand why this is the case, we need to break down the code step by step:

`const arr1 = [1, 2, 3]`

This line creates a constant array arr1 containing the elements 1, 2, and 3.

`const arr2 = arr1`

This line creates a new constant array arr2 and assigns it the value of arr1. However, in Javascript Objects are created by reference so arr2 is not assigned a new array with the same values; instead, it is assigned a reference to arr1. This means both arr1 and arr2 point to the same memory location.
`arr2.push(4)`

This line pushes the element 4 to the arr2 array. Since arr2 is just a reference to arr1, the push operation also affects arr1. As a result, both arrays now contain the elements [1, 2, 3, 4].

## Making a Copy of an Array without Reference

To prevent modifying the original array when updating a copy, we can create a new array without a reference to the original array. There are several ways to achieve this:

### Using the spread operator:

```const arr1 = [1, 2, 3];
const arr2 = [...arr1];
Using Array.from()

const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1);
```

### Using slice() method:

```
const arr1 = [1, 2, 3];
const arr2 = arr1.slice();

```

### Using JSON.parse() and JSON.stringify():

```
const arr1 = [1, 2, 3];
const arr2 = JSON.parse(JSON.stringify(arr1));
```

### Using Array.prototype.concat():

```
const arr1 = [1, 2, 3];
const arr2 = [].concat(arr1);
```

## Conclusion

It's essential to be aware of how JavaScript handles arrays, particularly when assigning one array to another. Understanding how references work can help prevent unintended side effects in your code. By using one of the methods outlined above, you can make a copy of an array without referencing the original, ensuring that changes to the copy do not affect the original array.
