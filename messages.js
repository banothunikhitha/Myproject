function sendMessage() {
    const newMessage = document.getElementById("new-message").value;
    const messageList = document.getElementById("message-list");
    const newMessageItem = document.createElement("li");
    const timestamp = getCurrentTime();
    document.getElementById("new-message").value = "";

    newMessageItem.classList.add("message");
    newMessageItem.innerHTML = `<span class="username">User1:</span> ${newMessage} <span class="timestamp">${timestamp}</span>`;
    messageList.appendChild(newMessageItem);

    sendAutoReply(newMessage);
  }

  function sendAutoReply(message) {
    let autoReply = "";
    const messageList = document.getElementById("message-list");
    const autoReplyItem = document.createElement("li");
    const timestamp = getCurrentTime();

    if (message.toLowerCase().includes("hi")) {
      autoReply = "Hi there! How can I assist you?";
    } else if (message.toLowerCase().includes("help")) {
      autoReply = "Sure, I'm here to help!";
    } else if (message.toLowerCase().includes("thank you")) {
      autoReply = "You're welcome!";
    } else if (message.toLowerCase().includes("bye")) {
      autoReply = "Goodbye!";
    } else if (message.toLowerCase().includes("how are you")) {
      autoReply = "I'm doing well, thank you!";
    } else {
      autoReply = "I'm sorry, I don't understand.";
    }
    
    autoReplyItem.classList.add("message");
    autoReplyItem.innerHTML = `<span class="username">User2:</span> ${autoReply} <span class="timestamp">${timestamp}</span>`;
    messageList.appendChild(autoReplyItem);

    sendNotification("You received a direct message from User2");
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function sendNotification(message) {
    alert(message);
  }

  function searchMessages() {
    const searchTerm = document.getElementById("message-search").value.toLowerCase();
    const messages = document.getElementsByClassName("message");

    Array.from(messages).forEach(message => {
      const messageText = message.textContent.toLowerCase();
      if (messageText.includes(searchTerm)) {
        message.classList.add("highlight");
      } else {
        message.classList.remove("highlight");
      }
    });
  }

  function logout() {
    window.location.href = "login.html";
  }