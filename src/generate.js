// const paragraph = document.createElement('p');

function buildHTML (user) {
  const manager = user[0]
  const engineer = user[1]
  const intern = user[2]

     return `<div class="card">
    <div class="container">
    <h4><b>${manager.name}</b></h4>
    <p>${manager.getRole()}</p>
    <p>${manager.id}</p>
    <p>${manager.email}</p>
  </div>
</div>
<div class="card">
    <div class="container">
    <h4><b>${engineer.name}</b></h4>
    <p>${engineer.getRole()}</p>
    <p>${engineer.id}</p>
    <p>${engineer.email}</p>
    <p> ${engineer.github}</p>
  </div>
</div>
<div class="card">
    <div class="container">
    <h4><b>${intern.name}</b></h4>
    <p>${intern.getRole()}</p>
    <p>${intern.id}</p>
    <p>${intern.email}</p>
    <p>${intern.school}</p>
  </div>
</div>`

    }

    module.exports = buildHTML;



// function generate