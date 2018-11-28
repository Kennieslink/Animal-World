//footer Year
document.getElementById('date').textContent = (new Date()).getFullYear();
//ends
//variables for listeners
var Elephant = document.querySelector('.animal1');
var Fish = document.querySelector('.animal2');
var Owl = document.querySelector('.animal3');
//variables for listeners ends
// event listeners 1
Elephant.addEventListener('click', function() {
    var showDetails = document.getElementById('elephant');
    showDetails.textContent = 'Hey! You clicked an ELEPHANT';
});
Elephant.addEventListener('mouseout', function() {
    var showDetails = document.getElementById('elephant');
    showDetails.textContent = '';
});
// event listeners 1 ends
// event listeners 2
var showDetails = document.getElementById('fish');
Fish.addEventListener('click', function() {
    showDetails.textContent = 'soFISHticated FISH'
});
Fish.addEventListener('mouseout', function() {
    showDetails.textContent = '';
});
// event listeners 2 ends
// event listeners 3
Owl.addEventListener('click', function() {
    var showDetails = document.getElementById('owl');
    showDetails.textContent = 'Hoot! Hoot!! its an OWL ';
});
Owl.addEventListener('mouseout', function() {
    var showDetails = document.getElementById('owl');
    showDetails.textContent = '';
});
// event listeners 3 ends