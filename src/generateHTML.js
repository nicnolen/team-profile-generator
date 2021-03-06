// Function to generate the team cards
const generateCards = team => {
  // card array
  let cardArr = [];

  // loop through the team
  for (let i = 0; i < team.length; i++) {
    const employee = team[i];
    const role = employee.getRole();

    // if the employee's role is a manager, make the manager card
    if (role === 'Manager') {
      const managerCard = generateManager(employee);

      // push the manager card to the card array
      cardArr.push(managerCard);
    } // if the employee's role is an engineer, make the engineer card
    else if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);

      cardArr.push(engineerCard);
    } // if the employee's role is an intern, make the intern card
    else if (role === 'Intern') {
      const internCard = generateIntern(employee);

      cardArr.push(internCard);
    }
  }
  // make the card array into strings
  const cards = cardArr.join('');

  // return to the generated page
  const generateTeam = generateHTML(cards);
  return generateTeam;
};

// Generate Manager card
const generateManager = function (manager) {
  return `
    <div class="col-12 col-sm-5 col-md-3 m-3">
      <div class="card h-100">
        <div class="card-heading card-header">
          <h3>${manager.name}</h3>
          <i class="material-icons">local_cafe</i><h4 class="role">Manager</h4>
        </div>

        <div class="card-body bg-light">
          <ul class="list-group">
            <li class="id list-group-item"><b>ID:</b> ${manager.id}</li>
            <li class="email list-group-item"><b>Email:</b> <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="officeNumber list-group-item"><b>Office Number:</b> ${manager.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
};

// Generate Engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="col-12 col-sm-5 col-md-3 m-3">
      <div class="card h-100">
        <div class="card-heading card-header">
          <h3>${engineer.name}</h3>
          <i class="material-icons">engineering</i><h4 class="role">Engineer</h4>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group">
            <li class="id list-group-item"><b>ID:</b> ${engineer.id}</li>
            <li class="email list-group-item"><b>Email:</b> <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="github list-group-item"><b>GitHub:</b> <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
          </ul>
        </div>
      </div>
    </div>
    `;
};

// Generate Intern card
const generateIntern = function (intern) {
  return `
    <div class="col-12 col-sm-5 col-md-3 m-3">
      <div class="card h-100">
        <div class="card-heading card-header">
          <h3>${intern.name}</h3>
          <i class="material-icons">school</i><h4 class="role">Intern</h4>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group">
            <li class="id list-group-item"><b>ID:</b> ${intern.id}</li>
            <li class="email list-group-item"><b>Email:</b> <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="school list-group-item"><b>School:</b> ${intern.school}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
};

// Generate the HTML page with the employee cards
const generateHTML = function (employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Staatliches&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header class="row">
        <h1 class="title col-12 m-0 p-4 bg-danger text-white text-center font-weight-bolder">Team Members</h1>
      </header>

      <main>
        <div class="row justify-content-center flex-wrap-wrap">
          ${employeeCards}
        </div>
      </main>
    </body>
    </html>
    `;
};
// Export this file to other files
module.exports = generateCards;
