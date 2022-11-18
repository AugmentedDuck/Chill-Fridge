var form = document.getElementById("form-add-item");
  function handleForm(event) { 
    event.preventDefault(); 
    var completeList = document.getElementById("food-list");
    var foodName = document.getElementById("input-add-item-name").value
    var foodDate = document.getElementById("input-add-item-date").value
     
    completeList.innerHTML += `<div class="food-row">
        <button class="btn delete-btn food-delete food-column" role="button">X</button>
        <span class="food-item food-column">` + foodName + `</span>
        <span class="food-time food-column">` + foodDate + `</span>
      </div>`
  } 
  form.addEventListener('submit', handleForm);