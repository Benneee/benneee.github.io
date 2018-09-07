/* Creation Of Variables */

//Create variable for the welcome message
var greeting='How you dey? ';
var name='Alex';
var message = ', abeg shook eye for wetin you buy:';

//Concatenate the three variables above to create the welcome message
var welcome= greeting + name + message;

//Create variables for the code
var code= 'RicePlantainChicken_';
var item= code.length;
var subTotal= item * 30;
var delivery= 50;
var vat= 20; 
var grandTotal= subTotal + delivery + vat;



/* Updating the old variables in HTML with new variables formed above */


//Get element that has an id of greeting & update content
var el= document.getElementById('greeting');
document.write = welcome;

//Get element that has id of usercode & update content
var elCode= document.getElementById('usercode');
elCode.textContent= code;

//Get element that has id of items & update content
var el= document.getElementById('items');
elItem.textContent= item;

//Get element that has id of subTotal & update content
var el= document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Get element that has id of delivery & update content
var el= document.getElementById('delivery');
elDelivery.textContent = '$' + delivery;

//Get element that has id of vat & update content
var el= document.getElementById('vat');
elVat.textContent = '$' + vat;

//Get element that has id of grandTotal & update content
var el= document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;


/* End Of JavaScript Code */
