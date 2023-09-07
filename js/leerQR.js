import QrScanner from "./qr-scanner.min.js";

const video = document.getElementById('qr-video');
const videoContainer = document.getElementById('video-container');
const camQrResult = document.getElementById('cam-qr-result');
const fileSelector = document.getElementById('file-selector');
const fileQrResult = document.getElementById('file-qr-result');

function setResult(label, result) {
    console.log(result.data);
    localStorage.setItem("alumno", result.data);
    localStorage.setItem("QrTimestamp", new Date().toString());
    window.location.href = "../html/lecturaQRExitosa.html";
}

// ####### Web Cam Scanning #######
const scanner = new QrScanner(video, result => setResult(camQrResult, result), {
    highlightScanRegion: true,
    highlightCodeOutline: true,
});

scanner.start();

// for debugging
window.scanner = scanner;

document.getElementById('stop-button').addEventListener('click', () => {
    scanner.stop();
    window.location.href = `${localStorage.getItem("back")}`;
});