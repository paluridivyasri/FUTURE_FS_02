const form = document.getElementById("leadForm");
const table = document.getElementById("leadTable");

let leads = JSON.parse(localStorage.getItem("leads")) || [];

function displayLeads(){

table.innerHTML="";

leads.forEach((lead,index)=>{

table.innerHTML += `
<tr>
<td>${lead.name}</td>
<td>${lead.email}</td>
<td>${lead.source}</td>
<td>${lead.status}</td>
<td><button class="delete-btn" onclick="deleteLead(${index})">Delete</button></td>
</tr>
`;

});

document.getElementById("totalLeads").textContent = leads.length;

}

form.addEventListener("submit",function(e){

e.preventDefault();

const lead = {
name:document.getElementById("name").value,
email:document.getElementById("email").value,
source:document.getElementById("source").value,
status:document.getElementById("status").value
};

leads.push(lead);

localStorage.setItem("leads",JSON.stringify(leads));

displayLeads();

form.reset();

});

function deleteLead(index){

leads.splice(index,1);

localStorage.setItem("leads",JSON.stringify(leads));

displayLeads();

}

function toggleMode(){
document.body.classList.toggle("light-mode");
}

displayLeads();