(function (window, document, undefined) {
    window.onload = run;
    function run() {

        var messages = [];
        var sender = 'Morpheous';
        var replier = 'Neo';

        var messageType = {
            out: 'out-message', 
            in: 'in-message', 
            unknown: 'unknown-message'
        };

        var data = [
            {
                type: messageType.in, 
                user: sender, 
                message: 'Hello Neo. Do you know who this is?'
            },
            {
                type: messageType.out, 
                user: replier, 
                message: 'Moepheous?'
            },
            {
                type: messageType.in, 
                user: sender, 
                message: 'Yes. I’ve been looking for you, Neo. I don’t know if you’re ready to see what I want to show you, but unfortunately you and I have run out of time. They’re coming for you, Neo, and I don’t know what they’re going to do.'
            },
            {
                type: messageType.out, 
                user: replier, 
                message: 'Who’s coming for me?'
            },
            {
                type: messageType.in, 
                user: sender, 
                message: 'Stand up and see for yourself.'
            }
        ];

        function Message(type, user, message) {
            this.type = type; 
            this.user = user; 
            this.message = message;
        }

        function messageElement(message) {
            var messageText = document.createTextNode (message.user + ': ' + message.message);
            var messageEl = document.createElement('div'); 
            messageEl.appendChild(messageText);
            messageEl.className = message.type;
            return messageEl;
        }

        function setEventHandlers(event) {
            var user, type; 
            var messageInput = document.getElementById('message-input');
            var messagesContainerEl = document.getElementById('message-container');

            switch (event. target.id) { 
                case 'send-button':
                    user = sender;
                    type = messageType.out;
                break; 
                case 'reply-button':
                    user = replier; 
                    type = messageType.in;
                break; 
                default:
                user = 'unknown'; 
                type = messageType.unknown;
            }

            if (messageInput. value != "") {
                var message = new Message(type, user, messageInput.value); 
                messages.push(message);
                var el = messageElement(message); 
                messagesContainerEl.appendChild(el);
                messageInput.value = '';
            }
        }

        function contextData() { 
            for (var i = 0; i < data. length; i++) {
                var message = new Message(data[i].type, data[i].user, data[i].message); 
                messages.push(message);
            }
            var messagesContainerEl = document.getElementById('message-container');
            for (var i = 0; i < messages.length; i++) {
                var message = messages [i]; var el = messageElement(message)
                messagesContainerEl.appendChild(el);
            }
        }
        
        var setUp = function() {
            document.getElementById('send-button').onclick = setEventHandlers; 
            document.getElementById('reply-button').onclick = setEventHandlers;
            contextData();
        }

        setUp();
    }
})(window, document, undefined);