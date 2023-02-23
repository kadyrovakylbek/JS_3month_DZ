
const gmailInput = document.querySelector("#gmailInput");
const gmailCheck = document.querySelector(".gmailCheck");
const gmailResult = document.querySelector("span");
const password = document.querySelector("#passwordInput");

const gmailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const passwordRegExp = /^[A-Za-z]\w{4,14}$/

gmailCheck.addEventListener("click", () => {
    console.log(gmailInput.value)
    if (gmailRegExp.test(gmailInput.value)) {
        alert('Вы успешно зашли на свой Email аккаунт!')

    }else {
        alert('Error! Введите коректно свой email или пароль!')
    }
})

let i = 0;


