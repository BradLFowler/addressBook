let addressBook = [];

window.onload = () => {
    fetchUsers();
}
const fetchUsers = () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => {
        if(!res.ok) {
            throw Error("Error")
        }
        return res.json()
    })
    .then(data => {
        const displayUsers = data.results.map(person => {
            addressBook = data.results
            moreInfo = () => {
                let elems = document.getElementsByClassName('getInfo')
                while(elems.length > 0) {
                    elems[0].classList.remove('getInfo')
                }
            }
            return `<div id="styleDiv">
            <img src='${person.picture.large}'>
            <p>First Name: ${person.name.first}</p>
            <p>Last Name: ${person.name.last}</p>
            <p id='getInfo' class='getInfo'>Gender: ${person.gender} Age: ${person.dob.age} Location: ${person.location.country}</p> 
            </div>`
        }).join('')
        document.getElementById('contacts').insertAdjacentHTML('afterbegin', displayUsers)
    }).catch(err => {
        console.log(err)
    })
}