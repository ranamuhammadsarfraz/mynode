const Input = document.querySelector(".input");
window.addEventListener("load",()=>Input.value="");
const Loader = document.querySelector(".loader");
const Form = document.querySelector(".form");
const Domain = document.querySelector(".domain");
const Registrar = document.querySelector(".registrar");
const WhoIs = document.querySelector(".whois");
const updateDate = document.querySelector(".update");
const createdDate = document.querySelector(".createdDate");
const expiredDate = document.querySelector(".expiredDate");
const server1 = document.querySelector(".server1");
const server2 = document.querySelector(".server2");
const server3 = document.querySelector(".server1");
const server4 = document.querySelector(".server2");
const DNS = document.querySelector(".DNS");
Form.addEventListener("submit", async (e)=>{
	e.preventDefault();
  Loader.style.display="block";
	const data = { username: Input.value };
fetch('/whois', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    const dataAvailable = JSON.parse(data);
    Domain.innerHTML=dataAvailable.domain_name[0];
    Registrar.innerHTML=dataAvailable.registrar;
    WhoIs.innerHTML=dataAvailable.whois_server;
    updateDate.innerHTML= new Date(dataAvailable.updated_date).toUTCString();
    createdDate.innerHTML= new Date(dataAvailable.creation_date[0]).toUTCString();
    expiredDate.innerHTML= new Date(dataAvailable.expiration_date[0]).toUTCString();
    server1.innerHTML=dataAvailable.name_servers[0]?dataAvailable.name_servers[0]:"";
    server2.innerHTML=dataAvailable.name_servers[1]?dataAvailable.name_servers[1]:"";
    server3.innerHTML=dataAvailable.name_servers[2]?dataAvailable.name_servers[2]:"";
    server4.innerHTML=dataAvailable.name_servers[3]?dataAvailable.name_servers[3]:"";
    DNS.innerHTML=dataAvailable.dnssec;
     Loader.style.display="none";
  })
  .catch((error) => {
    console.error('Error:', error);
     Loader.style.display="none";
    alert("Check domain or typed words again!")
  });
Input.value=""
})

