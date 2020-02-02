function guess() {
    values=document.getElementsByName("group")
    val = 0
    for(var i=0; i<values.length; i++){
        if (values[i].checked) {
            x = parseInt(values[i].getAttribute("value"));
            val = val + (0x1 << x);            
        }        
    }
    if (val == 0 || val > 30) {
        alert("You tried to trick me! Haha! (your number was not on the list)");
    } else {
        alert("Your secret number is: " + val);
    }
}