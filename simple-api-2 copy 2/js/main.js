document.querySelector('button').addEventListener('click', getPlayerInfo)



function getPlayerInfo(){
let playerName=document.querySelector('input').value
fetch(`https://www.balldontlie.io/api/v1/players/?search=${playerName}`) 
.then(res => res.json())      // converts response into JSON
.then(data1 => {
console.log(data1)
console.log(data1.data[0])
document.querySelector('#name').innerText = data1.data[0].first_name + ' ' + data1.data[0].last_name
document.querySelector('#position').innerText = 'Position: ' + data1.data[0].position
document.querySelector('#height').innerText = data1.data[0].height_feet + ' foot ' + data1.data[0].height_inches
document.querySelector('#team').innerText = 'Team: ' + data1.data[0].team.name
document.querySelector('#weight').innerText = 'Weight: ' + data1.data[0].weight_pounds
})
}