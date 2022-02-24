var content = document.getElementById("content");
var container = document.getElementById("container");
var locationcontainer = document.getElementById("location");
var rbox = document.getElementById("responsebox");
var card = document.getElementById("card");
var ctitle = document.getElementById("cardtitle");
var image = document.getElementById("image");
var desc = document.getElementById("desc");
var msg = document.getElementById("message");
var sbtn = document.getElementById("submit");
var prevbtn = document.getElementById("prev");
var nextbtn = document.getElementById("next");
var adoptbtn = document.getElementById("adopt");
var form = document.getElementById('userdetails');
var errors = "";
var city;
var data;
var pos = [];
var currpos = 0;

function handle() {
    msg.innerHTML = "";
    if (validate(form)) {
        const phprequest = new XMLHttpRequest();
        phprequest.open('POST', 'files/handle.php');
        phprequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        phprequest.send("uname=" + form.elements[0].value + "&uemail=" + form.elements[1].value + "&uphno=" + form.elements[2].value);
        sbtn.disabled = true;
        phprequest.onload = function () {
            if (this.response == "ConnectionError") {
                msg.innerHTML = "Server Error. Try refreshing the page.";
            }
            else if (this.response == "true") {
                container.insertAdjacentHTML("beforeend", "<h4>Successfully Registered.<br>Hello " + form.elements[0].value+"!<br>Select your city.</h4>");
                locationcontainer.style.display = "block";
            }
            else {
                msg.innerHTML = "Email or phone number already exists<br>Continuing with previous details.";
                msg.insertAdjacentHTML("beforeend", "<br>Hello " + this.response + ".<br>Select your city.");
                locationcontainer.style.display = "block";
            }
        };
    }
    else {
        msg.innerHTML = errors;
        return false;
    }
}

function selectcity(inputcity) {
    currpos=0;
    rbox.innerHTML = "";
    city = inputcity.value;
    container.style.display = "none";
    content.style.display = "block";
    var request = new XMLHttpRequest();
    request.open('GET', 'pets.json');
    request.onload = function () {
        data = JSON.parse(request.responseText);
        var found = false;
        pos.length = 0;
        for (i = 0; i < data.length; i++) {
            if (city == data[i].Location) {
                found = true;
                pos.push(i);
            }
        }
        if (found == false) {
            nextbtn.style.display = "none";
            prevbtn.style.display = "none";
            adoptbtn.style.display = "none";
            var img = new Image();
            img.src = "files/images/sorry.png";
            ctitle.innerHTML = "Sorry!";
            image.innerHTML = "";
            image.appendChild(img);
            document.getElementById('pcity').innerHTML = "";
            document.getElementById('pbreed').innerHTML = "";
            document.getElementById('page').innerHTML = "";
            document.getElementById('pgender').innerHTML = "";
            desc.innerHTML = "<br>No results found for your city!<br>Select another city.";
        }
        else {
            nextbtn.style.display = "block";
            prevbtn.style.display = "block";
            showcard(pos[currpos]);
        }
    };
    request.send();
}

function nextclick() {
    if (currpos != (pos.length - 1) && pos.length > 0) {
        currpos += 1;
        showcard(pos[currpos]);
    }
}

prevbtn.addEventListener("click", function () {
    if (currpos != 0 && pos.length > 0) {
        currpos -= 1;
        showcard(pos[currpos]);
    }
});

adoptbtn.addEventListener("click", function () {
    const adoptreq = new XMLHttpRequest();
    adoptreq.open('POST', 'files/adoptreq.php');
    adoptreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    adoptreq.send("uname=" + form.elements[0].value + "&uemail=" + form.elements[1].value + "&ucity=" + city + "&uphno=" + form.elements[2].value + "&petid=" + data[pos[currpos]].ID);
    adoptreq.onload = function () {
        if (this.response == "ConnectionError") {
            rbox.innerHTML = "Server Error. Try refreshing the page.";
        }
        else if (this.response == "true") {
            rbox.style.display="block";
            adoptbtn.disabled = true;
            rbox.innerHTML="<img src='images/thankyou.jpg'/><br>Thank You " + form.elements[0].value + "<br>Your adoption request has been accepted!<br>We will contact you soon regarding the formalities.<br>Thanks for saving a life!";
            locationcontainer.style.display = "block";
        }
    };
});


function showcard(position) {
    adoptbtn.style.display = "block";
    ctitle.innerHTML = "";
    image.innerHTML = "";
    desc.innerHTML = "";
    document.getElementById('pcity').innerHTML = "";
    document.getElementById('pbreed').innerHTML = "";
    document.getElementById('page').innerHTML = "";
    document.getElementById('pgender').innerHTML = "";
    var img = new Image();
    img.src = "files/"+data[position].Imgsrc;
    image.appendChild(img);
    ctitle.insertAdjacentHTML("afterbegin", data[position].Type);
    document.getElementById('pcity').insertAdjacentHTML("beforeend",data[position].Location + "<br>");
    document.getElementById('pbreed').insertAdjacentHTML("beforeend", "Breed : " + data[position].Breed + "<br>");
    document.getElementById('page').insertAdjacentHTML("beforeend", "Age : " + data[position].Age + " Months Old<br>");
    document.getElementById('pgender').insertAdjacentHTML("beforeend", "Gender : " + data[position].Gender + " <br>");
    desc.insertAdjacentHTML('beforeend', "Description : " + data[position].Description + " <br>");
}


function validate(form) {
    errors = "";
    var check = true;
    if (!/^[a-zA-z][a-zA-Z ]+$/.test(form.elements[0].value)) {
        check = false;
        errors += "<li>Please enter correct name</li>";
    }
    if (!/^[a-zA-z0-9]+@[a-zA-Z]+.[a-z]{2,4}.[a-z]{0,3}$/.test(form.elements[1].value)) {
        check = false;
        errors += "<li>Please enter correct email</li>";
    }
    if (!/^[6-9][0-9]{9}$/.test(form.elements[2].value)) {
        check = false;
        errors += "<li>Please enter correct phone number</li>";
    }
    return check;
}

