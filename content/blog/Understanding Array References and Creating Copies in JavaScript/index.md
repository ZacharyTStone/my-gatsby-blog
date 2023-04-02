---
title: Understanding Object References and Creating Copies of Objects in JavaScript
date: "2023-04-02"
description: "A look at a coding question that explains how to make copies of objects in Javascript"
tags: ["programming concepts", "javascript"]
---

#### English / 日本語　

<hr>

## The Code

Let's first examine the given JavaScript code:

```
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

```

## What is the outcome?

### ...

## [1, 2, 3, 4], [1, 2, 3, 4] !

## Outcome Explanation

The outcome is [1, 2, 3, 4], [1, 2, 3, 4]. To understand why this is the case, we need to break down the code step by step:

`const arr1 = [1, 2, 3]`

This line creates a constant array arr1 containing the elements 1, 2, and 3.

`const arr2 = arr1`

This line creates a new constant array arr2 and assigns it the value of arr1. However, in Javascript Objects are passed by reference so arr2 is not assigned a new array with the same values; instead, it is assigned a reference to arr1. This means both arr1 and arr2 point to the same memory location.

`arr2.push(4)`

This line pushes the element 4 to the arr2 array. Since arr2 is just a reference to arr1, the push operation also affects arr1. As a result, both arrays now contain the elements [1, 2, 3, 4].

## Making a Copy of an Array without Reference

To prevent modifying the original array when updating a copy, we can create a new array without a reference to the original array. There are several ways to achieve this:

### Using the spread operator:

```
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

```

### Using Array.from()

```
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

## Conclusion

It's essential to be aware of how JavaScript handles arrays, particularly when assigning one array to another. Understanding how references work can help prevent unintended side effects in your code. By using one of the methods outlined above, you can make a copy of an array without referencing the original, ensuring that changes to the copy do not affect the original array.

<hr>

##### \*CHATGPT で訳した

最初に、与えられた JavaScript コードを見てみましょう。

```
const arr1 = [1, 2, 3]
const arr2 = arr1

arr2.push(4)
```

## 結果は何ですか？

### ...

## [1, 2, 3, 4], [1, 2, 3, 4] !

## 結果の説明

このコードの結果は [1, 2, 3, 4], [1, 2, 3, 4] です。なぜこのような結果になるかを理解するために、コードをステップごとに見ていきましょう。

`const arr1 = [1, 2, 3]`

この行は、要素 1、2、3 を含む定数配列 arr1 を作成します。

`const arr2 = arr1`

この行は、新しい定数配列 arr2 を作成し、arr1 の値を代入します。しかし、JavaScript ではオブジェクトは参照によって作成されるため、arr2 には同じ値を持つ新しい配列が割り当てられるのではなく、arr1 への参照が割り当てられます。これは、arr1 と arr2 の両方が同じメモリ領域を指していることを意味します。

`arr2.push(4)`

この行は、要素 4 を arr2 配列にプッシュします。arr2 は arr1 への参照であるため、プッシュ操作は arr1 にも影響します。結果として、両方の配列には要素 [1, 2, 3, 4] が含まれます。

## 参照なしで配列のコピーを作成する

コピーを更新する際に元の配列を変更しないようにするために、元の配列への参照なしで新しい配列を作成することができます。これを実現する方法はいくつかあります。

### スプレッド演算子を使用する:

```
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

```

### Array.from()を使用する:

```
const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1);
```

### slice()メソッドを使用する:

```
const arr1 = [1, 2, 3];
const arr2 = arr1.slice();

```

### JSON.parse()と JSON.stringify()を使用する:

```
const arr1 = [1, 2, 3];
const arr2 = JSON.parse(JSON.stringify(arr1));
```

## 結論

JavaScript が配列をどのように扱うか、特に配列を別の配列に割り当てるときに注意することが重要です。参照の仕組みを理解することで、コードの意図しない副作用を防ぐことができます。上記で概説した方法のいずれかを使用して、元の配列を参照せずに配列のコピーを作成することができます。これにより、コピーへの変更が元の配列に影響しないことが保証されます。
