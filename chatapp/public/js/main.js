const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");
// get username and room from url using qs
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();
// Join Chatroom
socket.emit("joinRoom", { username, room });
console.log(username, room);

// get room users
socket.on("roomUsers", ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});
// message from server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);

  // scroll down automatically to newest message
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // grab value of the event where the element has an id of msg.
  let msg = e.target.elements.msg.value;

  msg = msg.trim();
  socket.emit("chatMessage", msg);

  // clear input
  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

// output message to dom
function outputMessage(message) {
  const div = document.createElement("div");
  // div.classList.add("message");
  // const p = document.createElement("p");
  // p.classList.add("metta");
  // p.innerText = message.username;
  // p.innerHTML += `<span>${message.time}`;
  // div.appendChild(p);

  // const para = document.createElement("p");
  // para.classList.add("text");
  // para.innerText = message.text;
  // div.appendChild(para);
  // This works too
  div.classList.add("message");
  div.innerHTML = `<p class='meta'>${message.username} <span>${message.time}</span></p>
  <p class='text'>
  ${message.text}
  </p>`;

  document.querySelector(".chat-messages").appendChild(div);
}

// add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
  // console.log(roomName);
}

// add users to DOM
function outputUsers(users) {
  userList.innerHTML = `
  ${users.map((user) => `<li>${user.username}</li>`).join("")}`;
}
