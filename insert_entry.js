function toggle_teacher_add() {
    document.getElementById('add_teacher').style.display='block';
    document.getElementById('add_team').style.display='none';
}

function toggle_team_add() {
    document.getElementById('add_team').style.display='block';
    document.getElementById('add_teacher').style.display='none';
}

function teacher_add() {			
    var teacherName = document.getElementById("teacherName").value ;
    var subject = document.getElementById("subject").value;
    var cluster = document.getElementById("cluster").value; 
    var teacherTable = document.getElementById("teacherTable");
    
    var row = teacherTable.insertRow(-1);
    var cell_teacherName = row.insertCell(0);
    var cell_subject = row.insertCell(1);
    var cell_cluster = row.insertCell(2);  
    
    cell_teacherName.innerHTML = teacherName ;
    cell_subject.innerHTML = subject ;
    cell_cluster.innerHTML = cluster ;
    
    document.getElementById("form").reset();
}

function team_add() {
    var sportsType = document.getElementById("sportsType").value;
    var teamName = document.getElementById("teamName").value;
    var teamTable = document.getElementById("teamTable");
    
    var row = teamTable.insertRow(-1);
    var cell_teamName = row.insertCell(0);
    var cell_sportsType = row.insertCell(1);
    
    cell_teamName.innerHTML = teamName;
    cell_sportsType.innerHTML = sportsType;

    document.getElementById("form").reset();
}