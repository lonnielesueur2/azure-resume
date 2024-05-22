window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApi = "";

const getVisitCount = () => {
  let count = 0;
  fetch(functionApi)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("The website called the functionApi.");
      count = response.count;
      document.getElementById("counter").innerHTML = count;
    })
    .catch((error) => {
      console.log(error);
    });
  return count;
};
