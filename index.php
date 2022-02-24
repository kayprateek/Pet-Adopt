<!DOCTYPE html>
<html>

<head>
    <title>Adopt a pet</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="files/style.css">

</head>

<body>
    <div class="headerparent">
        <div id="header">
            <a href="https://testpetadopt.000webhostapp.com"><img class="logo" src="files/images/logo.png" /></a>
        </div>
        <div id="location">
            <form>
                <label for="ucity">City: </label>
                <select class="formcity" onchange="selectcity(this)" name="ucity">
                    <option value="">Select</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
            </form>
        </div>
        <div class="container-fluid" id="container">
            <div class="row">
                <div id="getdetails" class="form">
                    <h3 class="formheader">Welcome! Please enter your details to proceed.</h3><br>
                    <form id="userdetails" onsubmit="return false">
                        <label class="formlabel" for="uname">Name</label><br>
                        <input class="forminput" type="text" name="uname" /><br><br>
                        <label class="formlabel" for="uemail">Email</label><br>
                        <input class="forminput" type="email" name="uemail" /><br><br>
                        <label class="formlabel" for="uphno">Phone Number</label><br>
                        <input class="forminput" type="text" name="uphno" /><br><br>
                        <input class="submit" id="submit" onclick="handle()" type="submit" />
                    </form>
                    <div class="error" id="message"></div>
                </div>
            </div>
        </div>
        <div id="content">
            <p class="cardheader">"Sometimes pets understand emotions better than humans do"</p>
            <input id="prev" type="image" src="https://drive.google.com/file/d/1UV0l1FEvuRG5aiSsIxWVm9BAaqV5BaRD/view?usp=sharing/next3.png" onclick="prevclick()" />
            <div id="card">
                <div id="cardtitle"></div>
                <div id="image"></div>
                <div id="pcity"></div>
                <div id="pbreed"></div>
                <div id="page"></div>
                <div id="pgender"></div>
                <div id="desc"></div>
                <button id="adopt">Adopt</button>
            </div>
            <input id="next" type="image" src="https://drive.google.com/file/d/1Ls1v4aZsdZmLjTT14FpVy8eiQHx7IzUI/view?usp=sharing/next4.png" onclick="nextclick()" />
        </div>
            <div id="responsebox"></div>
    </div>
    <script src="files/main.js"></script>
</body>

</html>