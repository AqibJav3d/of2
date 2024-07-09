const userLocation = document.querySelector(".user-location");
const city1H = document.querySelector(".city1");
const city2H = document.querySelector(".city2");

document.addEventListener("DOMContentLoaded", function () {
  // Get user's IP address
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((ipData) => {
      const userIP = ipData.ip;
      console.log("User IP:", userIP);

      // Make a request to reverse geocoding service
      fetch("https://ipinfo.io/" + userIP + "/json?token=207a58752ab69f", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "data");
          const city1 = "Dubai";
          const city2 = "New York";
          if (data.city === city1) {
            city1H.textContent = "London";
          }
          if (data.city === city2) {
            city2H.textContent = "Hong Kong";
          }
          userLocation.textContent = data.city + ", " + data.country;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })
    .catch((error) => {
      console.error("Error fetching user IP:", error);
    });
});
