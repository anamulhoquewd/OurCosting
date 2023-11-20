    
    var total = 0; // Initialize the total variable outside of the loop

    // Loop through all the rows except the header and total row
    var rows = document.querySelectorAll('table tr:not(:first-child):not(:last-child)');
    rows.forEach(function(row) {
        var priceCell = row.querySelector('td:nth-child(3)');
        if (priceCell) {
            var price = parseFloat(priceCell.textContent.match(/[\d.]+/));
            total += price; // Add the price to the total
        }
    });

    // Update the total price cell with the calculated total
    var totalPriceCell = document.getElementById('totalPriceCell');
    if (totalPriceCell) {
        totalPriceCell.textContent = 'Total: ' + total.toFixed(2) + ' taka';
    }