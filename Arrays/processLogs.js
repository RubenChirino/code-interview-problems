// Question
// Your team is responsible for maintaining a monetary transaction service. The transactions are tracked in a log file.

// A log file is provided as a string array where each entry represents a transaction service. Each transaction consists of:

// sender_user_id: Unique identifier for the user that initiated the transaction. It consists of only digits with ar most 9 digits.
// recipient_user_id: Unique identifier for the user that is receiving the transaction. It consists of only digits with ar most 9 digits.
// amount_of_transaction: The amount of the transaction. It consists of only digits with ar most 9 digits.

// The values are separated by a space. For example: ["sender_user_id" "recipient_user_id" "amount_of_transaction"]

// Users that perform an excessive amount of transactions might be abusing the service so you have been tasked to identify the users
// that have a number of transactions over a threshold. The list of user ids should be ordered in ascending numeric value.

// Example: 
// logs = ['88 99 200', '88 99 300', '99 32 100', '12 12 15']
// threshold = 2

//The transactions count for each user, regardless of the role are:

// ID     Transactions
// --     ------------
// 99     3
// 88     2
// 12     1
// 32     1

// There are two users with at least threshold = 2 transactions: 99 and 88.
// In ascending order, the return array is ['88', '99'].

// Note: In the last log entry, user 12 was on both sides of the transaction.
// This counts as only 1 transaction for user 12.

function processLogs(logs, threshold) {
    const transactionsPerUser = {};
    // Check
    for(let i = 0; i < logs.length; i++) {
        const [sender, recipient] = logs[i].split(' ').slice(0, 2);
        transactionsPerUser[sender] = (transactionsPerUser[sender] || 0) + 1;
        if (recipient !== sender) {
            transactionsPerUser[recipient] = (transactionsPerUser[recipient] || 0) + 1;
        }
    }
    // Get Result
    const usersOverThreshold = [];
    for (const user in transactionsPerUser) {
        if (transactionsPerUser[user] >= threshold) {
            usersOverThreshold.push(user);
        }
    }
    // Return in ascendent order
    return usersOverThreshold.sort((a, b) => parseInt(a) - parseInt(b));
}

console.log('Value =>', processLogs(['88 99 200', '88 99 300', '99 32 100', '12 12 15'], 2)); // ['88', '99']

console.log('Value =>', processLogs(['1 2 50', '1 7 70', '1 3 20', '2 2 17'], 2)); // ['1', '2']

console.log('Value =>', processLogs(['9 7 50', '22 7 20', '33 7 50', '22 7 30'], 3)); // ['7']