import QRCode from 'exports-loader?QRCode!qrcodejs/qrcode'
new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");