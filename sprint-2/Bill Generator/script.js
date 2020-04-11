var menuItems = [
    { name: 'Dosa', price: 50 },
    { name: 'Idly', price: 20 },
    { name: 'Biriyani', price: 200 },
    { name: 'Noodles', price: 150 },
    { name: 'fried Rice', price: 80 },
]

var billedItems = [] // name , price , quantiy , total

function init() {
    var menuSelect = document.querySelector('#menu')
    //console.log(menuSelect)
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i] //menuItem will be in obj
        var option = document.createElement('option')
        option.innerText = menuItem.name
        option.value = menuItem.name
        menuSelect.appendChild(option)

    }
}

function getItem(name) {
    for (var i = 0; i < menuItems.length; i++) {
        var item = menuItems[i];
        if (name == item.name) {
            return item; // item contains nname and price
        }
    }
}
function checkBilleditem(name) {
    for (var i = 0; i < billedItems.length; i++) {
        var billedItem = billedItems[i]
        if (billedItem.name == name) {
            return true
        }
    }
    return false
}

function getWholeTotal() {
    var sum = 0;
    billedItems.forEach(function (billedItem) {
        sum += billedItem.total
    })
    return sum;
}

init();

var itemno = 0;

function generateBill() {
    var menuSelect = document.querySelector('#menu')

    var name = menuSelect.value // dosa idly
    var item = getItem(name);
    //console.log(item);

    if (checkBilleditem(name) == true) {
        alert("item name already added in bill")
        return;
    }

    var quantity = document.querySelector('#quantity').value
    itemno++;
    var total = item.price * quantity;
    var billedItem = {
        name: item.name,
        quantity: quantity,
        total: total,
        price: item.price,
        itemno: itemno
    }
    billedItems.push(billedItem);
    //console.log(billedItems)



    var tableBody = document.querySelector('#table_body');
    var tableRow = document.createElement('tr')
    tableRow.innerHTML = '<td>' + itemno + '</td> ' + '<td>' + item.name + '</td> ' + '<td>' + quantity + '</td> ' + '<td>' + item.price + '</td>' + '<td>' + total + '</td>'
    tableBody.appendChild(tableRow)

    var wholeTotal = getWholeTotal()
    var discountedPrice = 20 / 100 * wholeTotal
    var vat = 10 / 100 * wholeTotal
    var finalBill= wholeTotal - discountedPrice + vat
    var tablefooter = document.querySelector('#table_foot');

    tablefooter.innerHTML = '<tr><td colspan="5"> Subtotal: ' + wholeTotal + '</td></tr>' +
    '<tr><td colspan="5"> Discount (20%): ' + discountedPrice + '</td></tr>' +
    '<tr><td colspan="5"> VAT (10%) ' + vat+ '</td></tr>' +
    '<tr><td colspan="5"> total: ' + finalBill+ '</td></tr>'
}
