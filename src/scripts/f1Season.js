const circuitImages = {
    "jacarepagua": "https://upload.wikimedia.org/wikipedia/commons/7/75/Aut%C3%B3dromo_Internacional_Nelson_Piquet_in_Bras%C3%ADlia.svg",
    "imola": "https://upload.wikimedia.org/wikipedia/commons/4/42/Imola.svg",
    "monaco": "https://upload.wikimedia.org/wikipedia/commons/3/36/Monte_Carlo_Formula_1_track_map.svg",
    "rodriguez": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez.svg",
    "villeneuve": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/%C3%8Ele_Notre-Dame_%28Circuit_Gilles_Villeneuve%29.svg/2560px-%C3%8Ele_Notre-Dame_%28Circuit_Gilles_Villeneuve%29.svg.png",
    "detroit": "https://upload.wikimedia.org/wikipedia/commons/d/df/TrackMap_Detroit-2023.png",
    "ricard": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Le_Castellet_circuit_map_Formula_One_2019_and_2021_with_corner_names_English_19_07_2021.svg/1920px-Le_Castellet_circuit_map_Formula_One_2019_and_2021_with_corner_names_English_19_07_2021.svg.png",
    "silverstone": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Silverstone_Circuit_2020.png",
    "hockenheimring": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hockenheim2012.svg/2560px-Hockenheim2012.svg.png",
    "hungaroring": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hungaroring.svg/1920px-Hungaroring.svg.png",
    "spa": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Spa-Francorchamps_of_Belgium.svg/2560px-Spa-Francorchamps_of_Belgium.svg.png",
    "monza": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Monza_track_map.svg/2880px-Monza_track_map.svg.png",
    "estoril": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Estoril_track_map.svg/2880px-Estoril_track_map.svg.png",
    "jerez": "https://upload.wikimedia.org/wikipedia/commons/2/26/Jerez_GP_Circuit_2004.png",
    "suzuka": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Suzuka_circuit_map--2005.svg/2560px-Suzuka_circuit_map--2005.svg.png",
    "adelaide": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Adelaide_%28long_route%29.svg/2560px-Adelaide_%28long_route%29.svg.png"

}

const driverHeadshots = {
    "prost": "https://cdn.images.autosport.com/f1greatestdrivers/mug/1955022400.jpg",
    "berger": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKdVutc1doaeJGomCW6sXtWArB_b_s9ClSYME48lBNM5FJdWk5NKn0C9zxKhswt_jwpo&usqp=CAU",
    "senna": "https://s.wsj.net/public/resources/images/B3-DW970_CAPTAI_FR_20190503142818.jpg"

}


const podiums1988 = [
    { constructor: 'McLaren-Honda', podiums: 25 },
    { constructor: 'Ferrari', podiums: 10 },
    { constructor: 'Lotus-Honda', podiums: 3 },
    { constructor: 'Benetton-Ford', podiums: 3 },
    { constructor: 'Arrows-Megatron', podiums: 1 },
    { constructor: 'March-Judd', podiums: 1 }
];  


const constructorColors = {
    'McLaren-Honda': '#c20619',
    'Ferrari': '#ff2800',
    'Lotus-Honda': '#00A800',
    'Arrows-Megatron': '#6a160b',
    'March-Judd': '#9cd5e8'

    // etc.
};




export default class F1Season {
    constructor(mainElement, races) {
        this.mainElement = mainElement;
        this.races = races; // Store the races array
        this.initializeRaces();
        this.initializeSeasonStats();
    }



    initializeRaces() {
        const raceNav = document.getElementById('race-nav');
        this.races.forEach((race, index) => { // use this.races instead of races
            const raceLink = document.createElement('a');
            raceLink.href = '#';
            raceLink.textContent = `${race.raceName} - ${race.Circuit.circuitId}`; 
            raceLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.fetchRaceDetails(index).then((details) => {
            this.populateMainContent(details);
            });
        });
            raceNav.appendChild(raceLink);
        });
    }


    fetchRaceDetails(index) {
        const url = `http://ergast.com/api/f1/1988/${index + 1}/results.json`;
        return fetch(url)
            .then(response => response.json())
            .then(data => {
            const raceDetails = data.MRData.RaceTable.Races[0];
            return raceDetails;
        })
            .catch(error => console.error("An error occurred:", error));
    }




    populateMainContent(details) {
        const mainContent = document.getElementById('race-content');
        const circuitImageURL = circuitImages[details.Circuit.circuitId];
        let resultsHTML = ''; // Initialize resultsHTML variable

        details.Results.slice(0,10).forEach((result, index) => {
            let headshotHTML = ''; 
    
            if (index < 3) {
                const headshotURL = driverHeadshots[result.Driver.driverId]; 
                headshotHTML = `<img src="${headshotURL}" alt="${result.Driver.givenName} ${result.Driver.familyName}" style="width: 100px;" />`;
            }
    
            resultsHTML += `
                <div>
                    ${headshotHTML}
                    <h3>${result.Driver.givenName} ${result.Driver.familyName} - ${result.Constructor.name}</h3>
                    <p>Position: ${result.position}</p>
                    <p>Time: ${result.Time ? result.Time.time : 'N/A'}</p>
                    <a href="${result.Driver.url}">Driver Profile</a>
                    <a href="${result.Constructor.url}">Constructor Profile</a>
                </div>
            `;
        });

        mainContent.innerHTML = `
            <h1>${details.raceName}</h1>
            <img src="${circuitImageURL}" width="300" alt="Track Configuration" /> <!-- Include the image here -->
            <p>Circuit: ${details.Circuit.circuitName}</p>
            <p>Location: ${details.Circuit.Location.locality}, ${details.Circuit.Location.country}</p>
            <p>Date: ${details.date}</p>
            ${resultsHTML} <!-- Append the results HTML here -->
        `;
    }

    initializeSeasonStats() {
        const mainContent = document.getElementById('race-content');
        // Clear existing content
        mainContent.innerHTML = '';
    
        // Create a container for the chart
        const chartContainer = document.createElement('div');
        chartContainer.style.width = '500px'; // Set the width you want here
        chartContainer.style.height = '300px'; // Set the height you want here
        mainContent.appendChild(chartContainer); // Add the container to the main content area
    
        const canvas = chartContainer.appendChild(document.createElement('canvas'));

        const podiumsData = podiums1988.map(item => item.podiums);
        const constructorNames = podiums1988.map(item => item.constructor);
        const backgroundColors = podiums1988.map(item => constructorColors[item.constructor]);

    
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: podiums1988.map(item => item.constructor),
                datasets: [{
                    label: 'Podium Wins by Constructor',
                    data: podiums1988.map(item => item.podiums),
                    backgroundColor: backgroundColors, // Example color
                    borderColor: 'rgba(0, 0, 0, 0.1)', // Example color
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false // This will hide the label
                    },
                    title: {
                        display: true,
                        text: 'Podium Wins by Constructor' // This will set the chart title
                    }
                },
                responsive: true,
                maintainAspectRatio: false // Allow the chart to fit the container without maintaining its aspect ratio
            }
        });
    }
    
    
    
}
