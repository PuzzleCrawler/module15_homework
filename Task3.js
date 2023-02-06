const wsUri = "wss://echo.websocket.org/";

function pageLoaded() {
  const infoOutput = document.querySelector(".info_output");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.querySelector("chat_input");
  const sendBtn = document.querySelector(".btn_send");
  
  let socket = new WebSocket(wsUri);
  
  socket.onopen = () => {
    infoOutput.innerText = "Соединение установлено";
  }
  
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  }
  
  socket.onerror = () => {
    infoOutput.innerText = "При передаче данных произошла ошибка";
  }
  
  sendBtn.addEventListener("click", sendMessage);
  
  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
  }
  
  function writeToChat(message, isReceived) {
    let messageHTML = `<div class="${isReceived? "received" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }
}

const geolocationBtn = document.querySelector(".btn_geolocation");
geolocationBtn.addEventListener("click", sendGeolocation);

function sendGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let geolocationMessage = 'https://www.openstreetmap.org/#map=18/' + lat + '/' + lon;
        socket.send(geolocationMessage);
        writeToChat(geolocationMessage, false);
    });
}

document.addEventListener("DOMContentLoaded", pageLoaded);