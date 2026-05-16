// Sidebar switching
function changeSection(element,name){

document.querySelectorAll(".sidebar li")
.forEach(li=>li.classList.remove("active"));

element.classList.add("active");

document.getElementById("title").innerText=name;
}


// Dark Mode
function toggleDarkMode(){
document.body.classList.toggle("dark");
}


// Animated Counters
function animate(id,value,suffix=""){
let count=0;
let interval=setInterval(()=>{
count++;
document.getElementById(id).innerText=count+suffix;
if(count>=value) clearInterval(interval);
},20);
}

animate("studentsCount",520);
animate("facultyCount",48);
animate("attendanceCount",89,"%");
animate("feesCount",12,"L");


// Student Data
const students=[
{name:"Rahul",branch:"CSE",sem:6,status:"Active"},
{name:"Priya",branch:"ECE",sem:4,status:"Active"},
{name:"Aman",branch:"ME",sem:8,status:"Pending"}
];

const table=document.getElementById("studentTable");

function loadStudents(){
students.forEach(s=>{
table.innerHTML+=`
<tr>
<td>${s.name}</td>
<td>${s.branch}</td>
<td>${s.sem}</td>
<td>${s.status}</td>
</tr>`;
});
}

loadStudents();


// Add Student Button Working
function addStudent(){

let name=prompt("Enter Student Name");

if(!name) return;

students.push({
name:name,
branch:"IT",
sem:1,
status:"Active"
});

table.innerHTML=
`<tr>
<th>Name</th>
<th>Branch</th>
<th>Semester</th>
<th>Status</th>
</tr>`;

loadStudents();

alert("Student Added ✅");
}