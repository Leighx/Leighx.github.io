var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;
var test = document.getElementById('test').addEventListener("click", displayTotal);



function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function rem_selection(x) {
    quantities[x] = quantities[x] - 1;
    totals[x] = totals[x] - prices[x];


    if (quantities[x] === -1) {
        quantities[x] = quantities[x] + 1;
        totals[x] = totals[x] + prices[x];
    }

    display_all();
}



function displayTotal() {

    alert("The total is R" + (totals[0] + totals[1] + totals[2] + totals[3]));

}


function display_all() {

    var myTable = "<table><th style ='width: 100px; color: white; text-align: center;'>Num</th>";
    myTable += "<th style='width: 100px; color: white; text-align: center;'>Item</th>";
    myTable += "<th style='width: 100px; color: white; text-align: center;'>Price</th>";
    myTable += "<th style='width: 100px; color: white; text-align: center;'>Quantity</th>"
    myTable += "<th style='width: 100px; color: white; text-align: center;'>Total</th>";
    myTable += "<th style='width: 100px; color: white; text-align: center;'>Add</th>";
    myTable += "<th style='width: 100px; color: white; text-align: center;'>Remove</th>";


    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='rem_selection(" + i + ")'>Remove</button></td>";

    }

    myTable += "</table>";




    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function() {
    display_all();
}