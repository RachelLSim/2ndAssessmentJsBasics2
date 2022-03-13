///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects inside. 

    Write a callback below that uses the reduce array method to calculate the sum of all the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]
//CODE HERE

function myFunc(accumulator, currentObject) {
    return accumulator + currentObject.price;
}

initialValue = 0;
const summedPrice = cart.reduce(myFunc, initialValue);

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal * (1 + tax) - couponValue 
}
console.log(calcFinalPrice(summedPrice, 5.00, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

First Name and Last Name, phone number, reservation date and time, group size
We need to know when they want to come, what the table size needed will be, what time they'll be there and how to contact them
First and Last name = strings, phone number - string (due to needing dashes), reservation date and time - strings, group size - integer (so it can be updated or changed)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer ={
    firstName: "Zack",
    lastName: "Battenfield",
    phoneNumber: "801-555-9555",
    reservationDate: "3/12/2022",
    time: "6:00 pm",
    groupSize: 2
    }

