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
    <h3>${manager.name}</h3>
    `;
};

// Generate Engineer card
const generateEngineer = function (engineer) {
  return `
    <h3>${engineer.name}</h3>
    `;
};

// Generate Intern card
const generateIntern = function (intern) {
  return `
    <h3>${intern.name}</h3>
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <main>
        <div>
          ${employeeCards}
        </div>
      </main>
    </body>
    </html>
    `;
};
// Export this file to other files
module.exports = generateCards;
