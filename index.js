// Declare customerName in the global scope
var customerName = 'bob';

// Function to upper-case customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer without using var/let/const 
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant and attempt illegal reassignment
const leastFavoriteCustomer = 'someone';

// This will throw an error if actually run
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}

