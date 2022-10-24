function addItems(e){
    e.preventDefault();
    let new_element = document.createElement('li');
    new_element.className = "items";
    let span_it = document.createElement('span');
    span_it.innerText = document.getElementById('new-item').value;
    let button_new = document.createElement('button');
    button_new.className = "btn btn-outline-danger";
    button_new.innerText = 'X';
    new_element.appendChild(span_it);
    new_element.appendChild(button_new);
    document.querySelector('#content ul').appendChild(new_element);
    delete_buttons = document.querySelectorAll('.btn-outline-danger');
    for (var i = 0 ;i<delete_buttons.length;i++){
	delete_buttons[i].addEventListener('click',removeItems);
    }    
}
document.querySelector('#adder .btn').addEventListener('click',addItems);
let delete_buttons = document.querySelectorAll('.btn-outline-danger');
for (var i = 0 ;i<delete_buttons.length;i++){
    delete_buttons[i].addEventListener('click',removeItems);
}
document.getElementById('search-box').addEventListener('input',searchItems);
function removeItems(e){
    if(confirm('Are You Sure?') == true){
	e.target.parentNode.remove();
	delete_buttons = document.querySelectorAll('.btn-outline-danger');
	for (var i = 0 ;i<delete_buttons.length;i++){
	    delete_buttons[i].addEventListener('click',removeItems);
	}	
    }
}

function searchItems(e){
    e.preventDefault();
    for(var i=0;i<delete_buttons.length;i++){
	if(delete_buttons[i].parentNode.children[0].innerText.toLowerCase().indexOf(e.target.value.toLowerCase())==-1){
	    console.log(delete_buttons[i].parentNode.children[0].innerText.toLowerCase().indexOf(e.target.value.toLowerCase()))
	    delete_buttons[i].parentNode.style.display = "none";
	}
	else{
	    console.log(delete_buttons[i].parentNode.children[0].innerText.toLowerCase().indexOf(e.target.value.toLowerCase()))	    
	    delete_buttons[i].parentNode.style.display = "";
	}
    }
}

