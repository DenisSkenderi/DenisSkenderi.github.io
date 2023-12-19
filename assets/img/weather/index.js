const api = 'c5e2e748824c2b3f1da66f528bd98310';
window.addEventListener('load', () => {
    let lon;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}%7Blat%7D&lon=${lon}%7Blong%7D&appid=${api}%7Bapi%7D&units=metric`;
            console.log(base);
            fetch(base).then((response) => {
                return response.json();
            }).then((date) => {
                const place = date.name;
                const {temp} = date.main;
                const {humidity} = date.humidity;
                const {description , icon} = data.weather;
                const {sunrise, sunset} = date.sys;
                const {country} = date.sys;
                const tmz = date.timezone;
                
                const pfpUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                const sunGMT = new Date(sunrise * 1000);
                const suniGMT = new Date(sunset * 1000);

                const pfp = document.getElementById('icon');
                const local = document.getElementsByClassName('#location');
                const tem = document.querySelector('.temp');
                const hum = document.querySelector('.humi');
                const desc = document.querySelector('.desc');
                const sunDMG = document.querySelector('.sunrise');
                const sunsDMG = document.querySelector('.sunset');
                const cont = document.querySelector('.count');
                const time = document.querySelector('.timez');

                pfp.src = pfpUrl;
                local.textContent = `${place}`;
                desc.textContent = `${description}`;
                tem.textContent = `${temp.toFixed(2)} °C`;
                hum.textContent = `${humidity}`;
                sunDMG.textContent = `${sunGMT.toLocaleDateString()}, ${sunGMT.toLocaleTimeString()}`;
                sunsDMG.textContent = `${suniGMT.toLocaleDateString()}, ${suniGMT.toLocaleTimeString()}`;
                cont.textContent = `${country}`;
                time.textContent = `${tmz}`;
            })
        })
    }
})
