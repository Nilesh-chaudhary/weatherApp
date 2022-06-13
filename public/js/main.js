const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault(); // by this the page wont relod after submitting
    let cityVal = cityName.value;
    
    if (cityVal === "") {
        city_name.innerText = `Please write name before search`;
        datahide.classList.add('data_hide');
        
    }else{
        try {
            let cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityVal}&limit=1&appid=96fba45ff1bff9d424fecdf04d462101`;
            const responseCity = await fetch(cityUrl);
            const response2 = await responseCity.json();
            const lati = response2[0].lat;
            const long = response2[0].lon;
            
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&units=metric&appid=96fba45ff1bff9d424fecdf04d462101`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log([data]);

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear"){
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color :#eccc68"></i>`;
            } 
            else if (tempMood == "Cloud"){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud" style="color :#f1f2f6"></i>`;
            }
            else if (tempMood == "Rain"){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy style="color :#a4b0be""></i>`;
            }
            else{
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color :#eccc68"></i>`;
            }
            datahide.classList.remove('data_hide');

        } catch (error) {

            city_name.innerText = `plz enter city name properly`;
            datahide.classList.add('data_hide');
        }
        
    }


};


submitBtn.addEventListener('click',getInfo);
