const productsHickvision = [
    {
        id: 1,
        name: "DS-2CD2H66G2-IZS",
        images: {
            imagesA: "./images/2CD2H66G2-1.png",
            imagesB: "./images/2CD2H66G2-2.png",
            imagesC: "./images/2CD2H66G2-3.png",
            imagesD: "./images/2CD2H66G2-4.png"
        },
        prodNameContent:"6 MP AcuSense Motorized Varifocal Turret Network Camera",
        description: {
            description1: "High quality imaging with 6 MP resolution",
            description2: "Motorized varifocal lens for easy installation and monitoring",
            description3: "Excellent low-light performance via powered-by-DarkFighter technology",
            description4: "Clear imaging against strong back light due to 120 dB true WDR technology",
            description5: "Focus on human and vehicle targets classification based on deep learning",
            description6: "Audio and alarm interface available",
            description7: "Water and dust resistant (IP66) and vandal proof (IK10)",
            description8: "",
            description9: ""
        },
        price: "3300",
        count: 1
    },
    {
        id: 2,
        name: "DS-2CD2T26G2-2I/4I",
        images: {
            imagesA: "./images/2CD2T26G2-2I4I-1.png",
            imagesB: "./images/2CD2T26G2-2I4I-2.png",
            imagesC: "./images/2CD2T26G2-2I4I-3.png",
            imagesD: "./images/HD-Video-.png"
        },
        prodNameContent:"2 MP AcuSense Fixed Bullet Network Camera",
        description: {
            description1: "High quality imaging with 2 MP resolution",
            description2: "Excellent low-light performance with powered-by-DarkFighter technology",
            description3: "Efficient H.265+ compression technology",
            description4: "Clear imaging against strong back light due to 120 dB WDR technology",
            description5: "Focus on human and vehicle targets classification based on deep learning",
            description6: "Water and dust resistant (IP67)",
            description7: "",
            description8: "",
            description9: ""
        },
        price: "5960",
        count: 1
    },
    {
        id: 3,
        name: "DS-2CD2T87G2-L",
        images: {
            imagesA: "./images/2CD2T87G2-1.png",
            imagesB: "./images/2CD2T87G2-2.png",
            imagesC: "./images/2CD2T87G2-3.png",
            imagesD: "./images/2CD2T87G2-4.png"
        },
        prodNameContent:"4 K ColorVu Fixed Bullet Network Camera",
        description: {
            description1: "High quality imaging with 8 MP resolution",
            description2: "Efficient H.265+ compression technology",
            description3: "Clear imaging against strong back light due to 130 dB WDR technology",
            description4: "Focus on human and vehicle targets classification based on deep learning",
            description5: "24/7 colorful imaging",
            description6: "",
            description7: "",
            description8: "",
            description9: ""
        },
        price: "6780",
        count: 1
    },
    {
        id: 4,
        name: "DS-2DE3C210IX-DE(C1)(T5)",
        images: {
            imagesA: "./images/2DE3C210IX-1.png",
            imagesB: "./images/2DE3C210IX-2.png",
            imagesC: "./images/2DE3C210IX-3.png",
            imagesD: "./images/HD-Video-.png"
        },
        prodNameContent:"3-inch 2 MP 10X Powered by DarkFighter IR Network Speed Dome",
        description: {
            description1: "High quality imaging with 2 MP resolution",
            description2: "Excellent low-light performance with powered-by-DarkFighter technology",
            description3: "10x optical zoom and 16x digital zoom provide close up views over an expansive area",
            description4: "Up to 50 m IR range ensures safety at night",
            description5: "Supports face capture, detects, captures, grades and selects",
            description6: "faces in motion, and outputs the best face picture",
            description7: "Water and dust resistant (IP66)",
            description8: "",
            description9: ""
        },
        price: "10900",
        count: 1
    },
    {
        id: 5,
        name: "DS-2CV2146G0-IDW",
        images: {
            imagesA: "./images/2CV2146G0-1.png",
            imagesB: "./images/2CV2146G0-2.png",
            imagesC: "./images/2CV2146G0-4.png",
            imagesD: "./images/HD-Video-.png"
        },
        prodNameContent: "4 MP Outdoor AcuSense Fixed Dome Network Camera",
        description: {
            description1: "High quality imaging with 4 MP resolution",
            description2: "Realizing Wi-Fi connection and easy installation",
            description3: "Provides real-time security via built-in two-way audio",
            description4: "Efficient H.265 compression technology",
            description5: "EXIR 2.0, advanced infrared technology with long IR distance",
            description6: "Wi-Fi connection with Hik-Connect directly is not possible",
            description7: "Water and dust resistant (IP66)",
            description8: "Support micro SD/SDHC/SDXC card, up to 256 GB",
            description9: "False alarm reduction through human and vehicle target classification based on deep learning"
        },
        price: "6350",
        count: 1
    },
    {
        id: 6,
        name: "DS-2XS2T47G0-LD(W)H/4G",
        images: {
            imagesA: "./images/2XS2T47G0-1.png",
            imagesB: "./images/2XS2T47G0-2.png",
            imagesC: "./images/2XS2T47G0-3.png",
            imagesD: "./images/HD-Video-.png"
        },
        prodNameContent:"4 MP Outdoor AcuSense Fixed Dome Network Camera",
        description: {
            description1: "High quality imaging with 4 MP resolution",
            description2: "Standalone with solar panel and built-in battery",
            description3: "24/7 colorful imaging",
            description4: "Efficient H.265+ compression technology",
            description5: "Provide real-time security via built-in two-way audio",
            description6: "Water and dust resistant (IP67)",
            description7: "Stability against category 12 typhoon",
            description8: "Support 4G (LTE-TDD/LTE-FDD/TD-SCDMA/EVDO) communication",
            description9: ""
        },
        price: "13500",
        count: 1
    }
]


