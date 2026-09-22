const countries = [

{
    name:"Pakistan",
    official:"Islamic Republic of Pakistan",
    capital:"Islamabad",
    continent:"Asia",
    population:"241 million",
    area:"881,913 km²",
    currency:"Pakistani Rupee (PKR)",
    language:"Urdu, English",
    region:"South Asia",
    flag:"🇵🇰"
},

{
    name:"India",
    official:"Republic of India",
    capital:"New Delhi",
    continent:"Asia",
    population:"1.4 billion",
    area:"3,287,263 km²",
    currency:"Indian Rupee (INR)",
    language:"Hindi, English",
    region:"South Asia",
    flag:"🇮🇳"
},

{
    name:"China",
    official:"People's Republic of China",
    capital:"Beijing",
    continent:"Asia",
    population:"1.4 billion",
    area:"9,596,960 km²",
    currency:"Renminbi (CNY)",
    language:"Mandarin Chinese",
    region:"East Asia",
    flag:"🇨🇳"
},

{
    name:"Japan",
    official:"Japan",
    capital:"Tokyo",
    continent:"Asia",
    population:"123 million",
    area:"377,975 km²",
    currency:"Japanese Yen (JPY)",
    language:"Japanese",
    region:"East Asia",
    flag:"🇯🇵"
},

{
    name:"Saudi Arabia",
    official:"Kingdom of Saudi Arabia",
    capital:"Riyadh",
    continent:"Asia",
    population:"36 million",
    area:"2,149,690 km²",
    currency:"Saudi Riyal (SAR)",
    language:"Arabic",
    region:"Western Asia",
    flag:"🇸🇦"
},

{
    name:"Turkey",
    official:"Republic of Türkiye",
    capital:"Ankara",
    continent:"Asia",
    population:"85 million",
    area:"783,562 km²",
    currency:"Turkish Lira (TRY)",
    language:"Turkish",
    region:"Western Asia",
    flag:"🇹🇷"
},

{
    name:"United Arab Emirates",
    official:"United Arab Emirates",
    capital:"Abu Dhabi",
    continent:"Asia",
    population:"10 million",
    area:"83,600 km²",
    currency:"UAE Dirham (AED)",
    language:"Arabic",
    region:"Western Asia",
    flag:"🇦🇪"
},

{
    name:"Indonesia",
    official:"Republic of Indonesia",
    capital:"Jakarta",
    continent:"Asia",
    population:"277 million",
    area:"1,904,569 km²",
    currency:"Indonesian Rupiah (IDR)",
    language:"Indonesian",
    region:"Southeast Asia",
    flag:"🇮🇩"
},

{
    name:"United Kingdom",
    official:"United Kingdom of Great Britain and Northern Ireland",
    capital:"London",
    continent:"Europe",
    population:"68 million",
    area:"243,610 km²",
    currency:"Pound Sterling (GBP)",
    language:"English",
    region:"Western Europe",
    flag:"🇬🇧"
},

{
    name:"France",
    official:"French Republic",
    capital:"Paris",
    continent:"Europe",
    population:"68 million",
    area:"551,695 km²",
    currency:"Euro (EUR)",
    language:"French",
    region:"Western Europe",
    flag:"🇫🇷"
},

{
    name:"Germany",
    official:"Federal Republic of Germany",
    capital:"Berlin",
    continent:"Europe",
    population:"84 million",
    area:"357,022 km²",
    currency:"Euro (EUR)",
    language:"German",
    region:"Central Europe",
    flag:"🇩🇪"
},

{
    name:"Italy",
    official:"Italian Republic",
    capital:"Rome",
    continent:"Europe",
    population:"59 million",
    area:"301,340 km²",
    currency:"Euro (EUR)",
    language:"Italian",
    region:"Southern Europe",
    flag:"🇮🇹"
},

{
    name:"Spain",
    official:"Kingdom of Spain",
    capital:"Madrid",
    continent:"Europe",
    population:"48 million",
    area:"505,990 km²",
    currency:"Euro (EUR)",
    language:"Spanish",
    region:"Southern Europe",
    flag:"🇪🇸"
},

{
    name:"Russia",
    official:"Russian Federation",
    capital:"Moscow",
    continent:"Europe",
    population:"144 million",
    area:"17,098,242 km²",
    currency:"Russian Ruble (RUB)",
    language:"Russian",
    region:"Eastern Europe",
    flag:"🇷🇺"
},

{
    name:"United States",
    official:"United States of America",
    capital:"Washington, D.C.",
    continent:"North America",
    population:"335 million",
    area:"9,833,520 km²",
    currency:"US Dollar (USD)",
    language:"English",
    region:"North America",
    flag:"🇺🇸"
},

{
    name:"Canada",
    official:"Canada",
    capital:"Ottawa",
    continent:"North America",
    population:"40 million",
    area:"9,984,670 km²",
    currency:"Canadian Dollar (CAD)",
    language:"English, French",
    region:"North America",
    flag:"🇨🇦"
},

{
    name:"Mexico",
    official:"United Mexican States",
    capital:"Mexico City",
    continent:"North America",
    population:"129 million",
    area:"1,964,375 km²",
    currency:"Mexican Peso (MXN)",
    language:"Spanish",
    region:"North America",
    flag:"🇲🇽"
},

{
    name:"Brazil",
    official:"Federative Republic of Brazil",
    capital:"Brasília",
    continent:"South America",
    population:"216 million",
    area:"8,515,767 km²",
    currency:"Brazilian Real (BRL)",
    language:"Portuguese",
    region:"South America",
    flag:"🇧🇷"
},

{
    name:"Argentina",
    official:"Argentine Republic",
    capital:"Buenos Aires",
    continent:"South America",
    population:"46 million",
    area:"2,780,400 km²",
    currency:"Argentine Peso (ARS)",
    language:"Spanish",
    region:"South America",
    flag:"🇦🇷"
},

{
    name:"Australia",
    official:"Commonwealth of Australia",
    capital:"Canberra",
    continent:"Oceania",
    population:"27 million",
    area:"7,692,024 km²",
    currency:"Australian Dollar (AUD)",
    language:"English",
    region:"Oceania",
    flag:"🇦🇺"
},

{
    name:"New Zealand",
    official:"New Zealand",
    capital:"Wellington",
    continent:"Oceania",
    population:"5 million",
    area:"268,021 km²",
    currency:"New Zealand Dollar (NZD)",
    language:"English, Māori",
    region:"Oceania",
    flag:"🇳🇿"
},

{
    name:"Egypt",
    official:"Arab Republic of Egypt",
    capital:"Cairo",
    continent:"Africa",
    population:"112 million",
    area:"1,001,450 km²",
    currency:"Egyptian Pound (EGP)",
    language:"Arabic",
    region:"North Africa",
    flag:"🇪🇬"
},

{
    name:"South Africa",
    official:"Republic of South Africa",
    capital:"Pretoria",
    continent:"Africa",
    population:"62 million",
    area:"1,221,037 km²",
    currency:"South African Rand (ZAR)",
    language:"Multiple official languages",
    region:"Southern Africa",
    flag:"🇿🇦"
},

{
    name:"Nigeria",
    official:"Federal Republic of Nigeria",
    capital:"Abuja",
    continent:"Africa",
    population:"223 million",
    area:"923,768 km²",
    currency:"Nigerian Naira (NGN)",
    language:"English",
    region:"West Africa",
    flag:"🇳🇬"
}

];


