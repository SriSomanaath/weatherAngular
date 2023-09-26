import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.weatherApi();
  }

  apiKey = "3c414ac92db0fcf46c54fc734865d66b";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=rajahmundry&appid=${this.apiKey}`;

  async weatherApi() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      console.log(data);

      const cityElement = document.querySelector(".city");
      if (cityElement) {
        cityElement.innerHTML = "rrr";
      } else {
        console.error("Element with class 'city' not found.");
      }

      const tempElement = document.querySelector(".temp");
      if (tempElement) {
        tempElement.innerHTML = "28";
      } else {
        console.error("Element with class 'temp' not found.");
      }

      const humidityElement = document.querySelector(".humidity");
      if (humidityElement) {
        humidityElement.innerHTML = "rrr";
      } else {
        console.error("Element with class 'humidity' not found.");
      }

      const windSpeedEle = document.querySelector(".windSpeed");
      if (windSpeedEle) {
        windSpeedEle.innerHTML = "rrr";
      } else {
        console.error("Element with class 'windSpeed' not found.");
      }

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
}
