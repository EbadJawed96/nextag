// Contact Form Submit
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const serviceType = document.getElementById('service-type').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields!');
    } else {
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.style.display = 'block';

        // Clear form
        document.getElementById('contact-form').reset();

        // Hide Thank You message after 3 seconds
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
        }, 3000);
    }
});

// Live Chat Dynamic Responses
const chatInput = document.getElementById('chat-input');
const chatContent = document.querySelector('.chat-content');

function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
}

function sendChatMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        // Display user message
        const userMessageElement = document.createElement('p');
        userMessageElement.textContent = `You: ${userMessage}`;
        chatContent.appendChild(userMessageElement);
        
        chatInput.value = ''; // Clear input field

        // Display typing indicator
        const typingIndicator = document.getElementById('typing-indicator');
        typingIndicator.style.display = 'block';

        // Simulate response after 1 second
        setTimeout(() => {
            const botResponse = document.createElement('p');
            botResponse.textContent = getChatbotResponse(userMessage);
            chatContent.appendChild(botResponse);
            chatContent.scrollTop = chatContent.scrollHeight; // Auto-scroll to the bottom

            // Hide typing indicator
            typingIndicator.style.display = 'none';
        }, 1000);
    }
}

// Simple chatbot logic to respond to messages
function getChatbotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return "Hello! How can I assist you today?";
    } else if (lowerCaseMessage.includes('price')) {
        return "Our pricing starts from $1000 depending on the service. Would you like more details?";
    } else if (lowerCaseMessage.includes('services')) {
        return "We offer Web Design, Branding, and Consulting services. What are you interested in?";
    } else if (lowerCaseMessage.includes('contact')) {
        return "You can contact us through this form or via email at contact@nex-tag.com.";
    } else {
        return "I'm not sure how to respond to that. Can you ask something else?";
    }
}
