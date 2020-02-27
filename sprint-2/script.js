function generatebill() {



    var menu = document.getElementById("menu").value;
    document.getElementById("item").innerHTML = menu

    var choosequantity = document.getElementById("choosequantity").value;
    document.getElementById("quantity").innerHTML = choosequantity

    if (menu == "DOSA") {
        document.getElementById("cost").innerHTML = 100
        document.getElementById("total").innerHTML = 100 * Number(choosequantity)
        document.getElementById("tax").innerHTML = 100 * Number(choosequantity)*5/100
        document.getElementById("tips").innerHTML = 100 * Number(choosequantity)*2/100
        document.getElementById("discount").innerHTML = 100 * Number(choosequantity)*10/100
        document.getElementById("bill").innerHTML = 100 * Number(choosequantity)*5/100 + 100 * Number(choosequantity)+ 100 * Number(choosequantity)*2/100-(100 * Number(choosequantity)*10/100)

    }

    else if(menu == "IDLLY") {

        document.getElementById("cost").innerHTML = 50
        document.getElementById("total").innerHTML = 50 * Number(choosequantity)
        document.getElementById("tax").innerHTML = 50 * Number(choosequantity)*5/100
        document.getElementById("tips").innerHTML = 50 * Number(choosequantity)*2/100
        document.getElementById("discount").innerHTML = 50 * Number(choosequantity)*10/100
        document.getElementById("bill").innerHTML = 50 * Number(choosequantity)*5/100 + 50 * Number(choosequantity)+ 50 * Number(choosequantity)*2/100-(50 * Number(choosequantity)*10/100)



    }
    else if(menu == "CHAPPATHI") {
        document.getElementById("cost").innerHTML = 60
        document.getElementById("total").innerHTML = 60 * Number(choosequantity)
        document.getElementById("tax").innerHTML = 60 * Number(choosequantity)*5/100
        document.getElementById("tips").innerHTML = 60 * Number(choosequantity)*2/100
        document.getElementById("discount").innerHTML = 60 * Number(choosequantity)*10/100
        document.getElementById("bill").innerHTML = 60* Number(choosequantity)*5/100 + 60 * Number(choosequantity)+ 60 * Number(choosequantity)*2/100-(60 * Number(choosequantity)*10/100)
}
    else if(menu == "PIZZA") {
        document.getElementById("cost").innerHTML = 300
        document.getElementById("total").innerHTML = 300 * Number(choosequantity)
        document.getElementById("tax").innerHTML = 300 * Number(choosequantity)*5/100
        document.getElementById("tips").innerHTML = 300 * Number(choosequantity)*2/100
        document.getElementById("discount").innerHTML = 300 * Number(choosequantity)*10/100
        document.getElementById("bill").innerHTML = 300* Number(choosequantity)*5/100 + 300 * Number(choosequantity)+ 300 * Number(choosequantity)*2/100-(300 * Number(choosequantity)*10/100)


}

else if(menu == "NOODLES") {
    document.getElementById("cost").innerHTML = 150
    document.getElementById("total").innerHTML = 150* Number(choosequantity)
    document.getElementById("tax").innerHTML = 150 * Number(choosequantity)*5/100
    document.getElementById("tips").innerHTML = 150 * Number(choosequantity)*2/100
    document.getElementById("discount").innerHTML = 150 * Number(choosequantity)*10/100
    document.getElementById("bill").innerHTML = 150* Number(choosequantity)*5/100 + 150 * Number(choosequantity)+ 150 * Number(choosequantity)*2/100-(150 * Number(choosequantity)*10/100)



    


}

else if(menu == "BIRIYANI") {
    document.getElementById("cost").innerHTML = 350
    document.getElementById("total").innerHTML = 350* Number(choosequantity)
    document.getElementById("tax").innerHTML = 350 * Number(choosequantity)*5/100
    document.getElementById("tips").innerHTML = 350 * Number(choosequantity)*2/100
    document.getElementById("discount").innerHTML = 350 * Number(choosequantity)*3/100
    document.getElementById("bill").innerHTML = 350* Number(choosequantity)*5/100 + 350 * Number(choosequantity)+ 350 * Number(choosequantity)*2/100-(350 * Number(choosequantity)*10/100)



    


}








}