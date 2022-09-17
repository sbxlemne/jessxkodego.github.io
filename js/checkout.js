let productsInCart = JSON.parse(localStorage.getItem('shoppingCart')); //for current shopping cart
if(!productsInCart){
	productsInCart = [];
}
let productsCheckOut = JSON.parse(localStorage.getItem('paymentCard')) || [];
// if(!productsCheckOut){
// 	productsCheckOut = [];
let buyerInfo = JSON.parse(localStorage.getItem('buyerInfo')) || []; //for current buyer

const createCartHistory = document.querySelector('.createCartHistory');

// Menu Dropdown
let menuItems = document.querySelector('#menuItems');
menuItems.style.maxHeight = "0px";
function menutoggle () {
    if (menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
    } else {
        menuItems.style.maxHeight = "0px";
    }
}

// const cartSumPrice = document.querySelector('#sum-prices');
//Sum of 
const countTheSumPrice = () => { // 4
	let sum = 0;
	productsCheckOut.forEach(item => {
		sum += item.price;
	});
	return sum;
}

// console.log(productsCheckOut.length);
const updateShoppingCartHTML = function () {
    if (productsInCart.length > 0) {
		let result = productsCheckOut.map(product => {
			// console.log('yes');
			return `<div class="form-product">
                        <div class="form-img">
                            <img class="img-responsive" src="${product.image}" width="100px"/>
                        </div>
                        <div class="">
                            <div class="">${product.name}</div>
                            <div class=""><small>Quantity: <span>${product.count}</span></small></div>
                            <h6><span>&#8369;</span>${product.price}</h6>
                        </div>
                     </div>
                     <div class="form-group"><hr /></div>
                     `
        });
        createCartHistory.innerHTML = result.join('') + 
            `<div class="form-group">
                <div class="">
                    <strong>Subtotal</strong>
                    <div class="pull-right"><span>&#8369;</span><span>${countTheSumPrice()}</span></div>
                </div>
                <div class="">
                    <small>Shipping</small>
                    <div class="pull-right"><span>-</span></div>
                </div>
            </div>
            <div class="form-group"><hr /></div>
            <div class="form-group">
                <div class="">
                    <strong>Order Total</strong>
                <div class="pull-right"><span>&#8369;</span><span>${countTheSumPrice()}</span></div>
            </div>`;
        document.querySelector('.checkout').classList.remove('hidden');
    }   
    else {
		document.querySelector('.checkout').classList.add('hidden');
	}
}

menutoggle ();
updateShoppingCartHTML();

const submit = document.querySelector("#fromValidate");
const firstName = document.querySelector(".first_name");
const lastName = document.querySelector(".last_name");
const emailadd = document.querySelector(".email");
const deliveryAddress = document.querySelector(".address");
const deliveryCity = document.querySelector(".city");
const deliveryCountry  = document.querySelector(".country");
const zip_code = document.querySelector(".zip_code");
const inputTelNum = document.querySelector(".inputTel");

function lastNameField () {
    if (!lastName.value) {
        return false;       
    }
    return true;
}

function email () {   
    if (!emailadd.value) {
        return false;      
    }
    return true;
  }

function address () {    
    if (!deliveryAddress.value) {
        return false;      
    }
    return true;
 }

 function city () {   
    if (!deliveryCity.value) {
        return false;             
    }
    return true;
 }

 function country () { 
    if (!deliveryCountry .value) {
        return false;            
    }
    return true;
 }

 function zipCode () {   
    if (!zip_code.value) {
        return false;         
    }
        return true;
 } 

 function inputTel () {
    if (!inputTelNum.value) {
        return false;
    } else {
        return true;
    }
 } 

function firstNameField () {
      if (!firstName.value) {
          return false;
      } else {
        return true;
      }
  }

submit.addEventListener('click', (e) => {
if (e.target.classList.contains('btn-submit')) {
    if (firstNameField() === true && lastNameField() === true && email() === true && address() === true && city() === true && inputTel() === true)  {
        let formData =  {
            firstname: firstName.value,
            lastname: lastName.value,
            email: emailadd.value,
            address: deliveryAddress.value,
            city: deliveryCity.value,
            country: deliveryCountry.value,
            tel: inputTelNum.value,
            zip: zip_code.value,
        } 
        localStorage.setItem('buyerInfo', JSON.stringify(formData));
        localStorage.removeItem('shoppingCart');
        updateShoppingCartHTML();
        window.open('success.html');

    }
}
});




