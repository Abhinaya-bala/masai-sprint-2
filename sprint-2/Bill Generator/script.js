
function calculaateBill(itemValue, choosequantity) {
    document.getElementById("cost").innerHTML = itemValue
    document.getElementById("total").innerHTML = itemValue * Number(choosequantity)
    document.getElementById("tax").innerHTML = itemValue * Number(choosequantity) * 5 / 100
    document.getElementById("tips").innerHTML = itemValue * Number(choosequantity) * 2 / 100
    document.getElementById("discount").innerHTML = itemValue * Number(choosequantity) * 10 / 100
    document.getElementById("bill").innerHTML = itemValue * Number(choosequantity) * 5 / 100 + itemValue * Number(choosequantity) + itemValue * Number(choosequantity) * 2 / 100 - (100 * Number(choosequantity) * 10 / 100)
}
function generatebill() {



    var menu = document.getElementById("menu").value;
    document.getElementById("item").innerHTML = menu

    var choosequantity = document.getElementById("choosequantity").value;
    document.getElementById("quantity").innerHTML = choosequantity

    if (menu == "DOSA") {
        calculaateBill(100, choosequantity);

    }

    else if (menu == "IDLLY") {
        calculaateBill(50, choosequantity);

}
    else if (menu == "CHAPPATHI") {
        calculaateBill(60, choosequantity);
    }
    else if (menu == "PIZZA") {
        calculaateBill(350, choosequantity);



    }

    else if (menu == "NOODLES") {
        calculaateBill(150, choosequantity);


    }

    else if (menu == "BIRIYANI") {
        calculaateBill(350, choosequantity);






    }








}