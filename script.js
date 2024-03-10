const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");
let refresh = document.querySelector("#refresh");

function generateQR() {
    if(qrText.value.length > 0) {
        qrImage.src = apiUrl + qrText.value;
        imgBox.classList.add("max-h-80","border-2","border-black");
        qrText.value = "";
        refresh.classList.remove("hidden");
        refresh.classList.add("inline-block");
    } else {
        qrText.classList.add("text-rose-700");
        qrText.value = "Please Input Something ...";
        setTimeout(() => {
            qrText.value = "";
            qrText.classList.remove("text-rose-700");
        }, 2000)
    }
}

function refreshPage() {
    window.location.reload();
}