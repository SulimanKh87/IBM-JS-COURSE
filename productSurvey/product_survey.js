const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;



function submitFeedback() {
    const submitButton = document.getElementById('submitBtn');
    submitButton.onclick = submitFeedback;
    alert('Thank you for your valuable feedback')

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // In the HTML code at line 29, the entire div element, which will be used to display information, is styled with the 'display: none' property to be visible only after the user clicks on the submit button. To make this part visible after the button click, include the following code inside the submitFeedback function.
    document.getElementById('userInfo').style.display = 'block';

}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });