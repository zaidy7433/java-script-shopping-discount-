var amount = Number(prompt("enter your shopping amount: "));
if (amount > 5000) {
    alert("shopping amount: " + amount + "\ndiscount: " + (amount * 0.15) + "\nfinal amount: " + (amount - (amount * 0.15)));
} else {
    alert("shopping amount: " + amount + "\ndiscount: " + (amount * 0.05) + "\nfinal amount: " + (amount - (amount * 0.05)));
}