let currentCountries = [...countries];


const grid = document.getElementById("countryGrid");

const search = document.getElementById("search");

const count = document.getElementById("count");

const resultText = document.getElementById("resultText");

const empty = document.getElementById("empty");


function getFavorites(){

    return JSON.parse(
        localStorage.getItem("worldFavorites") || "[]"
    );

}


function saveFavorites(list){

    localStorage.setItem(
        "worldFavorites",
        JSON.stringify(list)
    );

}


function isFavorite(name){

    return getFavorites().includes(name);

}


function render(list){

    currentCountries = list;

    grid.innerHTML = "";

    count.textContent = list.length;

    resultText.textContent =
        list.length === countries.length
        ? `${countries.length} countries loaded`
        : `${list.length} shown`;

    empty.style.display =
        list.length ? "none" : "block";


    list.forEach(country => {

        const card =
            document.createElement("div");

        card.className = "country-card";


        const saved =
            isFavorite(country.name);


        card.innerHTML = `

            <div class="country-top">

                <div class="flag">
                    ${country.flag}
                </div>

                <button
                    class="favorite ${saved ? "saved" : ""}"
                    data-favorite="${country.name}"
                >
                    ${saved ? "★" : "☆"}
                </button>

            </div>


            <h4>
                ${country.name}
            </h4>


            <p class="capital">
                Capital: ${country.capital}
            </p>


            <div class="info-row">
                <span>Continent</span>
                <span>${country.continent}</span>
            </div>


            <div class="info-row">
                <span>Population</span>
                <span>${country.population}</span>
            </div>


            <div class="info-row">
                <span>Currency</span>
                <span>${country.currency.split(" ")[0]}</span>
            </div>


            <button
                class="details-btn"
                data-country="${country.name}"
            >
                View Details →
            </button>

        `;


        grid.appendChild(card);

    });


    document
        .querySelectorAll("[data-favorite]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    const name =
                        button.dataset.favorite;

                    let favorites =
                        getFavorites();


                    if(
                        favorites.includes(name)
                    ){

                        favorites =
                            favorites.filter(
                                item => item !== name
                            );

                        showToast(
                            "Removed from favorites"
                        );

                    }else{

                        favorites.push(name);

                        showToast(
                            "Added to favorites ⭐"
                        );

                    }


                    saveFavorites(favorites);

                    render(currentCountries);

                }
            );

        });


    document
        .querySelectorAll("[data-country]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openCountry(
                        button.dataset.country
                    );

                }
            );

        });

}


