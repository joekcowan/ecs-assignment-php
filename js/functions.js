function handleLoginSubmit(event) {
  window.location.href = "console.php";

  event.preventDefault(); // Prevents the form from submitting in the traditional way
  
  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  
  // Do something with the form data
  console.log('Name:', name);
  console.log('Email:', email);
  
  // Example: Display an alert with the form data
  alert(`Form submitted! \nName: ${name} \nEmail: ${email}`);
  
  // Optionally, you could send the form data to a server using fetch()
  // fetch('/submit', {
  //     method: 'POST',
  //     body: formData
  // }).then(response => response.json())
  //   .then(data => console.log(data));
}