//close shopping cart modal (usually x button) with a class of producstOnCart
//remves stopScrolling class
function closeCart() {
	const cart = document.querySelector('.productsCart-container');
	cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling');
}

//open shopping cart modal using shopping cart logo with a class of shoppingCartButton
//Make user unable to scroll using class stopScrolling
const openShopCart = document.querySelector('.cart');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.productsCart-container');
	cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling');
    updateShoppingCartHTML();
});

//close shopping cart using closebutton
const closeShopCart = document.querySelector('#closeButton');
closeShopCart.addEventListener('click', closeCart);

const parentElement = document.querySelector('.hikProducts');
const parentElement2 = document.querySelector('.detailedProducts');//fro detailed products related products
const parentSelectedElement = document.querySelector('.selectedProduct');
const productList = document.querySelector('.hikProduct')
const nav = document.querySelector ('nav');


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const arrayProducts = () => {for (let i = 0; i < productsHickvision.length; i++) {
    const element = productsHickvision[i];
    let x = numberWithCommas(element.price);
    let result = `<div class="col-4">
                    <a href="product-details.html?id=${element.id}"><img src="${element.images.imagesA}"></a>
                    <h4>${element.name}</h4>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>&#8369;${x}</p>
                </div>`
    if(parentElement==null){
        break;
    } else {
        parentElement.innerHTML += result;
    }
                
}}

const selectedproduct = () => {
    window.location.href;
    const params = new URLSearchParams(window.location.search);
    const product = params.get('id');
    return product;
}

const arraySelectedProducts = () => {
    const product = selectedproduct();
    for (let i = 0; i < productsHickvision.length; i++) {
    const element = productsHickvision[i];
    if (product==element.id) {
        let x = numberWithCommas(element.price);
        // console.log(x);
        let result = `<div class="col-2">
                        <img src="${element.images.imagesA}" alt="" max-width="100%" id="productImg">
                        <div class="small-img-row">
                            <div class="small-img-col">
                                <img src="${element.images.imagesA}" alt="" class="small-img">
                            </div>
                            <div class="small-img-col">
                                <img src="${element.images.imagesB}" alt="" class="small-img">
                            </div>
                            <div class="small-img-col">
                                <img src="${element.images.imagesC}" alt="" class="small-img">
                            </div>
                            <div class="small-img-col">
                                <img src="${element.images.imagesD}" alt="" class="small-img">
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <p class="productName">${element.name}</p>
                        <h1 id="prodname">${element.prodNameContent}</h1>
                        <h4>&#8369;<span class="priceValue">${element.price}</span></h4>
                        
                        <a href="#" class="btn addToCart" data-product-id="${element.id}">Add to Cart</a>
                        
                        <h3>Product Details <i class="fa fa-indent"></i></h3><br>
                        <ul>
                            <li>${element.description.description1}</li>
                            <li>${element.description.description2}</li>
                            <li>${element.description.description3}</li>
                            <li>${element.description.description4}</li>
                            <li>${element.description.description5}</li>
                            <li>${element.description.description6}</li>
                            <li>${element.description.description7}</li>
                            <li>${element.description.description8}</li>
                            <li>${element.description.description9}</li>
                        </ul>
                    </div>`
        parentSelectedElement.innerHTML = result; 
        }
    };      
     
}


//for related detailed products
    const arrayDetailedProducts = () => {
        if(parentElement2 != null){
            for (let i = 0; i < productsHickvision.length; i++) {
        const element2 = productsHickvision[i];
        const product2 = selectedproduct();
        let x = numberWithCommas(element2.price);
        let result2 = `<div class="col-4">
                        <a href="product-details.html?id=${element2.id}"><img src="${element2.images.imagesA}"></a>
                        <h4>${element2.name}</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>&#8369;${x}</p>
                    </div>`
        if(product2 == element2.id) {
            i++;
            } else  {
                parentElement2.innerHTML += result2;
            }  
        }              
    }
}

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

// const productImg = document.querySelector('#productImg');
// const smallImg = document.querySelectorAll('.small-img')
// smallImg.addEventListener('click', () => {
//     console.log();
// });

// Change product focus image


arrayProducts();
selectedproduct();
arrayDetailedProducts();
arraySelectedProducts();





