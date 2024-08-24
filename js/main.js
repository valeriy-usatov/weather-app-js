<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wether app</title>
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <section class="weather">
        <form action="" class="form">
            <input class="input" type="text" placeholder="Enter city name">
            <button class="form__btn">
                <img src="./img/ui/search.svg" alt="search">
            </button>
        </form>
        <img src="./img/weather/cloudy.svg" class="weather__img" alt="cloudy">
        <div class="weather__temp">22°c</div>
        <div class="weather__city">Your City</div>
        <div class="weather__details">
            <section class="details">
                <img src="./img/ui/humidity.svg" alt="humidity" class="detsils__img">
                <div class="details__value" id="humidity">50%</div>
                <div class="details__title">Humidity</div>
            </section>
            <section class="details">
                <img src="./img/ui/wind-speed.svg" alt="humidity" class="detsils__img">
                <div class="details__value" id="speed">10 km/h</div>
                <div class="details__title">Wind Speed</div>
            </section>
        </div>
    </section>
    <script src="js/main.js"></script>
</body>

</html>
