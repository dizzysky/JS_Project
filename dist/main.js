/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_f1Season__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/f1Season */ \"./src/scripts/f1Season.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Hello world!\");\n  fetch(\"http://ergast.com/api/f1/1988.json\").then(response => response.json()).then(data => {\n    const races = data.MRData.RaceTable.Races; // Extract the races array\n    const main = document.getElementById(\"main\");\n    new _scripts_f1Season__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main, races); // Create F1Season instance with the fetched races\n  }).catch(error => console.error(\"An error occurred:\", error));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFFMUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQzNCQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FDdENDLElBQUksQ0FBQ0MsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDakNGLElBQUksQ0FBQ0csSUFBSSxJQUFJO0lBQ1YsTUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNQyxJQUFJLEdBQUdiLFFBQVEsQ0FBQ2MsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUM1QyxJQUFJZix5REFBUSxDQUFDYyxJQUFJLEVBQUVKLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDL0IsQ0FBQyxDQUFDLENBQ0RNLEtBQUssQ0FBQ0MsS0FBSyxJQUFJZCxPQUFPLENBQUNjLEtBQUssQ0FBQyxvQkFBb0IsRUFBRUEsS0FBSyxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwLXNldHVwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEYxU2Vhc29uIGZyb20gXCIuL3NjcmlwdHMvZjFTZWFzb25cIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZCFcIik7XG4gICAgZmV0Y2goXCJodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvMTk4OC5qc29uXCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYWNlcyA9IGRhdGEuTVJEYXRhLlJhY2VUYWJsZS5SYWNlczsgLy8gRXh0cmFjdCB0aGUgcmFjZXMgYXJyYXlcbiAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgICAgICAgICBuZXcgRjFTZWFzb24obWFpbiwgcmFjZXMpOyAvLyBDcmVhdGUgRjFTZWFzb24gaW5zdGFuY2Ugd2l0aCB0aGUgZmV0Y2hlZCByYWNlc1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkOlwiLCBlcnJvcikpO1xufSk7XG4iXSwibmFtZXMiOlsiRjFTZWFzb24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInJhY2VzIiwiTVJEYXRhIiwiUmFjZVRhYmxlIiwiUmFjZXMiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/f1Season.js":
/*!*********************************!*\
  !*** ./src/scripts/f1Season.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ F1Season; }\n/* harmony export */ });\nconst circuitImages = {\n  \"jacarepagua\": \"https://upload.wikimedia.org/wikipedia/commons/7/75/Aut%C3%B3dromo_Internacional_Nelson_Piquet_in_Bras%C3%ADlia.svg\",\n  \"imola\": \"https://upload.wikimedia.org/wikipedia/commons/4/42/Imola.svg\",\n  \"monaco\": \"https://upload.wikimedia.org/wikipedia/commons/3/36/Monte_Carlo_Formula_1_track_map.svg\",\n  \"rodriguez\": \"https://upload.wikimedia.org/wikipedia/commons/e/ef/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez.svg\",\n  \"villeneuve\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/%C3%8Ele_Notre-Dame_%28Circuit_Gilles_Villeneuve%29.svg/2560px-%C3%8Ele_Notre-Dame_%28Circuit_Gilles_Villeneuve%29.svg.png\",\n  \"detroit\": \"https://upload.wikimedia.org/wikipedia/commons/d/df/TrackMap_Detroit-2023.png\",\n  \"ricard\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Le_Castellet_circuit_map_Formula_One_2019_and_2021_with_corner_names_English_19_07_2021.svg/1920px-Le_Castellet_circuit_map_Formula_One_2019_and_2021_with_corner_names_English_19_07_2021.svg.png\",\n  \"silverstone\": \"https://upload.wikimedia.org/wikipedia/commons/b/bd/Silverstone_Circuit_2020.png\",\n  \"hockenheimring\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hockenheim2012.svg/2560px-Hockenheim2012.svg.png\",\n  \"hungaroring\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hungaroring.svg/1920px-Hungaroring.svg.png\",\n  \"spa\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Spa-Francorchamps_of_Belgium.svg/2560px-Spa-Francorchamps_of_Belgium.svg.png\",\n  \"monza\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Monza_track_map.svg/2880px-Monza_track_map.svg.png\",\n  \"estoril\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Estoril_track_map.svg/2880px-Estoril_track_map.svg.png\",\n  \"jerez\": \"https://upload.wikimedia.org/wikipedia/commons/2/26/Jerez_GP_Circuit_2004.png\",\n  \"suzuka\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Suzuka_circuit_map--2005.svg/2560px-Suzuka_circuit_map--2005.svg.png\",\n  \"adelaide\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Adelaide_%28long_route%29.svg/2560px-Adelaide_%28long_route%29.svg.png\"\n};\nconst driverHeadshots = {\n  \"prost\": \"https://cdn.images.autosport.com/f1greatestdrivers/mug/1955022400.jpg\",\n  \"berger\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKdVutc1doaeJGomCW6sXtWArB_b_s9ClSYME48lBNM5FJdWk5NKn0C9zxKhswt_jwpo&usqp=CAU\",\n  \"senna\": \"https://s.wsj.net/public/resources/images/B3-DW970_CAPTAI_FR_20190503142818.jpg\"\n};\nconst podiums1988 = [{\n  constructor: 'McLaren-Honda',\n  podiums: 25\n}, {\n  constructor: 'Ferrari',\n  podiums: 10\n}, {\n  constructor: 'Lotus-Honda',\n  podiums: 3\n}, {\n  constructor: 'Benetton-Ford',\n  podiums: 3\n}, {\n  constructor: 'Arrows-Megatron',\n  podiums: 1\n}, {\n  constructor: 'March-Judd',\n  podiums: 1\n}];\nconst constructorColors = {\n  'McLaren-Honda': '#c20619',\n  'Ferrari': '#ff2800',\n  'Lotus-Honda': '#00A800',\n  'Arrows-Megatron': '#6a160b',\n  'March-Judd': '#9cd5e8'\n\n  // etc.\n};\n\nclass F1Season {\n  constructor(mainElement, races) {\n    this.mainElement = mainElement;\n    this.races = races; // Store the races array\n    this.initializeRaces();\n    this.initializeSeasonStats();\n  }\n  initializeRaces() {\n    const raceNav = document.getElementById('race-nav');\n    this.races.forEach((race, index) => {\n      // use this.races instead of races\n      const raceLink = document.createElement('a');\n      raceLink.href = '#';\n      raceLink.textContent = `${race.raceName} - ${race.Circuit.circuitId}`;\n      raceLink.addEventListener('click', e => {\n        e.preventDefault();\n        this.fetchRaceDetails(index).then(details => {\n          this.populateMainContent(details);\n        });\n      });\n      raceNav.appendChild(raceLink);\n    });\n  }\n  fetchRaceDetails(index) {\n    const url = `http://ergast.com/api/f1/1988/${index + 1}/results.json`;\n    return fetch(url).then(response => response.json()).then(data => {\n      const raceDetails = data.MRData.RaceTable.Races[0];\n      return raceDetails;\n    }).catch(error => console.error(\"An error occurred:\", error));\n  }\n  populateMainContent(details) {\n    const mainContent = document.getElementById('race-content');\n    const circuitImageURL = circuitImages[details.Circuit.circuitId];\n    let resultsHTML = ''; // Initialize resultsHTML variable\n\n    details.Results.slice(0, 10).forEach((result, index) => {\n      let headshotHTML = '';\n      if (index < 3) {\n        const headshotURL = driverHeadshots[result.Driver.driverId];\n        headshotHTML = `<img src=\"${headshotURL}\" alt=\"${result.Driver.givenName} ${result.Driver.familyName}\" style=\"width: 100px;\" />`;\n      }\n      resultsHTML += `\n                <div>\n                    ${headshotHTML}\n                    <h3>${result.Driver.givenName} ${result.Driver.familyName} - ${result.Constructor.name}</h3>\n                    <p>Position: ${result.position}</p>\n                    <p>Time: ${result.Time ? result.Time.time : 'N/A'}</p>\n                    <a href=\"${result.Driver.url}\">Driver Profile</a>\n                    <a href=\"${result.Constructor.url}\">Constructor Profile</a>\n                </div>\n            `;\n    });\n    mainContent.innerHTML = `\n            <h1>${details.raceName}</h1>\n            <img src=\"${circuitImageURL}\" width=\"300\" alt=\"Track Configuration\" /> <!-- Include the image here -->\n            <p>Circuit: ${details.Circuit.circuitName}</p>\n            <p>Location: ${details.Circuit.Location.locality}, ${details.Circuit.Location.country}</p>\n            <p>Date: ${details.date}</p>\n            ${resultsHTML} <!-- Append the results HTML here -->\n        `;\n  }\n  initializeSeasonStats() {\n    const mainContent = document.getElementById('race-content');\n    // Clear existing content\n    mainContent.innerHTML = '';\n\n    // Create a container for the chart\n    const chartContainer = document.createElement('div');\n    chartContainer.style.width = '500px'; // Set the width you want here\n    chartContainer.style.height = '300px'; // Set the height you want here\n    mainContent.appendChild(chartContainer); // Add the container to the main content area\n\n    const canvas = chartContainer.appendChild(document.createElement('canvas'));\n    const podiumsData = podiums1988.map(item => item.podiums);\n    const constructorNames = podiums1988.map(item => item.constructor);\n    const backgroundColors = podiums1988.map(item => constructorColors[item.constructor]);\n    const ctx = canvas.getContext('2d');\n    new Chart(ctx, {\n      type: 'bar',\n      data: {\n        labels: podiums1988.map(item => item.constructor),\n        datasets: [{\n          label: 'Podium Wins by Constructor',\n          data: podiums1988.map(item => item.podiums),\n          backgroundColor: backgroundColors,\n          // Example color\n          borderColor: 'rgba(0, 0, 0, 0.1)',\n          // Example color\n          borderWidth: 1\n        }]\n      },\n      options: {\n        plugins: {\n          legend: {\n            display: false // This will hide the label\n          },\n\n          title: {\n            display: true,\n            text: 'Podium Wins by Constructor' // This will set the chart title\n          }\n        },\n\n        responsive: true,\n        maintainAspectRatio: false // Allow the chart to fit the container without maintaining its aspect ratio\n      }\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxvQkFBb0I7VUFBRTtVQUNuQ0MsV0FBVyxFQUFFO1FBQ2pCLENBQUM7TUFDTCxDQUFDO01BQ0RDLE9BQU8sRUFBRTtRQUNMQyxPQUFPLEVBQUU7VUFDTEMsTUFBTSxFQUFFO1lBQ0pDLE9BQU8sRUFBRSxLQUFLLENBQUM7VUFDbkIsQ0FBQzs7VUFDREMsS0FBSyxFQUFFO1lBQ0hELE9BQU8sRUFBRSxJQUFJO1lBQ2JFLElBQUksRUFBRSw0QkFBNEIsQ0FBQztVQUN2QztRQUNKLENBQUM7O1FBQ0RDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7TUFDL0I7SUFDSixDQUFDLENBQUM7RUFDTjtBQUlKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwLXNldHVwLy4vc3JjL3NjcmlwdHMvZjFTZWFzb24uanM/MmVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaXJjdWl0SW1hZ2VzID0ge1xuICAgIFwiamFjYXJlcGFndWFcIjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzcvNzUvQXV0JUMzJUIzZHJvbW9fSW50ZXJuYWNpb25hbF9OZWxzb25fUGlxdWV0X2luX0JyYXMlQzMlQURsaWEuc3ZnXCIsXG4gICAgXCJpbW9sYVwiOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNC80Mi9JbW9sYS5zdmdcIixcbiAgICBcIm1vbmFjb1wiOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMy8zNi9Nb250ZV9DYXJsb19Gb3JtdWxhXzFfdHJhY2tfbWFwLnN2Z1wiLFxuICAgIFwicm9kcmlndWV6XCI6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9lL2VmL0F1dCVDMyVCM2Ryb21vX0hlcm1hbm9zX1JvZHIlQzMlQURndWV6LnN2Z1wiLFxuICAgIFwidmlsbGVuZXV2ZVwiOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZi9mOS8lQzMlOEVsZV9Ob3RyZS1EYW1lXyUyOENpcmN1aXRfR2lsbGVzX1ZpbGxlbmV1dmUlMjkuc3ZnLzI1NjBweC0lQzMlOEVsZV9Ob3RyZS1EYW1lXyUyOENpcmN1aXRfR2lsbGVzX1ZpbGxlbmV1dmUlMjkuc3ZnLnBuZ1wiLFxuICAgIFwiZGV0cm9pdFwiOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kZi9UcmFja01hcF9EZXRyb2l0LTIwMjMucG5nXCIsXG4gICAgXCJyaWNhcmRcIjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2YvZjIvTGVfQ2FzdGVsbGV0X2NpcmN1aXRfbWFwX0Zvcm11bGFfT25lXzIwMTlfYW5kXzIwMjFfd2l0aF9jb3JuZXJfbmFtZXNfRW5nbGlzaF8xOV8wN18yMDIxLnN2Zy8xOTIwcHgtTGVfQ2FzdGVsbGV0X2NpcmN1aXRfbWFwX0Zvcm11bGFfT25lXzIwMTlfYW5kXzIwMjFfd2l0aF9jb3JuZXJfbmFtZXNfRW5nbGlzaF8xOV8wN18yMDIxLnN2Zy5wbmdcIixcbiAgICBcInNpbHZlcnN0b25lXCI6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9iL2JkL1NpbHZlcnN0b25lX0NpcmN1aXRfMjAyMC5wbmdcIixcbiAgICBcImhvY2tlbmhlaW1yaW5nXCI6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9lL2U1L0hvY2tlbmhlaW0yMDEyLnN2Zy8yNTYwcHgtSG9ja2VuaGVpbTIwMTIuc3ZnLnBuZ1wiLFxuICAgIFwiaHVuZ2Fyb3JpbmdcIjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzkvOTEvSHVuZ2Fyb3Jpbmcuc3ZnLzE5MjBweC1IdW5nYXJvcmluZy5zdmcucG5nXCIsXG4gICAgXCJzcGFcIjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNTQvU3BhLUZyYW5jb3JjaGFtcHNfb2ZfQmVsZ2l1bS5zdmcvMjU2MHB4LVNwYS1GcmFuY29yY2hhbXBzX29mX0JlbGdpdW0uc3ZnLnBuZ1wiLFxuICAgIFwibW9uemFcIjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2YvZjgvTW9uemFfdHJhY2tfbWFwLnN2Zy8yODgwcHgtTW9uemFfdHJhY2tfbWFwLnN2Zy5wbmdcIixcbiAgICBcImVzdG9yaWxcIjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzMvMzkvRXN0b3JpbF90cmFja19tYXAuc3ZnLzI4ODBweC1Fc3RvcmlsX3RyYWNrX21hcC5zdmcucG5nXCIsXG4gICAgXCJqZXJlelwiOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMi8yNi9KZXJlel9HUF9DaXJjdWl0XzIwMDQucG5nXCIsXG4gICAgXCJzdXp1a2FcIjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2UvZWMvU3V6dWthX2NpcmN1aXRfbWFwLS0yMDA1LnN2Zy8yNTYwcHgtU3V6dWthX2NpcmN1aXRfbWFwLS0yMDA1LnN2Zy5wbmdcIixcbiAgICBcImFkZWxhaWRlXCI6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi80LzQ5L0FkZWxhaWRlXyUyOGxvbmdfcm91dGUlMjkuc3ZnLzI1NjBweC1BZGVsYWlkZV8lMjhsb25nX3JvdXRlJTI5LnN2Zy5wbmdcIlxuXG59XG5cbmNvbnN0IGRyaXZlckhlYWRzaG90cyA9IHtcbiAgICBcInByb3N0XCI6IFwiaHR0cHM6Ly9jZG4uaW1hZ2VzLmF1dG9zcG9ydC5jb20vZjFncmVhdGVzdGRyaXZlcnMvbXVnLzE5NTUwMjI0MDAuanBnXCIsXG4gICAgXCJiZXJnZXJcIjogXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTR0tkVnV0YzFkb2FlSkdvbUNXNnNYdFdBckJfYl9zOUNsU1lNRTQ4bEJOTTVGSmRXazVOS24wQzl6eEtoc3d0X2p3cG8mdXNxcD1DQVVcIixcbiAgICBcInNlbm5hXCI6IFwiaHR0cHM6Ly9zLndzai5uZXQvcHVibGljL3Jlc291cmNlcy9pbWFnZXMvQjMtRFc5NzBfQ0FQVEFJX0ZSXzIwMTkwNTAzMTQyODE4LmpwZ1wiXG5cbn1cblxuXG5jb25zdCBwb2RpdW1zMTk4OCA9IFtcbiAgICB7IGNvbnN0cnVjdG9yOiAnTWNMYXJlbi1Ib25kYScsIHBvZGl1bXM6IDI1IH0sXG4gICAgeyBjb25zdHJ1Y3RvcjogJ0ZlcnJhcmknLCBwb2RpdW1zOiAxMCB9LFxuICAgIHsgY29uc3RydWN0b3I6ICdMb3R1cy1Ib25kYScsIHBvZGl1bXM6IDMgfSxcbiAgICB7IGNvbnN0cnVjdG9yOiAnQmVuZXR0b24tRm9yZCcsIHBvZGl1bXM6IDMgfSxcbiAgICB7IGNvbnN0cnVjdG9yOiAnQXJyb3dzLU1lZ2F0cm9uJywgcG9kaXVtczogMSB9LFxuICAgIHsgY29uc3RydWN0b3I6ICdNYXJjaC1KdWRkJywgcG9kaXVtczogMSB9XG5dOyAgXG5cblxuY29uc3QgY29uc3RydWN0b3JDb2xvcnMgPSB7XG4gICAgJ01jTGFyZW4tSG9uZGEnOiAnI2MyMDYxOScsXG4gICAgJ0ZlcnJhcmknOiAnI2ZmMjgwMCcsXG4gICAgJ0xvdHVzLUhvbmRhJzogJyMwMEE4MDAnLFxuICAgICdBcnJvd3MtTWVnYXRyb24nOiAnIzZhMTYwYicsXG4gICAgJ01hcmNoLUp1ZGQnOiAnIzljZDVlOCdcblxuICAgIC8vIGV0Yy5cbn07XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEYxU2Vhc29uIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluRWxlbWVudCwgcmFjZXMpIHtcbiAgICAgICAgdGhpcy5tYWluRWxlbWVudCA9IG1haW5FbGVtZW50O1xuICAgICAgICB0aGlzLnJhY2VzID0gcmFjZXM7IC8vIFN0b3JlIHRoZSByYWNlcyBhcnJheVxuICAgICAgICB0aGlzLmluaXRpYWxpemVSYWNlcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVTZWFzb25TdGF0cygpO1xuICAgIH1cblxuXG5cbiAgICBpbml0aWFsaXplUmFjZXMoKSB7XG4gICAgICAgIGNvbnN0IHJhY2VOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFjZS1uYXYnKTtcbiAgICAgICAgdGhpcy5yYWNlcy5mb3JFYWNoKChyYWNlLCBpbmRleCkgPT4geyAvLyB1c2UgdGhpcy5yYWNlcyBpbnN0ZWFkIG9mIHJhY2VzXG4gICAgICAgICAgICBjb25zdCByYWNlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIHJhY2VMaW5rLmhyZWYgPSAnIyc7XG4gICAgICAgICAgICByYWNlTGluay50ZXh0Q29udGVudCA9IGAke3JhY2UucmFjZU5hbWV9IC0gJHtyYWNlLkNpcmN1aXQuY2lyY3VpdElkfWA7IFxuICAgICAgICAgICAgcmFjZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaFJhY2VEZXRhaWxzKGluZGV4KS50aGVuKChkZXRhaWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlTWFpbkNvbnRlbnQoZGV0YWlscyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICByYWNlTmF2LmFwcGVuZENoaWxkKHJhY2VMaW5rKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmZXRjaFJhY2VEZXRhaWxzKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvMTk4OC8ke2luZGV4ICsgMX0vcmVzdWx0cy5qc29uYDtcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmFjZURldGFpbHMgPSBkYXRhLk1SRGF0YS5SYWNlVGFibGUuUmFjZXNbMF07XG4gICAgICAgICAgICByZXR1cm4gcmFjZURldGFpbHM7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkOlwiLCBlcnJvcikpO1xuICAgIH1cblxuXG5cblxuICAgIHBvcHVsYXRlTWFpbkNvbnRlbnQoZGV0YWlscykge1xuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWNlLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgY2lyY3VpdEltYWdlVVJMID0gY2lyY3VpdEltYWdlc1tkZXRhaWxzLkNpcmN1aXQuY2lyY3VpdElkXTtcbiAgICAgICAgbGV0IHJlc3VsdHNIVE1MID0gJyc7IC8vIEluaXRpYWxpemUgcmVzdWx0c0hUTUwgdmFyaWFibGVcblxuICAgICAgICBkZXRhaWxzLlJlc3VsdHMuc2xpY2UoMCwxMCkuZm9yRWFjaCgocmVzdWx0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGhlYWRzaG90SFRNTCA9ICcnOyBcbiAgICBcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkc2hvdFVSTCA9IGRyaXZlckhlYWRzaG90c1tyZXN1bHQuRHJpdmVyLmRyaXZlcklkXTsgXG4gICAgICAgICAgICAgICAgaGVhZHNob3RIVE1MID0gYDxpbWcgc3JjPVwiJHtoZWFkc2hvdFVSTH1cIiBhbHQ9XCIke3Jlc3VsdC5Ecml2ZXIuZ2l2ZW5OYW1lfSAke3Jlc3VsdC5Ecml2ZXIuZmFtaWx5TmFtZX1cIiBzdHlsZT1cIndpZHRoOiAxMDBweDtcIiAvPmA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXN1bHRzSFRNTCArPSBgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgJHtoZWFkc2hvdEhUTUx9XG4gICAgICAgICAgICAgICAgICAgIDxoMz4ke3Jlc3VsdC5Ecml2ZXIuZ2l2ZW5OYW1lfSAke3Jlc3VsdC5Ecml2ZXIuZmFtaWx5TmFtZX0gLSAke3Jlc3VsdC5Db25zdHJ1Y3Rvci5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBvc2l0aW9uOiAke3Jlc3VsdC5wb3NpdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlRpbWU6ICR7cmVzdWx0LlRpbWUgPyByZXN1bHQuVGltZS50aW1lIDogJ04vQSd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtyZXN1bHQuRHJpdmVyLnVybH1cIj5Ecml2ZXIgUHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7cmVzdWx0LkNvbnN0cnVjdG9yLnVybH1cIj5Db25zdHJ1Y3RvciBQcm9maWxlPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGgxPiR7ZGV0YWlscy5yYWNlTmFtZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2NpcmN1aXRJbWFnZVVSTH1cIiB3aWR0aD1cIjMwMFwiIGFsdD1cIlRyYWNrIENvbmZpZ3VyYXRpb25cIiAvPiA8IS0tIEluY2x1ZGUgdGhlIGltYWdlIGhlcmUgLS0+XG4gICAgICAgICAgICA8cD5DaXJjdWl0OiAke2RldGFpbHMuQ2lyY3VpdC5jaXJjdWl0TmFtZX08L3A+XG4gICAgICAgICAgICA8cD5Mb2NhdGlvbjogJHtkZXRhaWxzLkNpcmN1aXQuTG9jYXRpb24ubG9jYWxpdHl9LCAke2RldGFpbHMuQ2lyY3VpdC5Mb2NhdGlvbi5jb3VudHJ5fTwvcD5cbiAgICAgICAgICAgIDxwPkRhdGU6ICR7ZGV0YWlscy5kYXRlfTwvcD5cbiAgICAgICAgICAgICR7cmVzdWx0c0hUTUx9IDwhLS0gQXBwZW5kIHRoZSByZXN1bHRzIEhUTUwgaGVyZSAtLT5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplU2Vhc29uU3RhdHMoKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhY2UtY29udGVudCcpO1xuICAgICAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgICAgICAvLyBDcmVhdGUgYSBjb250YWluZXIgZm9yIHRoZSBjaGFydFxuICAgICAgICBjb25zdCBjaGFydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGFydENvbnRhaW5lci5zdHlsZS53aWR0aCA9ICc1MDBweCc7IC8vIFNldCB0aGUgd2lkdGggeW91IHdhbnQgaGVyZVxuICAgICAgICBjaGFydENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMzAwcHgnOyAvLyBTZXQgdGhlIGhlaWdodCB5b3Ugd2FudCBoZXJlXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNoYXJ0Q29udGFpbmVyKTsgLy8gQWRkIHRoZSBjb250YWluZXIgdG8gdGhlIG1haW4gY29udGVudCBhcmVhXG4gICAgXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNoYXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpKTtcblxuICAgICAgICBjb25zdCBwb2RpdW1zRGF0YSA9IHBvZGl1bXMxOTg4Lm1hcChpdGVtID0+IGl0ZW0ucG9kaXVtcyk7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yTmFtZXMgPSBwb2RpdW1zMTk4OC5tYXAoaXRlbSA9PiBpdGVtLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9ycyA9IHBvZGl1bXMxOTg4Lm1hcChpdGVtID0+IGNvbnN0cnVjdG9yQ29sb3JzW2l0ZW0uY29uc3RydWN0b3JdKTtcblxuICAgIFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiBwb2RpdW1zMTk4OC5tYXAoaXRlbSA9PiBpdGVtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQb2RpdW0gV2lucyBieSBDb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHBvZGl1bXMxOTg4Lm1hcChpdGVtID0+IGl0ZW0ucG9kaXVtcyksXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9ycywgLy8gRXhhbXBsZSBjb2xvclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4xKScsIC8vIEV4YW1wbGUgY29sb3JcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UgLy8gVGhpcyB3aWxsIGhpZGUgdGhlIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1BvZGl1bSBXaW5zIGJ5IENvbnN0cnVjdG9yJyAvLyBUaGlzIHdpbGwgc2V0IHRoZSBjaGFydCB0aXRsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlIC8vIEFsbG93IHRoZSBjaGFydCB0byBmaXQgdGhlIGNvbnRhaW5lciB3aXRob3V0IG1haW50YWluaW5nIGl0cyBhc3BlY3QgcmF0aW9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxufVxuIl0sIm5hbWVzIjpbImNpcmN1aXRJbWFnZXMiLCJkcml2ZXJIZWFkc2hvdHMiLCJwb2RpdW1zMTk4OCIsImNvbnN0cnVjdG9yIiwicG9kaXVtcyIsImNvbnN0cnVjdG9yQ29sb3JzIiwiRjFTZWFzb24iLCJtYWluRWxlbWVudCIsInJhY2VzIiwiaW5pdGlhbGl6ZVJhY2VzIiwiaW5pdGlhbGl6ZVNlYXNvblN0YXRzIiwicmFjZU5hdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JFYWNoIiwicmFjZSIsImluZGV4IiwicmFjZUxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInRleHRDb250ZW50IiwicmFjZU5hbWUiLCJDaXJjdWl0IiwiY2lyY3VpdElkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoUmFjZURldGFpbHMiLCJ0aGVuIiwiZGV0YWlscyIsInBvcHVsYXRlTWFpbkNvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInVybCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInJhY2VEZXRhaWxzIiwiTVJEYXRhIiwiUmFjZVRhYmxlIiwiUmFjZXMiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsIm1haW5Db250ZW50IiwiY2lyY3VpdEltYWdlVVJMIiwicmVzdWx0c0hUTUwiLCJSZXN1bHRzIiwic2xpY2UiLCJyZXN1bHQiLCJoZWFkc2hvdEhUTUwiLCJoZWFkc2hvdFVSTCIsIkRyaXZlciIsImRyaXZlcklkIiwiZ2l2ZW5OYW1lIiwiZmFtaWx5TmFtZSIsIkNvbnN0cnVjdG9yIiwibmFtZSIsInBvc2l0aW9uIiwiVGltZSIsInRpbWUiLCJpbm5lckhUTUwiLCJjaXJjdWl0TmFtZSIsIkxvY2F0aW9uIiwibG9jYWxpdHkiLCJjb3VudHJ5IiwiZGF0ZSIsImNoYXJ0Q29udGFpbmVyIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhcyIsInBvZGl1bXNEYXRhIiwibWFwIiwiaXRlbSIsImNvbnN0cnVjdG9yTmFtZXMiLCJiYWNrZ3JvdW5kQ29sb3JzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkNoYXJ0IiwidHlwZSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwib3B0aW9ucyIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwidGl0bGUiLCJ0ZXh0IiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/f1Season.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Atc2V0dXAvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;