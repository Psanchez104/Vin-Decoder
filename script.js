const form = document.getElementById("form");
let currentVin = null;

const make = document.getElementById("make");
const model = document.getElementById("model");
const year = document.getElementById("year");

let apiData = {
  url: "http://api.carmd.com/v3.0/decode?vin="
};

form.addEventListener("submit", e => {
  e.preventDefault();
  currentVin = document.getElementById("vin");
  let apiUrl = `${apiData.url}${currentVin.value}`;
  // console.log(apiUrl);

  year.innerHTML = fetch(
    `http://api.carmd.com/v3.0/decode?vin=${currentVin.value}`,
    {
      headers: {
        accept: "application/json",
        "accept-encoding": "gzip, deflate",
        "accept-language": "en-US,en;q=0.8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
        authorization: "Basic NjMwMWU5MWUtMmFiMS00MGM3LThjYWYtMzhmZGIwNWMxNzIy",
        "partner-token": "b81c4c0721e54804b9127a259165cc46"
      }
    }
  )
    .then(res => res.json())
    .then(function(data) {
      year.innerHTML = data.data.year;
      make.innerHTML = data.data.make;
      model.innerHTML = data.data.model;
    });
});
