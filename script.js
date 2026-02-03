// Billing selection
const billingOptions = document.querySelectorAll('.billing-option');

billingOptions.forEach(option => {
  option.addEventListener('click', () => {
    billingOptions.forEach(o => o.classList.remove('active'));
    option.classList.add('active');
  });
});

// Payment method selection
const payMethods = document.querySelectorAll('.pay-method');

payMethods.forEach(method => {
  method.addEventListener('click', () => {
    payMethods.forEach(m => m.classList.remove('active'));
    method.classList.add('active');
  });
});
