let hasil, input1, input2, operator, btnhasil, btnreset;
    
    input1 = document.querySelectorAll("input")[1];
    input2 = document.querySelectorAll("input")[2];
    hasil = document.querySelectorAll("input")[0];
    operator = document.querySelectorAll("select")[0];
    btnhasil = document.querySelectorAll("button")[0];
    btnreset = document.querySelectorAll("button")[1];

    function hitung(){
        if(operator.value === "+"){
            hasil.value = Number(input1.value) + Number
            (input2.value);
        } else if (operator.value === "-") {
            hasil.value = Number(input1.value) - Number
            (input2.value);
        } else if (operator.value === "x") {
             hasil.value = Number(input1.value) * Number
            (input2.value);
        } else if (operator.value === "/") {
            hasil.value = Number(input1.value) / Number
            (input2.value);
        }
    } 

    function reset() {
        hasil.value = 0;
        input1.value = 0;
        input2.value = 0;
    }

btnhasil.addEventListener ("click", hitung);
btnreset.addEventListener("click", reset);