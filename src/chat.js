export function setupChat(messagesContainer, messageInput, sendButton) {
  const addMessage = (text, isUser) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`;
    
    const messageBubble = document.createElement('div');
    messageBubble.className = `max-w-xs px-4 py-2 rounded-lg ${
      isUser 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-200 text-gray-800'
    }`;
    messageBubble.textContent = text;
    
    messageDiv.appendChild(messageBubble);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const getResponse = (userMessage) => {
    const responses = [
      "That's interesting! Tell me more.",
      "I see what you mean.",
      "Thanks for sharing that!",
      "How does that make you feel?",
      "That's a great point!",
      "I understand.",
      "Could you elaborate on that?",
      "That's fascinating!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = () => {
    const message = messageInput.value.trim();
    if (message) {
      addMessage(message, true);
      messageInput.value = '';
      
      setTimeout(() => {
        addMessage(getResponse(message), false);
      }, 500);
    }
  };

  sendButton.addEventListener('click', handleSend);
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  });
}
