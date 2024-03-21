
// Changes from the header to the header scrolled position
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logo = document.querySelector('#logo');
    var nav = document.querySelector('nav');

    // Check if page has been scrolled
    if (window.scrollY > 0) {
        // if it as been scrolled down add the 'scrolled' class to the header
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
        nav.classList.add('scrolled');
    } else {
        // if it has not been scrolled, remove 'scrolled' class
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        nav.classList.remove('scrolled');
    }
});


// Return to top of page
document.addEventListener('DOMContentLoaded', function() {

    var scrollToTopButton = document.getElementsByClassName('scroll-button')[0];

    if (scrollToTopButton) {
        // Add a click event listener to the button
        scrollToTopButton.addEventListener('click', function() {
            // Scroll to the top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// hide text buttum
document.addEventListener('DOMContentLoaded', function() {
    var hideTextButtons = document.getElementsByClassName('hide-text-button');

    for (var i = 0; i < hideTextButtons.length; i++) {
        hideTextButtons[i].addEventListener('click', function() {
            var article = this.parentElement;
            var text = article.getElementsByTagName('p');
            for (var j = 0; j < text.length; j++) {
                text[j].style.display = text[j].style.display === 'none' ? '' : 'none';
            }
        });
    }
});

// check password
function checkPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = "22";
    if (password != confirmPassword) {
        alert("Passwords do not match. Try twotwo");
        return false;
    }
    document.location.href='./index.html';
}

// span textareas for create page
// Dealing with Input width
let el = document.querySelector(".input-wrap .input");
let widthMachine = document.querySelector(".input-wrap .width-machine");
el.addEventListener("keyup", () => {
  widthMachine.innerHTML = el.value;
});

// Dealing with Textarea Height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}

let textarea = document.querySelector(".resize-ta");
textarea.addEventListener("keyup", () => {
  textarea.style.height = calcHeight(textarea.value) + "px";
});

//reset button for create page
function reset(){
    const titleSpan = document.getElementById('title');
    const tagsSpan = document.getElementById('tags');
    const contentSpan = document.getElementById('content');
        titleSpan.textContent = '';
        tagsSpan.textContent = '';
        contentSpan.textContent = '';
    }

// validate function for create page
    function val(){
        const titleSpan = document.getElementById('title');
        const tagsSpan = document.getElementById('tags');
        const contentSpan = document.getElementById('content');
        let borderColor = "5px solid red";
        if (titleSpan.textContent.trim()===''){
            document.getElementById("title").style.border = borderColor; /* # how to let the color stay*/
        } if (tagsSpan.textContent.trim()===''){
            document.getElementById("tags").style.border = borderColor; /* # how to let the color stay*/
        } if (contentSpan.textContent.trim()===''){
            document.getElementById("content").style.border = borderColor; /* # how to let the color stay*/
        }
        if (titleSpan.textContent.trim() !== '' && tagsSpan.textContent.trim() !== '' && contentSpan.textContent.trim() !== '') {
            alert("Submisson completed");    
            /*#when i press the button it deletes my input... it does not say anywhere that it should do this..*/  
    }
}



