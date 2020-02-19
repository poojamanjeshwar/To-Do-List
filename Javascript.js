window.onload = document.getElementById("textbox").focus();// Gets the cursor on the textbox when window loads
var taskItem = 0;
var itemId = '';


function addTask(){
	var task = document.getElementById("textbox");
    if(task.value === '')
    { 
    alert("Please enter a task");
	document.getElementById("textbox").focus(); // to get cursor back to the textbox
    }	
	else{
	var list = addToList(task.value);  
    document.getElementById("taskList").appendChild(list);
	document.getElementById("textbox").value=""; //to clear the textbox
	document.getElementById("textbox").focus();
	}
}

//function to take the value of the list that has to be edited
function editItem()  
 {
	document.getElementById('textbox').style.visibility = 'hidden';
	document.getElementById('add').style.visibility = 'hidden';
	document.getElementById('editbox').style.visibility = 'visible';
	document.getElementById('save').style.visibility = 'visible';
	document.getElementById("editbox").focus();
	var li = this.parentNode;
	var item = li.getElementsByTagName("*");
    var textbox = document.getElementById("editbox");
	editbox.value = item[1].innerHTML;
	itemId = item[1].id;
}

//function that saves the editted value back to the respective list item
function saveEdit(){
    var itemText = document.getElementById("editbox").value;
	document.getElementById(itemId).innerHTML = itemText;
	document.getElementById('editbox').style.visibility = 'hidden';
	document.getElementById('save').style.visibility = 'hidden';
	document.getElementById('textbox').style.visibility = 'visible';
	document.getElementById('add').style.visibility = 'visible';
	document.getElementById("editbox").value="";
	document.getElementById("textbox").focus();
}

//function that creates the checkbox, span, edit button, delete button when a task is added
var addToList = function(taskValue)
 { 
 taskItem++
  var list = document.createElement("li");	
 
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "checkboxid" + taskItem;
  checkBox.onclick = strikeOut;
  checkBox.className = "checking";
 
  var span = document.createElement("span");
  span.id = "spanid" + taskItem;
  span.innerHTML = taskValue;
  span.className = "taskText";
  
		
  var editTask = document.createElement("a");
  editTask.innerHTML = "&#x270f";
  editTask.id = "editid";
  editTask.onclick = editItem;

  var deleteTask = document.createElement("a");
  deleteTask.innerHTML = "&#10006";
  deleteTask.id = "deleteid";
  deleteTask.onclick = deleteItem;
  
   list.appendChild(checkBox);
   list.appendChild(span);   
   list.appendChild(editTask);
   list.appendChild(deleteTask);      
   return list;
}

//to strike a text to mark it as complete when clicked on its checkbox
function strikeOut()
{
var checkedId = this.id.replace("checkboxid", "");
var check = document.getElementById("spanid" + checkedId);

if (this.checked) 
 {
    check.style.textDecoration = "line-through";
 } 
else 
 {
    check.style.textDecoration = "none";
 }
 document.getElementById("textbox").focus();
 }
 
//delete a particular item 
 function deleteItem() 
 {
     var li = this.parentNode;
      li.remove();
	  document.getElementById("textbox").focus();
 }
 
//Add a task with Enter Key 
 function keyPress(e) 
 {
    var key = e.keyCode;
	if(key == 13)
	  {
	    addTask();
	  }
 }
 
//Add a task after editing a task with Enter Key 
 function editKey(e) 
 {
    var key = e.keyCode;
	if(key == 13)
	  {
	    saveEdit();
	  }
 }