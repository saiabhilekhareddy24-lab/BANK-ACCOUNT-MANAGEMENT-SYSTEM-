class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            return "Invalid deposit amount.";
        }

        this.balance += amount;

        this.transactions.push({
            type: "Deposit",
            amount: amount,
            balance: this.balance
        });

        return `₹${amount} deposited successfully.`;
    }

    withdraw(amount) {
        if (amount <= 0 || isNaN(amount)) {
            return "Invalid withdrawal amount.";
        }

        if (amount > this.balance) {
            return "Insufficient balance.";
        }

        this.balance -= amount;

        this.transactions.push({
            type: "Withdrawal",
            amount: amount,
            balance: this.balance
        });

        return `₹${amount} withdrawn successfully.`;
    }

    checkBalance() {
        return this.balance;
    }

    getAccountDetails() {
        return {
            accountNumber: this.accountNumber,
            accountHolder: this.accountHolder,
            balance: this.balance
        };
    }

    getTransactions() {
        return this.transactions;
    }
}

module.exports = BankAccount;
