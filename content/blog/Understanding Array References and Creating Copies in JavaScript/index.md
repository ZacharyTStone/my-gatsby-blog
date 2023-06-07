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

In conclusion, understanding how JavaScript handles object references and creating copies of objects is crucial to avoid unintended side effects in your code. When assigning one array to another, it's important to be aware that JavaScript assigns references instead of creating a new array with the same values.

To make a copy of an array without referencing the original, several methods can be used, including the spread operator, Array.from(), the slice() method, and JSON.parse() with JSON.stringify() and more.

However, it's important to note that each of these methods has its limitations and potential pitfalls. These include:

Shallow Copy: The methods mentioned above create a shallow copy of the array, meaning that if the array contains nested objects or arrays, those nested objects will still be referenced and not deeply copied. Modifying the nested objects in the copied array will affect the original array as well.

Performance: Some copy methods, such as JSON.parse() and JSON.stringify(), involve serialization and deserialization, which can be computationally expensive for large or complex objects. These methods are not recommended for performance-critical scenarios.

Non-Array Objects: The discussed methods are specifically for copying arrays. If you're dealing with non-array objects, such as plain JavaScript objects, different approaches like Object.assign() or libraries like Lodash's cloneDeep() may be more appropriate.

It's important to thoroughly understand the limitations and potential issues associated with each method before choosing the one that best suits your specific requirements.

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

まとめると、JavaScript がオブジェクトの参照を扱う方法とオブジェクトのコピーを作成する方法を理解することは、コードで意図しない副作用を回避するために非常に重要です。配列を別の配列に割り当てる際には、JavaScript が同じ値を持つ新しい配列を作成するのではなく、参照を割り当てることを意識することが重要です。

元の配列を参照せずに配列のコピーを作成するためには、スプレッド演算子、Array.from()、slice()メソッド、および JSON.parse()と JSON.stringify()など、いくつかの方法があります。

ただし、これらの方法にはそれぞれ制限と潜在的な注意点があることに注意する必要があります。以下にそれらを示します:

浅いコピー: 上記の方法は配列の浅いコピーを作成します。つまり、配列にネストされたオブジェクトや配列が含まれている場合、そのネストされたオブジェクトは参照され、深くコピーされません。コピーされた配列のネストされたオブジェクトを変更すると、元の配列にも影響が及びます。

パフォーマンス: JSON.parse()や JSON.stringify()などの一部のコピー方法は、シリアライズとデシリアライズを伴うため、大きなまたは複雑なオブジェクトでは計算量が多くなる場合があります。これらの方法は、パフォーマンスが重要なシナリオでは推奨されません。

配列以外のオブジェクト: 上記の方法は特に配列のコピーに対して使用されるものです。プレーンな JavaScript オブジェクトなど、配列以外のオブジェクトを扱う場合は、Object.assign()のような別のアプローチや Lodash の cloneDeep()などのライブラリがより適している場合があります。

それぞれの方法に関連する制限と潜在的な問題を徹底的に理解し、特定の要件に最も適した方法を選ぶ前に注意深く検討することが重要です。
