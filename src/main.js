import './style.css'
import { setupChat } from './chat.js'

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col h-screen max-w-2xl mx-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Simple Chat</h1>
    <div id="messages" class="flex-1 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg"></div>
    <div class="flex gap-2">
      <input 
        id="messageInput" 
        type="text" 
        placeholder="Type a message..." 
        class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        id="sendButton" 
        class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
  </div>
`

setupChat(
  document.querySelector('#messages'),
  document.querySelector('#messageInput'),
  document.querySelector('#sendButton')
)
