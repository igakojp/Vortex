for (let i = 1; i <= 1; i++) {
    fetch(`/api/follow/${i}`, {
  method: "POST",
  credentials: "include"
})
  .then(response => {
    console.log("Status:", response.status);
    return response.text();
  })
  .then(data => console.log("Response:", data))
  .catch(error => console.error("Error:", error));
}
