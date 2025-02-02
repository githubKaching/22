
// Changes from the header to the header scrolled position
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('#logo');
    const nav = document.querySelector('nav');

    // Check if page has been scrolled
    if (window.scrollY > 0) {
        // if it as been scrolled down add the scrolled class
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
        nav.classList.add('scrolled');
    } else {
        // if it has not been scrolled, remove scrolled class
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        nav.classList.remove('scrolled');
    }
});


// Return to top of page
document.addEventListener('DOMContentLoaded', function() {

    const articles = document.querySelectorAll('.post');

    articles.forEach(article => {
        const articleText = article.querySelector('.articleText');
        const hideButton = article.querySelector('.hideButton');
        const showButton = article.querySelector('.showButton');

        hideButton.addEventListener('click', function() {
            articleText.style.display = 'none';
            hideButton.style.display = 'none';
            showButton.style.display = 'inline';
        });

        showButton.addEventListener('click', function() {
            articleText.style.display = 'block';
            showButton.style.display = 'none';
            hideButton.style.display = 'inline';
        });
    });

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
