// VARIABLES FOR DISPLAY, BUTTONS, & OPERATIONS
let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btn"); // buttons.length = 17

let operation = "";

// FUNCTIONS
function concatOperation(button) {
    if(button.classList.contains("operator")) {
        if(!operation) {
            return;
        };
    };
    operation += button.dataset.value;
    display.innerHTML = operation;
};

function callAction(button) {
    switch(button.dataset.value) {
        case "calculate":
            operation = eval(operation).toString();
            display.innerHTML = operation;
            break;
        case "backspace":
            operation = operation.slice(0, -1);
            display.innerHTML = operation;
            break;
        case "clear":
            operation = "";
            display.innerHTML = "";
            break;
    };
};

// CALCULATOR LOOP
for(let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener("click", function() {
        switch(button.classList.contains("action")) {
            case true:
                if(button.classList.contains("operator")) {
                    concatOperation(button);
                } else {
                    callAction(button);
                }
                break;
            case false:
                    concatOperation(button);
                break;
        };
    });
};


// LITERALLY THE SIMPLER VERSION OF THE LOOP ABOVE
// for(let i = 0; i < buttons.length; i++) {
//     let button = buttons[i];

//     button.addEventListener("click", function() {
//         switch(button.classList.contains("action")) {
//             case true:
//                 callAction(button);
//                 break;
//             case false:
//                 concatOperation(button);
//                 break;
//         };
//     });
// };