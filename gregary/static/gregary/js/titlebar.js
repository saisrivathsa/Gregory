function drawLoginButton() {
    // This function will create the login-button into HTML
    'use strict';
    // Create login-button
    var login_button = document.createElement('button');
    login_button.className = 'custom-button';
    login_button.id = 'login-button';
    login_button.href = '/auth/login';
    
    // Put in text
    var login_button_text = document.createTextNode('LOGIN');
    login_button.appendChild(login_button_text);

    // Put the button into the webpage
    document.getElementById('uinfo-outer-container').appendChild(login_button);
}

function drawUserInfo(username) {
    // This function will create the user-info into HTML
    'use strict';
    ////Image

    // Create image container
    var profile_picture = document.createElement('img');
    profile_picture.id = 'profile-picture';
    profile_picture.src = '/static/gregary/images/dp.jpg';     // Change this dynamically, depending on the current user
    profile_picture.onclick += toggelUserCard;
    
    // Put the image in the uinfo-outer-container
    document.getElementById('uinfo-outer-container').appendChild(profile_picture);

    //// Uinfo

    // Create uinfo-container and text
    var uinfo_container = document.createElement('div'),
        space           = document.createElement('br'),
        first_name_p    = document.createElement('p'),
        last_name_p     = document.createElement('p'),
        first_name_text = document.createTextNode(username),      // Change these 2 dynamically
        last_name_text  = document.createTextNode('von Neumann');

    // Assign id and class names
    uinfo_container.id      += 'uinfo-container';
    space.className         += 'uinfo ';
    first_name_p.className  += 'uinfo ';
    last_name_p.className   += 'uinfo ';
    first_name_p.className  += 'bold ';

    // Assign stuff to parents
    first_name_p.appendChild(first_name_text);
    last_name_p.appendChild(last_name_text);

    uinfo_container.appendChild(space);
    uinfo_container.appendChild(first_name_p);
    uinfo_container.appendChild(last_name_p);

    // Put this container in the uinfo-outer-container
    document.getElementById('uinfo-outer-container').appendChild(uinfo_container);
    
    $("#profile-picture").on("click", toggelUserCard);
}

var ucVis = false;
function toggelUserCard() {
    // Toggles the user card to be diaplyed or not
    'use strict';
    
    if (ucVis) {
        $("#uinfo-card").fadeOut(96);
        ucVis = false;
    } else {
        $("#uinfo-card").fadeIn(96);
        ucVis = true;
    }
    
}

//document.onload += (function () {
    //'use strict';

    //if (isLoggedIn()) {
    //    drawUserInfo();
    //} else {
      //  drawLoginButton();
    //}
//}());
