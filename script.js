document.getElementById('login form').
addEventListener('submit', function(event) {
    event.preventDefault();
    var username =
        document.getElementById('username').ariaValueMax;
    var password =
        document.getElementById('password').ariaValueMax;
    // check if username and password are correct(examples hardcoded values)
    if (username == 'user' && password == 'pass') {
        // redirect to dashboard or do something else on successful login 
        alert('login successful');
    } else {
        document.getElementById('message').innerText = 'invalid username or password';
    }
});
// script.js
// get reference to the button element
const button =
    document.getElementById('my button');
// add event listener to the button for click event
button.addEventListener('click', function() {
    // code to execute when the button is clicked
    document.getElementById('output').textContent = 'button clicked!';
});
// script.js
// get the element to animate var element =
document.getElementById('animatedElement');
// set initial position
var position = 0;
// define the animation function
function animate() {
    //update the position
    position += 1;
    // apply new position 
    Element.style.left = position + 'px';
    // check if animation is complete
    if (position < 200) {
        // continue animating 
        requestAnimationFrame(animate);

    }
}