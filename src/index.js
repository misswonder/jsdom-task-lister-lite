document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let form = document.getElementById("create-task-form")
let del = document.getElementById("delete-button")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  const listItem = event.target.getElementsByTagName("input")[0].value
  const priority = event.target.getElementsByTagName("select")[0].value
  addListItem(listItem, priority)
  sortList()
  form.reset()
})
del.addEventListener("click", removeAllItems)

function removeAllItems() {
  let items = document.getElementById("tasks")
  for (var i = items.childNodes.length - 1; i >= 0; i--){
    // debugger
    items.childNodes[i].remove()
  }
}

function addListItem(listItem, priority) {
    let ul = document.getElementById("tasks")
    let li = document.createElement("li")
    li.innerText = listItem
    if (priority == "high"){
      li.style.color = "red"
    }
    else if (priority == "medium"){
      li.style.color = "yellow"
    }
    else if (priority == "low"){
      li.style.color = "green"
    }
    ul.appendChild(li)
}

function sortList() {
  let list = document.getElementById("tasks").children
  let last = list[0].style.color
  // debugger
  if (list.length > 1){
    for (var i = 1; i <= list.length - 1; i++){
      // debugger
      let current = list[i].style.color
      if (current == "green" && last == "yellow"){
        let placeholder = list[i - 1]
        list[i - 1] = list[i]
        list[i] = placeholder
        last = list[i].style.color

      }
    }
  }
    // debugger

} 