var color_btn = document.getElementById("color-toggle-btn");
var theme_now = document.documentElement.getAttribute('data-user-color-scheme')
var html_body = document.body;

window.onload = function () {
    if (theme_now === 'dark') {
        html_body.style.background = "url(https://cdn.zengjunyin.com/background_dark.jpg)"
    } else {
        html_body.style.background = "url(https://cdn.zengjunyin.com/background_light.jpg)"
    }
}

color_btn.onclick = function () {
    if (theme_now === 'dark') {
        html_body.style.background = "url(https://cdn.zengjunyin.com/background_light.jpg)"
        theme_now = 'light'
    } else {
        html_body.style.background = "url(https://cdn.zengjunyin.com/background_dark.jpg)"
        theme_now = 'dark'
    }
}