function openCountry(name){

    const country =
        countries.find(
            item => item.name === name
        );


    if(!country) return;


    document.getElementById(
        "modalFlag"
    ).textContent = country.flag;


    document.getElementById(
        "modalName"
    ).textContent = country.name;


    document.getElementById(
        "modalOfficial"
    ).textContent = country.official;


    const details = [

        ["Capital", country.capital],

        ["Continent", country.continent],

        ["Region", country.region],

        ["Population", country.population],

        ["Area", country.area],

        ["Currency", country.currency],

        ["Languages", country.language]

    ];


    document.getElementById(
        "detailGrid"
    ).innerHTML =

        details.map(detail => `

            <div class="detail">

                <label>
                    ${detail[0]}
                </label>

                <strong>
                    ${detail[1]}
                </strong>

            </div>

        `).join("");


    document
        .getElementById("modal")
        .classList.add("show");


    localStorage.setItem(
        "lastCountry",
        name
    );

}


function filterCountries(){

    const query =
        search.value
        .trim()
        .toLowerCase();


    const filtered =
        countries.filter(country =>

            country.name
                .toLowerCase()
                .includes(query)

            ||

            country.capital
                .toLowerCase()
                .includes(query)

            ||

            country.continent
                .toLowerCase()
                .includes(query)

        );


    document.getElementById(
        "countriesTitle"
    ).textContent =
        query
        ? "Search Results"
        : "Countries";


    render(filtered);

}


search.addEventListener(
    "input",
    filterCountries
);


document.getElementById(
    "searchBtn"
).addEventListener(
    "click",
    filterCountries
);


document
    .querySelectorAll(".continent")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".continent")
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );


                button.classList.add("active");


                const continent =
                    button.dataset.continent;


                const filtered =
                    countries.filter(
                        country =>
                            country.continent ===
                            continent
                    );


                document.getElementById(
                    "countriesTitle"
                ).textContent =
                    continent;


                render(filtered);


                window.scrollTo({

                    top:
                        document.body.scrollHeight,

                    behavior:"smooth"

                });

            }
        );

    });


document.getElementById(
    "allBtn"
).addEventListener(
    "click",
    () => {

        search.value = "";


        document
            .querySelectorAll(".continent")
            .forEach(item =>
                item.classList.remove("active")
            );


        document.getElementById(
            "countriesTitle"
        ).textContent =
            "Countries";


        render(countries);

    }
);


function showFavorites(){

    const favorites =
        getFavorites();


    const filtered =
        countries.filter(
            country =>
                favorites.includes(country.name)
        );


    document
        .querySelectorAll(".continent")
        .forEach(item =>
            item.classList.remove("active")
        );


    document.getElementById(
        "countriesTitle"
    ).textContent =
        "Favorite Countries";


    render(filtered);

}


document.getElementById(
    "favoritesBtn"
).addEventListener(
    "click",
    showFavorites
);


document.getElementById(
    "favoritesTop"
).addEventListener(
    "click",
    showFavorites
);


function randomCountry(){

    const country =
        countries[
            Math.floor(
                Math.random() *
                countries.length
            )
        ];


    openCountry(country.name);

}


document.getElementById(
    "randomBtn"
).addEventListener(
    "click",
    randomCountry
);


document.getElementById(
    "randomTop"
).addEventListener(
    "click",
    randomCountry
);


document.getElementById(
    "closeModal"
).addEventListener(
    "click",
    () => {

        document
            .getElementById("modal")
            .classList.remove("show");

    }
);


document.getElementById(
    "modal"
).addEventListener(
    "click",
    event => {

        if(event.target.id === "modal"){

            document
                .getElementById("modal")
                .classList.remove("show");

        }

    }
);


function showToast(message){

    const toast =
        document.getElementById("toast");


    toast.textContent = message;


    toast.classList.add("show");


    setTimeout(
        () => {

            toast.classList.remove("show");

        },
        1800
    );

}


render(countries);
