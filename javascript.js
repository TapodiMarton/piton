var url = "http://127.0.0.1:5000/view";
var id = "view";

async function generator(url, id) {
    var request = await new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
view(data, request, id);

}

request.send()
  }

  function view(data, request, id){
      if(id == "view"){
    if (request.status >= 200 && request.status < 400) {
         data.forEach((query) => {
          console.log(request.status);
          var div = document.createElement("tr");
            var mainContainer = document.getElementById(id);
          div.innerHTML = "<td>"+query.id+"</td><td><input id='name"+query.id+"' placeholder='"+query.name+"' value='"+query.name+"'/></td><td><input id='email"+query.id+"' placeholder='"+query.email+"' value='"+query.email+"'/></td><td><input id='address"+query.id+"' placeholder='"+query.address+"' value='"+query.address+"'/></td><td><input id='dress"+query.id+"' placeholder='"+query.dress+"' value='"+query.dress+"'/></td><td><input id='size"+query.id+"' placeholder='"+query.size+"' value='"+query.size+"'/></td><td><input id='color"+query.id+"' placeholder='"+query.color+"' value='"+query.color+"'/></td>"+"<button onclick = 'deleterecord("+query.id+")' type = 'submit' value='Submit'>Delete</button>"+"<button onclick = 'update("+query.id+")'>Update</button>" ;
          mainContainer.appendChild(div)
        })
      } else {
        console.log('error')
      }}
  }

async function generate_html(){
await generator(url, id);
}

function deleterecord(id){
  const data = JSON.stringify({
    id: parseInt(id)
  });

  navigator.sendBeacon('http://127.0.0.1:5000/deleterecord/', data);
  console.log(data);
}
function update(id){
  const data = JSON.stringify({
    id: id,
    name: document.getElementById("name"+id).value,
    email: document.getElementById("email"+id).value,
    address:document.getElementById("address"+id).value,
    dress:document.getElementById("dress"+id).value,
    size:document.getElementById("size"+id).value,
    color:document.getElementById("color"+id).value
  });

  navigator.sendBeacon('http://127.0.0.1:5000/updatedetails/', data);
  console.log(data);
}

generate_html();