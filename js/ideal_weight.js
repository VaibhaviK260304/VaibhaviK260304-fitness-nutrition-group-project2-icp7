<script>
function calculate() {
    const input1 = document.getElementById("age");

    const input2 = document.getElementById("height");

    const multiply = input1.value * input2.value;

    const resultElement = document.getElementById("result");

    resultElement.innerText = `00.00 : ${multiply}`;    

}
</script>