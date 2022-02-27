window.onload = run();
function run() {
    var user = 'Sherise';
    var salutation = 'Hello, ';
    var greetingText = salutation + user + ' ! Here are the latest NetBeans IDE reviews.';
    
    console.log('Greeting Text : ' + greetingText);

    var greetingElement = document.getElementById('greeting');
    
    if(greetingElement) {
        greetingElement.textContent = greetingText;
    }
    
    var price = 20;
    var studentDiscount = 0.5;
    var studentPrice = price - (price*studentDiscount);
    var priceElement = document.getElementById('price');
    var studentPriceElement = document.getElementById('student-price');
    
    console.log('Price : ' + price);
    console.log('Student Price : ' + studentPrice);

    if(priceElement){
        priceElement.textContent = 'It is open-source and free. But you can donate $' + price.toFixed(2);
    }
    
    if(studentPriceElement){
        studentPriceElement.textContent = 'It is open-source and free. But as a student, you can donate $' +studentPrice.toFixed(2);
    }
}
