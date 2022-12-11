const form = document.getElementById('form')
const input = document.getElementById('input')
const ul = document.getElementById('ul')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let value = input.value
    input.value = ''
    if(!value) {
        alert("Input field is empty")
        return value
    }
    let newElement = document.createElement('li')
    newElement.innerHTML = `
    <input onclick="done(this)" type="checkbox" id="check">
    <span>${value}</span><i onclick="deleteItem(this)" class="fa-regular fa-trash-can"></i>
    <i onclick="edit(this)" class="fa-regular fa-pen-to-square"></i>`
    ul.appendChild(newElement)
    

})

function done (e) {
    let element = e.parentElement.children[1]
    element.classList.toggle('done')

}
function deleteItem (e) {
    let element = e.parentElement
    element.remove()

}
function edit (e) {
    let itemValue = e.parentElement.children[1].textContent
    let element = e.parentElement
    input.value = itemValue
    element.remove()
}