let ids = 0

var form = document.getElementById("form-add-item");
  function handleForm(event) { 
    event.preventDefault(); 
    var completeList = document.getElementById("food-list");
    var foodName = document.getElementById("input-add-item-name").value
    var foodDate = document.getElementById("input-add-item-date").value
    var dateYYYY = ""
    var dateMM = ""
    var dateDD = ""

    for (let i = 0; i < foodDate.length; i++) {
      if (i < 4){
        dateYYYY += foodDate[i];
        console.log(foodDate[i])
      } else if (4 < i && i < 7) {
        dateMM += foodDate[i];
        console.log(foodDate[i])
      } else if (7 < i) {
        dateDD += foodDate[i];
        console.log(foodDate[i])
      }
    }
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    console.log(dateYYYY + " " + dateMM + " " + dateDD + " | " + yyyy + " " + mm + " " + dd)
    
    var difference = 0

    difference += (dateDD - dd) + ((dateMM - mm) * 30) + ((dateYYYY - yyyy) * 365)

    completeList.innerHTML += `<div class="food-row" id="` + ids + `-row">
        <button class="btn delete-btn food-delete food-column" onclick="removeElement(` + ids + `)" role="button">X</button>
        <span class="food-item food-column">` + foodName + `</span>
        <span class="food-time food-column">` + difference + " dage" + `</span>
      </div>`
    
    ids++
    if (difference < 5) {
      alert("Advarsel!\n" + foodName + " udløber om " + difference + " dage");
    }
  } 
  
  form.addEventListener('submit', handleForm);

  function removeElement(buttonID) {
    var div = document.getElementById(buttonID + "-row");

    div.remove()

  }

  function ideas(){
    alert("Advarsel!\nDenne funktion er ikke færdig")
  }