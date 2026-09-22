let mnu = [
    {
        name: "Burger",
        price: 5,
        category: "Fast Food",
        available: true
    },
    {
        name: "Pizza",
        price: 4,
        category: "Fast Food",
        available: false
    },
    {
        name: "Pasta",
        price: 7,
        category: "Fast Food",
        available: true
    },
    {
        name: "Salad",
        price: 2,
        category: "Healthy Food",
        available: true
    },
    {
        name: "Shawarma",
        price: 4,
        category: "Fast Food",
        available: true
    }
];
function showMenu() {
    document.write("<h2>Menu</h2>");

    for (let i = 0; i < mnu.length; i++) {

        
        if (mnu[i].available === false) {
            continue;
        }

        document.write(mnu[i].name + " - $" + mnu[i].price + "<br>");
    }
}
showMenu();





let selectedFood = null;



while (selectedFood === null) {

    let choice = prompt("Enter your order : Burger , Pizza , Pasta , Salad , Shawarma");


    
    for (let i = 0; i < mnu.length; i++) {

        if (mnu[i].name === choice) {

            
            if (mnu[i].available === false) {
                alert("This food is unavailable");
                continue;
            }

            
            selectedFood = mnu[i];

            alert("Your order is being prepared");

            
            break;
        }
    }


    
    if (selectedFood === null) {
        alert("Please choose an available food");
    }
}



document.write("<h2>Selected Food</h2>");

for (let key in selectedFood) {
    document.write(key + ": " + selectedFood[key] + "<br>");
}



let quantity = Number(prompt("Enter quantity"));



let total = selectedFood.price * quantity;



document.write("<h2>Final Order</h2>");

document.write("Food: " + selectedFood.name + "<br>");
document.write("Price: $" + selectedFood.price + "<br>");
document.write("Quantity: " + quantity + "<br>");
document.write("Total Price: $" + total + "<br>");