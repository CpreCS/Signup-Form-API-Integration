//Grabs Current Local Date for max DOB input
function maxDate(){
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2,'0');
  const dd = String(today.getDate()).padStart(2,'0');
  const formattedDate = `${yyyy}-${mm}-${dd}`;

  document.getElementById("DateOfBirth").setAttribute("max",formattedDate);
  };
maxDate();


//Fetches every country's name from an API then adds it to the country dropdown menu.
function countryAPI(){
  fetch("https://restcountries.com/v3.1/all?fields=name")
    .then(response => response.json())
    .then(data => {
      const countrySelect = document.getElementById('country');
      
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));

      data.forEach(country=> {
        const addTag = document.createElement("option")
        addTag.textContent = country.name.common;
        countrySelect.appendChild(addTag);
      });
    })
    .catch(error => console.error('Error:', error));
  };
countryAPI()

//Successful account creation
function submitted(){
  const form = document.querySelector('form');

  form.addEventListener('submit', (event)=>{

    if(!form.checkValidity()){
      event.preventDefault();
      return;
    }
    alert('Account Successfully Created');
  });
}
submitted();