let total = 0;
let content_basket = {
    "Burger":[0,50],
    "Pao Bhaji":[0,120],
    "Omlet":[0,60]
};

function update_basket(){
    document.getElementById("total").innerHTML = total;
    document.getElementById("billing").innerHTML = "<tr><th>Dish</th><th>Quantity</th><th>Price</th></tr>"
    for (var key in content_basket){
	document.getElementById(`${key}Number`).innerHTML = content_basket[key][0];
	if(content_basket[key][0]!=0){
	    document.getElementById("billing").innerHTML += `<tr><td>${key}</td><td>${content_basket[key][0]}</td><td>${content_basket[key][1]}</td></tr>`
	}
    }
}

update_basket();

function removeItem(id){
    let mealItem = document.getElementById(id);
    let mealName = mealItem.parentNode.childNodes[1].innerHTML;
    let mealPrice = parseFloat(mealItem.parentNode.childNodes[5].innerHTML.replace("Rs ",""));
    if(content_basket[mealName][0]>0){
	total = total - mealPrice;
	content_basket[mealName][0]--;
	update_basket();
    }
}
    

function addItem(id){
    let mealItem = document.getElementById(id);
    let mealName = mealItem.parentNode.childNodes[1].innerHTML;
    let mealPrice = parseFloat(mealItem.parentNode.childNodes[5].innerHTML.replace("Rs ",""));
    total = total + mealPrice;
    content_basket[mealName][0]++;
    update_basket();
}

function checkOut(){
    total = 0;
    content_basket = {
	"Burger":[0,50],
	"Pao Bhaji":[0,120],
	"Omlet":[0,60]
    };
    update_basket();
}
