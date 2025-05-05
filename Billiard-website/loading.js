const funnyMessages = [
    "Welcome to Legacy Billiard",
    "Please Wait.."
  ];
  
  const funnyMsgElement = document.getElementById("funny-msg");
  
  if (funnyMsgElement) {
    let remainingMessages = [...funnyMessages];
  
    function showNextFunnyMessage() {
      if (remainingMessages.length === 0) {
        window.location.href = "signup.html";
        return;
      }
  
      const randomIndex = Math.floor(Math.random() * remainingMessages.length);
      const message = remainingMessages.splice(randomIndex, 1)[0];
      funnyMsgElement.textContent = message;
  
      setTimeout(showNextFunnyMessage, 3000);
    }
  
    showNextFunnyMessage();
  }
  