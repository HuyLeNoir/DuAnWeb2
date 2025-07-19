//------------------------------------------------------UNSED
function togglePassword(eye) {
const passwordInput = document.getElementById("password");
    if(passwordInput.type === "password") {
        passwordInput.type = "text";
        eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    }else {
        passwordInput.type = "password";
        eye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
}