// const paragraph = document.createElement('p');

function buildHTML (user) {
        const name = `string text ${user.name} string text`
        console.log(name)
        const id = `My employee ID is ${user.id}`
        console.log(id)
        const email = `My work email is ${user.email}`
        console.log(email)
        const role = `My role is ${user.role}`
        console.log(role)
        const github = `My Github is ${user.Github}`
        console.log(github)


     return `<div class="card">
    <div class="container">
    <h4><b>${manager.name}</b></h4>
    <p>${manager.role}</p>
    <p>${manager.id}</p>
    <p>${manager.email}</p>
    <p>${manager.Github}</p>
  </div>
</div>`

    }




// function generate