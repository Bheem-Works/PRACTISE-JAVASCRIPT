// Fetch data from an API
fetch('https://api.example.com/data') // Replace with your API URL
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Handle the data
    console.log('Data received:', data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
