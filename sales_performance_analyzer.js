// Task 1: Create a Function to Calculate Average Sales

salesFigures = [100, 200, 300, 400];

function calculateAverageSales(salesFigures) {
    return salesFigures.reduce((acc,current) => acc + current, 0) / salesFigures.length;
}