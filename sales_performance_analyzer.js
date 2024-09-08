// Task 1: Create a Function to Calculate Average Sales

salesFigures = [100, 200, 300, 400];

function calculateAverageSales(salesFigures) {
// Summing all sales and dividing by the number of sales entries
    return salesFigures.reduce((acc,current) => acc + current, 0) / salesFigures.length;
}
console.log("The average sales are: " + averageSales);

// Task 2: Create a Function to Determine Performance Rating

function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) {
        return "Excellent";
    } else if (averageSales >= 7000) {
        return "Good";
    } else if (averageSales >= 4000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}
// Example usage:
const averageSales = 8500;
console.log(determinePerformanceRating(averageSales)); // Output: "Good"

// Task 3: Create a Function to Identify Top and Bottom Performers

