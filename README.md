# FindWeather 🌦 
Projeto de um aplicativo de previsão do tempo, utilizando as APIs [**WeatherAPI**](https://www.weatherapi.com/) e [**OpenWeatherMap**](https://openweathermap.org/), desenvolvido com base no desafio do [**7 Days of Code**](https://7daysofcode.io/matricula/react-native-expo). 

<br>

## 📱 Funcionalidades

* Buscar uma cidade ou país para visualizar o clima atual
* Visualizar o clima dos próximos 5 dias
  
![Welcome](https://github.com/user-attachments/assets/90f57e2c-1d70-4c70-9207-7bb6833d3cc8)
![Home_Empty](https://github.com/user-attachments/assets/90e04d4b-7ed3-4d57-a8ee-71861b188dca)
![Home](https://github.com/user-attachments/assets/f1837d64-f5d2-4f85-aed2-e21948948a15)
![5_Dias](https://github.com/user-attachments/assets/e3bedf19-1948-4ffd-b375-e8c53b4ed119)
![Busca](https://github.com/user-attachments/assets/497da905-24de-4dd8-a242-eedfa54dfd83)
![Busca_Erro](https://github.com/user-attachments/assets/81661715-4573-4d8d-b9f9-2f5798780516)   
![FindWeather_iOS](https://github.com/user-attachments/assets/78d0aa73-9d16-40c9-b210-60139ee26d21)


## 💻 Técnicas & Tecnologias

* Linguagem: `TypeScript` 
* Frameworks: `React Native`, `Expo`
* Bibliotecas: `Axios`, `Async Storage`, `styled-components`
* APIs: `WeatherAPI`, `OpenWeatherMap`

<br>

## :gear: Configuração do Projeto

* Para executar o aplicativo são necessárias as chaves das APIs do [**WeatherAPI**](https://www.weatherapi.com/docs/#intro-getting-started) e do [**OpenWeatherMap**](https://openweathermap.org/), que podem ser obtidas após a criação da conta
* Após obter as chaves crie um arquivo com o nome `.env.local` no diretório raiz, copie e cole o código abaixo e substitua os valores `SUA_API_KEY` pelas respectivas chaves
  
   ```.env
   EXPO_PUBLIC_API_KEY_WEATHER_API=SUA_API_KEY
   EXPO_PUBLIC_API_KEY_OPEN_WEATHER=SUA_API_KEY
   ```
   
