export default function sendEmail(data) {
  const apiEndpoint = "/api/email";

  // Added a note to the data object
  data.note =
    "(Do not click reply button as the sender will not receive the response, To respond please copy paste the email address into a new email)";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
