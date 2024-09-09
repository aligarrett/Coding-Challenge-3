// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(salesFigures) {
    // Summing all sales and dividing by the number of sales entries
    return salesFigures.reduce((acc, current) => acc + current, 0) / salesFigures.length;
}

// Example usage for Task 1
const salesFigures = [100, 200, 300, 400];
const avgSalesFigures = calculateAverageSales(salesFigures);
console.log(`Average Sales Figures: ${avgSalesFigures}`); // Output: 250

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

// Example usage for Task 2
const performanceRating = determinePerformanceRating(avgSalesFigures);
console.log(`Performance Rating: ${performanceRating}`); // Output: "Needs Improvement"

// Task 3: Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salesData) {
    return salesData.reduce((acc, data) => {
        const totalSales = data.sales.reduce((sum, sale) => sum + sale, 0);
        if (!acc.topPerformer || totalSales > acc.topPerformer.totalSales) {
            acc.topPerformer = { name: data.name, totalSales };
        }
        if (!acc.bottomPerformer || totalSales < acc.bottomPerformer.totalSales) {
            acc.bottomPerformer = { name: data.name, totalSales };
        }
        return acc;
    }, { topPerformer: null, bottomPerformer: null });
}

// Example usage for Task 3
const sampleData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }
];

const performers = findTopAndBottomPerformers(sampleData);
console.log('Top and Bottom Performers:', performers);

// Task 4: Combine Functions to Generate a Performance Report

function calculateAverageSalesForReport(salesData) {
    return salesData.map(data => {
        const totalSales = data.sales.reduce((sum, sale) => sum + sale, 0);
        const averageSales = totalSales / data.sales.length;
        return { name: data.name, averageSales };
    });
}

function determinePerformanceRatingForReport(averageSales) {
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

function findTopAndBottomPerformersForReport(salesData) {
    return salesData.reduce((acc, data) => {
        const totalSales = data.sales.reduce((sum, sale) => sum + sale, 0);
        if (!acc.topPerformer || totalSales > acc.topPerformer.totalSales) {
            acc.topPerformer = { name: data.name, totalSales };
        }
        if (!acc.bottomPerformer || totalSales < acc.bottomPerformer.totalSales) {
            acc.bottomPerformer = { name: data.name, totalSales };
        }
        return acc;
    }, { topPerformer: null, bottomPerformer: null });
}

// Task 5: Test Your Functions with Sample Data

function generatePerformanceReport(salesData) {
    // Step 1: Calculate average sales
    const salesWithAverages = calculateAverageSalesForReport(salesData);

    // Step 2: Determine performance ratings
    const salesWithRatings = salesWithAverages.map(person => ({
        ...person,
        performanceRating: determinePerformanceRatingForReport(person.averageSales)
    }));

    // Step 3: Find top and bottom performers
    const { topPerformer, bottomPerformer } = findTopAndBottomPerformersForReport(salesData);

    // Step 4: Format the report
    const report = salesWithRatings.map(person => ({
        name: person.name,
        averageSales: person.averageSales,
        performanceRating: person.performanceRating,
        isTopPerformer: person.name === topPerformer.name,
        isBottomPerformer: person.name === bottomPerformer.name
    }));

    return {
        report,
        topPerformer: topPerformer.name,
        bottomPerformer: bottomPerformer.name
    };
}

// Example usage for Task 5
const report = generatePerformanceReport(sampleData);
console.log('Performance Report:', report);