---
title: Simplifying Your If Statements By Extracting Complex Conditions
date: "2022-07-04"
description: "Learn how to improve your logic"
tags: ["programming concepts", "javascript"]
---

## Most of the time, we can make simple changes to increase the readability of our if statments

For example:

```javascript

if (!(id?.number <= highestNumber)) {
    doSomething()
}

// we can rewrite this as 

if (id?.number > highestNumber) {
  doSomething();
}


```

## However, sometimes we can run into if statements that feel like a puzzle to solve:

```javascript

if (
  (user.id.type === "admin" || user.id.type === "manager") ||
  (cartContext[cartId]?.pastOrders?.length > 0 &&
    !!checkout.id &&
    cartContext[cartId]?.currentOrder[checkout?.id]?.status?.isPaid === true &&
    (currentOrderTotal >= 500 ||
      (isBigSpender && orderValue >= 200) ||  
      ["USA", "Japan"].includes(user?.location)
    )
  )
) {
  doSomething();
}
```

<img src ="https://media.giphy.com/media/cFgb5p5e1My3K/giphy.gif" width="100%" style="width:100%" />


## Let's simplify that

```javascript

const HIGH_SPENDING_AREAS = ["USA", "Japan"]

const isAdminOrManager = user.id.type === "admin" || user.id.type === "manager";

const hasPastOrder = cartContext[cartId]?.pastOrders?.length > 0;

const currentOrderIsValidAndPaid = !!checkout.id && cartContext[cartId]?.currentOrder[checkout?.id]?.status?.isPaid === true;

const userIsFromHighSpendingArea = HIGH_SPENDING_AREAS.includes(user?.location);

const isHighValueCustomer =
  currentOrderTotal >= 500 ||
  (isBigSpender && orderValue >= 200) ||
  (userIsFromHighSpendingArea)
  

if (isAdminOrManager || (hasPastOrder && currentOrderIsValidAndPaid && isHighValueCustomer)) {
  doSomething();
}

```

## Benefits of Extracting Complex Conditions

### 1. Readability

Extracting complex conditions makes your code easier to read and understand.

### 2. Reusability

Once you've extracted complex conditions, you can reuse them in other parts of your codebase.

### 3. Testability

Extracted conditions can be independently tested, allowing you to validate their correctness in isolation.

### 4. Debugging

When debugging your code, having separate variables for extracted conditions allows you to inspect and monitor their values independently.

## Conclusion

In the moment, it can be easy to just add another condition to an already long if statement in your codebase. For the sake of your future self and others, let's try to make our code more readible.

This is one of my favorite ways to do that.

Did you find this blog post helpful?

Feel free to contact me using my [website](https://zstone.dev).

Have a fantastic day!
