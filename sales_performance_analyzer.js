// Task 1: Create a Function to Calculate Average Sales

salesFigures = [100, 200, 300, 400];

function calculateAverageSales(salesFigures) {
// Summing all sales and dividing by the number of sales entries
    return salesFigures.reduce((acc,current) => acc + current, 0) / salesFigures.length;
}

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
// Example:
const averageSales = 8500;
console.log(determinePerformanceRating(averageSales)); // Output: "Good"

// Task 3: Create a Function to Identify Top and Bottom Performers

function findTopandBottomPerformers(salesperson) {
    return salesperson.reduce((acc, salesperson) => {
        if (!acc.topPerformer || salesperson.totalSales > acc.topPerformer.totalSales) {
            acc.topPerformer = salesperson;
        }
        if (!acc.bottomPerformer || salesperson.totalSales < acc.bottomPerformer.totalSales) {
            acc.bottomPerformer = salesperson;
        }
        return acc;
    }, { topPerformer: null, bottomPerformer: null });
}

// Example:
const salesperson = [
    { name: 'Alice', totalSales: 8500 },
    { name: 'Bob', totalSales: 9000 },
    { name: 'Charlie', totalSales: 4000 },
    { name: 'Diana', totalSales: 7000 }
];

const result = findTopandBottomPerformers(salesperson);
console.log(result);

// Task 4: Combine Functions to Generate a Performance Report

function calculateAverageSales(salesData) {
    return salesData.map(data => {
        const totalSales = data.sales.reduce((sum, sale) => sum + sale, 0);
        const averageSales = totalSales / data.sales.length;
        return { name: data.name, averageSales };
    });
}

function determinePerformanceRating(salesperson) {
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

function findTopAndBottomPerformers(salesData) {
    return salesperson.reduce((acc, salesperson) => {
        if (!acc.topPerformer || salesperson.totalSales > acc.topPerformer.totalSales) {
            acc.topPerformer = salesperson;
        }
        if (!acc.bottomPerformer || salesperson.totalSales < acc.bottomPerformer.totalSales) {
            acc.bottomPerformer = salesperson;
        }
        return acc;
    }, { topPerformer: null, bottomPerformer: null });
}