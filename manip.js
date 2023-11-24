function appendValue(value) {
    document.getElementById('display').value += value;
}

function appendFunction(func) {
    document.getElementById('display').value += func + '(';
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Invalide';
    }
}