const search = () => {
   const searchVal = document.getElementById("search").value;
   request.open("GET", `https://restcountries.eu/rest/v2/name/${searchVal.toLowerCase()}`);
   request.send();
};

const btn = document.getElementById("searchBtn");
btn.addEventListener("click", search);

const container = document.getElementById("myContainer");

// To get the response

const request = new XMLHttpRequest();

request.addEventListener("load", function () {
   const [data] = JSON.parse(this.responseText);

   const htmlData = `
    <div class="myCard">
        <div class="card">
            <div class="card-body">
                <img src="${data.flag}" alt="${data.name} Flag"/>
                <h1 class="card-body-title">
                    ${data.name}
                </h1>
                <p class="card-body-text">Capital: ${data.capital}</p>
            </div>
            <div class="card-footer">
                <div class="card-footer-social">
                    <h3>${data.nativeName}</h3>
                    <p>Native Name</p>
                </div>
                <div class="card-footer-social">
                    <h3>${data.population}</h3>
                    <p>Population</p>
                </div>
                <div class="card-footer-social">
                    <h3>${data.demonym}</h3>
                    <p>Demonym</p>
                </div>
            </div>
        </div>
    </div>
   `;

   container.insertAdjacentHTML("afterbegin", htmlData);
});
