let addressBook = [];

window.onload = () => {
    manyUser()
}

const singleUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())   
    .then(user => addressBook = user)
    .then(data => {
        data.results.map(person => {
            let myBook = document.getElementById('myBook')
            let li = document.createElement('li')
            let text = document.createTextNode(Object.values(person))
            li.appendChild(text)
            myBook.append(li)
        })
    })

}

const newUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => addressBook = user)
    .then(data => {
        data.results.map(person => {
            let myBook = document.getElementById('myBook')
            let li = document.createElement('li')
            let text = document.createTextNode(Object.values(person))
            li.appendChild(text)
            myBook.append(li)
        })
    })

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => addressBook = user)
    .then(data => {
        data.results.map(person => {
            let myBook = document.getElementById('myBook')
            let li = document.createElement('li')
            let text = document.createTextNode(Object.values(person))
            li.appendChild(text)
            myBook.append(li)
        })
    })
}

const namePicList = () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(user => addressBook = user)
    .then(data => {
        data.results.map(person => {
            let myBook = document.getElementById('myBook')
                let li = document.createElement('li')
                let text = document.createTextNode(`${Object.values(person.name)}  ${Object.values(person.picture)}`)
                li.appendChild(text)
                myBook.append(li)
        })
    })

}

const manyUser = () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(user => addressBook = user)
    .then(data => {
        data.results.map(person => {
            let myBook = document.getElementById('myBook')
            let li = document.createElement('li')
            let text = document.createTextNode(Object.values(person))
            li.appendChild(text)
            myBook.append(li)
        })
    })
}
