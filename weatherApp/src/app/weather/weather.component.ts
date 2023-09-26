import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  apiKey = "3c414ac92db0fcf46c54fc734865d66b";
  apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=rajahmundry&appid=3c414ac92db0fcf46c54fc734865d66b&units=metric";
  searchBox = document.querySelector(".searchCity");
  searchBtn = document.querySelector(".searchBtn");

  async weatherApi(city:string){
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c414ac92db0fcf46c54fc734865d66b&units=metric` );
      // console.log("data",response);
      const data = await response.json();
      

      const cityElement = document.querySelector(".city");
      if (cityElement) {
        cityElement.innerHTML = data.name;
      } else {
        console.error("Element with class 'city' not found.");
      }

      const tempElement = document.querySelector(".temp");
      if (tempElement) {
        tempElement.innerHTML = Math.round(data.main.temp) + "°C";
      } else {
        console.error("Element with class 'temp' not found.");
      }

      const humidityElement = document.querySelector(".humidity");
      if (humidityElement) {
        humidityElement.innerHTML = data.main.humidity + "%";
      } else {
        console.error("Element with class 'humidity' not found.");
      }

      const windSpeedEle = document.querySelector(".windSpeed");
      if (windSpeedEle) {
        windSpeedEle.innerHTML = data.wind.speed + "km/p";
      } else {
        console.error("Element with class 'windSpeed' not found.");
      }

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  onSearchBtnClick() {
    this.weatherApi(this.city);
  }
}
