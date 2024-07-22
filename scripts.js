document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';
        getBotResponse(userInput);
    }
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('send-btn').click();
    }
});

function addMessage(message, className) {
    let messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = message;
    document.getElementById('messages').appendChild(messageElement);
    messageElement.scrollIntoView();
}

function getBotResponse(userInput) {
    // Placeholder for actual bot response logic
    let botResponse = "This is a dummy response.";
    addMessage(botResponse, 'bot-message');
}
