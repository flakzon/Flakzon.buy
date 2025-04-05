// script.js
document.getElementById('orderForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  
  const service = document.getElementById('service').value;
  const link = document.getElementById('link').value;
  const quantity = document.getElementById('quantity').value;
  const transaction = document.getElementById('transaction').value;

  const response = await fetch("https://easysmmpanel.com/api/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      key: "1852a1d148437cb070a60e26d3d58506",
      action: "add",
      service: service,
      link: link,
      quantity: quantity
    })
  });

  const data = await response.json();

  if (data.order) {
    document.getElementById('orderStatus').textContent = `Order Placed! ID: ${data.order}`;
  } else {
    document.getElementById('orderStatus').textContent = `Error: ${data.error}`;
  }
});
