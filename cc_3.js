// Task 1 - Product Price Management Scenario

let price = [20, 40, 60, 80, 100];
//Initialize array prices using aleast 5 numerical values
price.push(120); 
//Adding a new price to the array
price.shift();
//Remove  the first price from the array
console.log ("Update Prices:", price);
//Log the updated price list 

// Task 2 - Modifying Customer Orders Scenario

let orders = [50, 60, 70, 80, 90];
// Declare an array orders with at least five numerical values representing quantities. 
orders[2] += 5;
// Increase the third order quantity by 5
const TotalOrders = orders.reduce((TotalNumbers, orders) => TotalNumbers + orders, 0);
// Calculate the total number of all orders
console.log("Updated Orders:", orders);
// Print the update list of orders
console.log("Total Order Count:", TotalOrders);
// Print the overall total order.