



// Shopping list
let listOfItems = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
let shopping_cart = [];

// Add Fruit Loops to the list.
listOfItems.push('fruit loops');

// Update coffee to "fair trade coffee"
listOfItems[4] = 'fair trade coffee';


// Replace chips and salsa with rice and beans.
listOfItems.splice(2, 2, "rice", "beans");

// Remove the last item from your shopping list and add it to your cart
shopping_cart.push(listOfItems.pop());

// Remove the first item from the cart and add it to the list
shopping_cart.push(listOfItems.shift());

/*
	Write while loop that take items from the list
	and add them to the cart until now items are 
	left in the list.

*/

while(listOfItems.length > 0) {
	shopping_cart.push(listOfItems.pop());
}

// Sort the items in your cart alphabetically
shopping_cart.sort()

// Print the items in shopping cart as comma separated string.

let strToPrint = "";

for (let i = 0; i < shopping_cart.length; i++) {
	if (shopping_cart.length ) {

	}
	strToPrint += shopping_cart[i] + ", "
}

console.log(strToPrint)


var item = grocery.pop()
