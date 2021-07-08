// Common minus and plus btn 
function PriceCalculate(inputId, displayId, price, isIncease) {
    const QuantityInput = document.getElementById(inputId);
    const qantityNumber = parseInt(QuantityInput.value);
    let quantityOfProduct = qantityNumber;
    if(isIncease == true){
        quantityOfProduct = qantityNumber + 1
    }else if(isIncease == false && quantityOfProduct > 0){
        quantityOfProduct = qantityNumber - 1
    }
    QuantityInput.value = quantityOfProduct;

    const totalPrice = quantityOfProduct * price;
    document.getElementById(displayId).innerHTML = totalPrice;

    TotalPriceCount()
}

function TotalPriceCount() {
    const PhonePrice = parseFloat(document.getElementById('Price').innerText);
    const CasePrice = parseFloat(document.getElementById('CasePrice').innerText);
    const totalPrice = PhonePrice + CasePrice;
    const tax = totalPrice * (5 / 100);
    const taxMoney = tax.toFixed(2);
    const inTotalBill = taxMoney + totalPrice;
    

    document.getElementById('totalPrice').innerHTML = "$" + totalPrice;
    document.getElementById('tax').innerHTML = "$" + taxMoney;
    document.getElementById('inTotalBill').innerHTML = "$" + inTotalBill;
    
}

var remove = document.getElementsByClassName("remove-item");
for (let i = 0; i < remove.length; i++) {
    const btn = remove[i];
    btn.addEventListener('click', function (e) {
        var x = e.target.parentNode;
        var y = x.parentNode.parentNode
        y.style.display = "none";
    })
    
}


document.getElementById('OrderBtn').addEventListener('click', function () {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('#Order_page').style.display = 'block';
    
})







