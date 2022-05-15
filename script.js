const membersContainer = document.querySelectorAll('.members-container');
console.log(membersContainer);

const departments = document.querySelectorAll('.department');
console.log(departments);

for (const department of departments) {
  department.classList.add('department-card');
  department.style.borderRadius = '30px';
}
