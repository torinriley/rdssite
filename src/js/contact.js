document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        document.getElementById('form-status').innerText = 'Thank you for your message!';
        form.reset();
      } else {
        document.getElementById('form-status').innerText = 'Oops! There was a problem submitting your form.';
      }
    } catch (error) {
      document.getElementById('form-status').innerText = 'Oops! There was a problem submitting your form.';
    }
  });
  setTimeout(() => {
    document.getElementById('form-status').innerText = '';
  }, 3000);