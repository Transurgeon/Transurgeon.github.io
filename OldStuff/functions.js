function submitContactMsg() {
    var Name = document.getElementById("fname").value;
    var Email = document.getElementById("fEmail").value;
    var Phone = document.getElementById("fPhone").value;
    var Message = document.getElementById("messageBox").value;

    var data = "";
    data += Name;
    data += "\n--------------------------\n";
    data += Email;
    data += "\n--------------------------\n";
    data += Phone;
    data += "\n--------------------------\n";
    data += Message;
    var file = new Blob([data],{type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "contact.txt";
    anchor.click();
}


function submitSocial() { 
    var social1 = document.getElementById("social1").value;
    var social2 = document.getElementById("social2").value;
    var social3 = document.getElementById("social3").value;
    
    var data = "";
    data += social1;
    data += "\n--------------------------\n";
    data += social2;
    data += "\n--------------------------\n";
    data += social3;

    var file = new Blob([data],{type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "socials.txt";
    anchor.click();
}


function submitResume() {
    var Education = document.getElementById("Education").value;
    var Skills = document.getElementById("Skills").value;
    var Awards = document.getElementById("Awards").value;
    var Work = document.getElementById("Work").value;
    var Ref = document.getElementById("Ref").value;
    
    var data = "";
    data += Education;
    data += "\n--------------------------\n";
    data += Skills;
    data += "\n--------------------------\n";
    data += Awards;
    data += "\n--------------------------\n";
    data += Work;
    data += "\n--------------------------\n";
    data += Ref;

    var file = new Blob([data],{type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "resume.txt";
    anchor.click();
}


function submitProjects() {
    var Projects = document.getElementById("Projects").value;
    
    var data = "";
    data += Projects;

    var file = new Blob([data],{type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "projects.txt";
    anchor.click();
}


function processLogin() {
    sessionStorage.setItem('username', 'dingo');
    
    sessionStorage.setItem('password', 'django');

    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
    }
}


function processLogout() {
            
    myStorage = window.sessionStorage;
    
    myStorage.clear();
    sessionStorage.clear();
}


function submitIndex() {
    var ProState = document.getElementById("ProState").value;
    var Bio = document.getElementById("Bio").value;
    
    var data = "";
    data += ProState;
    data += "\n--------------------------\n";
    data += Bio;
    var file = new Blob([data],{type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "index.txt";
    anchor.click();

}


function readMessages() {
    var file = document.getElementById("load").files[0];
    var reader = new FileReader();
    
    reader.onloadend = function() {
        var tableContent = '';
        alert(reader.result);
        var lines = reader.result.split('\n');
        
        for (let i = 0 ; i<lines.length; i++) {
        tableContent += '<tr>';
        tableContent += '<td>' + lines[i] + '</td>';
        tableContent += '</tr>';
    };

    document.getElementById("tablediv").innerHTML = tableContent;
    }
    reader.readAsText(file);
}

function show() {
document.getElementById('load').click();
}