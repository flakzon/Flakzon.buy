// script.js const form = document.getElementById('orderForm'); const statusDisplay = document.getElementById('orderStatus');

form.addEventListener('submit', async (e) => { e.preventDefault();

const service = document.getElementById('service').value; const link = document.getElementById('link').value; const quantity = document.getElementById('quantity').value; const transaction = document.getElementById('transaction').value;

const data = { key: '1852a1d148437cb070a60e26d3d58506', action: 'add', service: service, link: link, quantity: quantity };

try { const response = await fetch('https://easysmmpanel.com/api/v2', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });

const result = await response.json();
console.log(result);

if (result.order) {
  statusDisplay.textContent = `Order placed successfully! Order ID: ${result.order}`;
  statusDisplay.style.color = 'green';
} else {
  statusDisplay.textContent = `Failed: ${result.error || 'Something went wrong'}`;
  statusDisplay.style.color = 'red';
}

} catch (error) { statusDisplay.textContent = Error: ${error.message}; statusDisplay.style.color = 'red'; } });

