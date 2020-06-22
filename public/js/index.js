const socket = io.connect("localhost:3000");

document.addEventListener("DOMContentLoaded", onDomReadyHandler);

function onDomReadyHandler(event) {
  socket.on("carInfo", (data) => {
    const res = data.split(" ");
    const id = res[1];
    const buffer = res[3].split(",");

    console.log(id, buffer);

    if (id == 144) {
      console.log(id, buffer);
      console.log("test");
    }

    // document.body.textContent = "can id :" + id + "buffer : " + buffer;
    // console.log(JSON.parse(data));
    //{id:513,buffer:[0,0,64,0,0,0,0,128,]}
  });
}
