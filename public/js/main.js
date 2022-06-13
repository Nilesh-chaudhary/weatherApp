const submitBtn = document.getElementById('submitBtn');


const getInfo = (event) => {
    event.preventDefault(); // by this the page wont relod after submitting
    alert("hiiii");
};


submitBtn.addEventListener('click',getInfo);
