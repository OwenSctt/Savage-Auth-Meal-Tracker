var thumbUp = document.getElementsByClassName("fa-arrow-up");
var thumbDown = document.getElementsByClassName("fa-arrow-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
  element.addEventListener('click', function(){
    const date = this.parentNode.parentNode.childNodes[1].innerText;
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const msg = this.parentNode.parentNode.childNodes[5].innerText
    const thumbUp = parseInt(this.parentNode.parentNode.childNodes[7].innerText) 
    
    fetch('/messages', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'date': date,
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp  
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const date = this.parentNode.parentNode.childNodes[1].innerText;
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const msg = this.parentNode.parentNode.childNodes[5].innerText
    const thumbUp = parseInt(this.parentNode.parentNode.childNodes[7].innerText) 
    
    fetch('/down', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'date': date,
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp  
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const date = this.parentNode.parentNode.childNodes[1].innerText;
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const msg = this.parentNode.parentNode.childNodes[5].innerText
    const thumbUp = parseInt(this.parentNode.parentNode.childNodes[7].innerText)
    
    fetch('/messages', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'date': date,
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp  
      })
    })
    .then(response => {
      window.location.reload()
    })
  });
});

console.log(this.parentNode.parentNode.childNodes)
