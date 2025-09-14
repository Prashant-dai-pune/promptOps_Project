document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var operator = document.getElementById('operator').value;

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num1: num1,
            num2: num2,
            operator: operator
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById('result').textContent = data.result;
    });
});