document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('forgot-password-form');
  const submitBtn = document.getElementById('submit-btn');
  const messageEl = document.getElementById('message');
  const errorEl = document.getElementById('error');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Resetting...';
    messageEl.style.display = 'none';
    errorEl.style.display = 'none';

    try {
      // Simulate API call - replace with actual fetch in production
      console.log('Sending reset link to:', email);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      messageEl.textContent = 'Password reset link sent to your email!';
      messageEl.style.display = 'block';
      
      // In a real app, you would redirect to a confirmation page or back to login
      setTimeout(() => {
        window.location.href = 'reset-password.html?email=' + encodeURIComponent(email);
      }, 2000);
        
      
    } catch (err) {
      errorEl.textContent = 'Failed to send reset link. Please try again.';
      errorEl.style.display = 'block';
      console.error(err);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send reset link';
    }
  });
});