let total = 0;

const rows = document.querySelectorAll(
  "table tr:not(:first-child):not(:last-child)"
);

rows.forEach(function (row) {
  const priceCell = row.querySelector("td:nth-child(3)");
  if (priceCell) {
    const price = parseFloat(priceCell.textContent.match(/[\d.]+/));
    total += price;
  }
});

const priceElement = document.getElementById("totalPrice");
if (priceElement) {
  priceElement.innerText = `Total Price ${total} Taka`;
}
