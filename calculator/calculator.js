const buttons = document.querySelectorAll("button");

let arr = [];
const outputBtn = document.getElementById("output");
console.log(outputBtn);

function isOperator(token) {
    return ["+", "-", "/", "*", "=", "."].includes(token);
}

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        const inputText = e.target.textContent;
        if (!isOperator(inputText)) {
            if (arr.length > 0 && !isOperator(arr[arr.length-1])) {
                const prevNum = arr.pop();
                const res = parseInt(prevNum.toString()+inputText);
                arr.push(res);
            } else {
                arr.push(parseInt(inputText));
            }
        } else {
            if (arr.length > 0 && isOperator(arr[arr.length-1])) {
                arr.pop();
            }
            arr.push(inputText);
        }
        console.log(arr);
        outputBtn.textContent += inputText;
        
        if (arr.length === 4) {
            const [num1, operator, num2 ] =  arr;
            const result = calculateResult(num1, num2, operator);
            console.log("result: ", num1, num2, result)
            outputBtn.textContent = result;
            outputBtn.textContent+=arr[3];
            arr=[result, arr[3]];
        }
    })
    button.addEventListener('keypress', (e) => {
        const inputText = e.target.textContent;
        if (!isOperator(inputText)) {
            if (arr.length > 0 && !isOperator(arr[arr.length-1])) {
                const prevNum = arr.pop();
                const res = parseInt(prevNum.toString()+inputText);
                arr.push(res);
            } else {
                arr.push(parseInt(inputText));
            }
        } else {
            if (arr.length > 0 && isOperator(arr[arr.length-1])) {
                arr.pop();
            }
            arr.push(inputText);
        }
        console.log(arr);
        outputBtn.textContent += inputText;
        
        if (arr.length === 4) {
            const [num1, operator, num2 ] =  arr;
            const result = calculateResult(num1, num2, operator);
            console.log("result: ", num1, num2, result)
            outputBtn.textContent = result;
            outputBtn.textContent+=arr[3];
            arr=[result, arr[3]];
        }
    })
}

