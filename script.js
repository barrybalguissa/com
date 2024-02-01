document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        let firstName = document.getElementById("first-name").value;
        let lastName = document.getElementById("last-name").value;
        let message = document.getElementById("message").value;

        if (firstName === "" || 
            lastName === "" ||
            message === "") {
            document.getElementById("error-message").style.display = "block";
            return;
        }

        document.getElementById("error-message").style.display = "none";

        let newMessage = document.createElement("div");
        newMessage.className = "flex space-x-4 text-sm text-gray-500";

        let auteurDiv = document.createElement("div");
        auteurDiv.className = "flex-1 py-10";
        let auteurNom = document.createElement("h3");
        auteurNom.className = "font-medium text-gray-900";
        auteurNom.textContent = firstName + " " + lastName;
        
        auteurDiv.appendChild(auteurNom);
        let messageConteneur = document.createElement("div");
        messageConteneur.className = "prose prose-sm mt-4 max-w-none text-gray-500";
        let messageText = document.createElement("p");
        messageText.textContent = message;
        messageConteneur.appendChild(messageText);

        newMessage.appendChild(auteurDiv);
        newMessage.appendChild(messageConteneur);

        document.getElementById("comment-list").appendChild(newMessage);

        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("message").value = "";
    });
});