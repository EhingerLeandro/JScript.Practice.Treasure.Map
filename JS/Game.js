const width=400;
const height=400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(width)
}

let $map = document.getElementById("map");
let $distance = document.getElementById("distance")

$map.addEventListener('click', function (e) {
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance)
    $distance.innerHTML =`<h1>${distanceHint}</h1>`;
})


