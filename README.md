Bank Account Management System
Project Description

The Bank Account Management System is a web-based application developed using HTML, CSS, and JavaScript. It simulates basic banking operations such as depositing money, withdrawing money, checking account balance, and maintaining transaction records.

Features
Account details display
Deposit money
Withdraw money
Check account balance
Insufficient balance validation
Invalid amount validation
Transaction history
Simple and user-friendly interface
Technologies Used
HTML5
CSS3
JavaScript
Node.js for testing
Project Structure
Bank-Account-Management-System/
│
├── index.html
├── style.css
├── bankAccount.js
├── testbench.js
├── simulation-output.txt
└── README.md

How to Run the Project
Method 1: Using a Web Browser
Download or clone the repository.
Open the project folder.
Open index.html in Google Chrome, Microsoft Edge, or another web browser.
Enter an amount.
Select Deposit, Withdraw, or Check Balance.
Method 2: Using VS Code
Open the project folder in Visual Studio Code.
Open index.html.
Use the Live Server extension or open the HTML file directly in your browser.
Testing

The project contains a JavaScript testbench named testbench.js.

Make sure Node.js is installed on your computer.

Run the testbench using:

node testbench.js

Test Cases
Test Case	Operation	Expected Result
1	Check Initial Balance	₹10000
2	Deposit ₹5000	Balance becomes ₹15000
3	Withdraw ₹3000	Balance becomes ₹12000
4	Withdraw ₹20000	Insufficient balance
5	Deposit -₹500	Invalid amount
6	Check Transaction History	2 transactions
Simulation
Initial Account
Account Holder : Your Name
Account Number : 1234567890
Balance        : ₹10000

Deposit
Input: ₹5000

Output:
₹5000 deposited successfully.

Balance: ₹15000

Withdrawal
Input: ₹3000

Output:
₹3000 withdrawn successfully.

Balance: ₹12000

Insufficient Balance
Input: ₹20000

Output:
Insufficient balance.

Balance: ₹12000

Testbench Result
BANK ACCOUNT MANAGEMENT TESTBENCH

Test 1: Check Initial Balance
Result: PASS

Test 2: Deposit Money
Result: PASS

Test 3: Withdraw Money
Result: PASS

Test 4: Insufficient Balance
Result: PASS

Test 5: Invalid Deposit
Result: PASS

Test 6: Transaction History
Result: PASS

ALL TESTS PASSED SUCCESSFULLY

Future Enhancements
User registration and login
Multiple customer accounts
Money transfer between accounts
Transaction history interface
Database integration
ATM simulation
Admin dashboard
Account statement generation
Online deployment
Author

Your Name

GitHub: your-github-username

Email: your-email@gmail.com

License

This project is developed for educational and academic purposes.
