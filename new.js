function appendValue(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function deleteLastChar() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
  var result = document.getElementById('result').value;
  try {
    document.getElementById('result').value = eval(result);
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
