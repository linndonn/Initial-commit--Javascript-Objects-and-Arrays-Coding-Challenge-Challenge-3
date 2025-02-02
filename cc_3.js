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

//Task 3 - Employee Performce Tracking Scenario

let employee = { name: "Shaquille", role: "Senior Analyst", PerformanceScore: 95, isActive: true };
// Declare an object employee with properties name, role, PerformanceScore, and isActive
employee.PerformanceScore = 98;
// Increase the Performance Score by 3
employee.PromotionEligible= true;
// Add a property promotionEligible and set it to true
console.log("Updated Employee:", employee);
// Print the updated employee object

//Task 4 - Customer Feedback Records Scenario

let feedback = [
    { customerName: "Joelina", feedbackText: "Excellent", rating: 5 },
    { customerName: "Dane", feedbackText: "Was not impressed.", rating: 1 },
    { customerName: "Don", feedbackText: "Somewhat satisfied.", rating: 3 }
];
// Declare an array feedback with at least 3 objects with properties customerName, FeedbackText, and rating
feedback.push({ customerName: "Jasmine", feedbackText: "Great service", rating: 4 });
// Add a new feedback object to the array
console.log("Updated Feedback:", feedback);
// Print the updated feedback array log

//Task 5 - Inventory Management System Scenario

let inventory = {itemName: "iPhone", stockCount: 200, cost: 799,
    // Declare an object inventory with properties itemName, stockCount, and price
    calculateTotalValue: function() 
      {  return this.stockCount * this.cost; }
      //Add a method calculateTotalValue that returns the total value (stockCount * price)
};

console.log("Inventory Data:", inventory);
console.log("Total Inventory Value:", inventory.calculateTotalValue());