const assert = require("assert");
const BankAccount = require("./bankAccount");

console.log("======================================");
console.log(" BANK ACCOUNT MANAGEMENT TESTBENCH");
console.log("======================================");

let account = new BankAccount(
    "1234567890",
    "Test User",
    10000
);

// Test 1
console.log("\nTest 1: Check Initial Balance");

assert.strictEqual(
    account.checkBalance(),
    10000
);

console.log("Expected: ₹10000");
console.log("Actual: ₹" + account.checkBalance());
console.log("Result: PASS");

// Test 2
console.log("\nTest 2: Deposit Money");

let depositResult = account.deposit(5000);

assert.strictEqual(
    account.checkBalance(),
    15000
);

console.log("Expected Balance: ₹15000");
console.log("Actual Balance: ₹" + account.checkBalance());
console.log("Result: PASS");

// Test 3
console.log("\nTest 3: Withdraw Money");

let withdrawResult = account.withdraw(3000);

assert.strictEqual(
    account.checkBalance(),
    12000
);

console.log("Expected Balance: ₹12000");
console.log("Actual Balance: ₹" + account.checkBalance());
console.log("Result: PASS");

// Test 4
console.log("\nTest 4: Insufficient Balance");

let insufficientResult = account.withdraw(20000);

assert.strictEqual(
    account.checkBalance(),
    12000
);

assert.strictEqual(
    insufficientResult,
    "Insufficient balance."
);

console.log("Expected: Insufficient balance.");
console.log("Actual: " + insufficientResult);
console.log("Result: PASS");

// Test 5
console.log("\nTest 5: Invalid Deposit");

let invalidResult = account.deposit(-500);

assert.strictEqual(
    invalidResult,
    "Invalid deposit amount."
);

console.log("Expected: Invalid deposit amount.");
console.log("Actual: " + invalidResult);
console.log("Result: PASS");

// Test 6
console.log("\nTest 6: Transaction History");

assert.strictEqual(
    account.getTransactions().length,
    2
);

console.log("Expected Transactions: 2");
console.log(
    "Actual Transactions: " +
    account.getTransactions().length
);
console.log("Result: PASS");

console.log("\n======================================");
console.log(" ALL TESTS PASSED SUCCESSFULLY");
console.log("======================================");
