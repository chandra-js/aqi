
const url = "wss://city-ws.herokuapp.com/";
let socket = new WebSocket(url);


export const initiateSocket = () => {
    socket.onopen = function(e) {
        console.timeLog("[open] Connection established");
      };
}

export const disconnectSocket = () => {
    socket.onclose = function(event) {
        if (event.wasClean) {
          console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
          // e.g. server process killed or network down
          // event.code is usually 1006 in this case
          console.log('[close] Connection died');
        }
      };
  }
export const subscribeToChat = (cb) => {
    socket.onmessage = function(event) {
        return cb(null, event.data);
      };
}

export const error = (cb) =>{
    socket.onerror = function(error) {
        return cb(null, error.message);
      };
}

  