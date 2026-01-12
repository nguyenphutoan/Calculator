const inputDisplay = document.getElementById("input");
const outputDisplay = document.getElementById("output")
var preAns = '';

function addInput(x) {
    if(inputDisplay.innerText.length>=70) {
        outputDisplay.innerText = 'đạt giới hạn độ dài';
        return;
    }

    if (inputDisplay) {
        inputDisplay.innerText = inputDisplay.innerText + x;
    }
}

function clearScreen() {
    inputDisplay.innerText='';
    outputDisplay.innerText='';
}

function del() {
    inputDisplay.innerText = inputDisplay.innerText.slice(0, -1);
}

function getPreAns() {
    let temp = inputDisplay.innerText + preAns;
    if(temp.length >=70) {
        outputDisplay.innerText = 'giới hạn độ dài';
    }
    else {
        inputDisplay.innerText = temp;
    }
}

function result() {
    let content = inputDisplay.innerText;
    
    let fixContent = content.replaceAll("×", "*").replaceAll("÷", "/");
    
    try {
        let answer = eval(fixContent);
        if (!isFinite(answer)) {
            outputDisplay.innerText = "Không thể chia cho 0";
            return;
        }
        outputDisplay.innerText = answer;
        preAns = answer;

    } catch (e) {
        outputDisplay.innerText = 'Phép tính lỗi!';
        
        console.log("Lỗi tính toán:", e);
    }
}
