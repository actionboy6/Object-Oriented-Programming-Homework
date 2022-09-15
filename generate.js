// const paragraph = document.createElement('p');
function buildHTML (answers) {
        const name = `string text ${answers.name} string text`
        console.log(name)
        const id = `My employee ID is ${answers.id}`
        console.log(id)
        const email = `My work email is ${answers.email}`
        console.log(email)

     return `<div class="card">
    <div class="container">
    <h4><b>${answers.name}</b></h4>
    <p>${answers.role}</p>
  </div>
</div>`

    }




// function generate