function openChat(name) {

    document
        .getElementById("chats-screen")
        .classList.add("hidden");


    document
        .getElementById("chat-screen")
        .classList.remove("hidden");


    document
        .getElementById("chat-name")
        .innerText = name;


    document
        .querySelector(".chat-avatar")
        .innerText = name[0];


    document
        .getElementById("messages")
        .innerHTML = `

            <div class="message incoming">

                Привет! Добро пожаловать в NoirChat 🖤

            </div>

        `;
}





function backToChats() {

    document
        .getElementById("chat-screen")
        .classList.add("hidden");


    document
        .getElementById("chats-screen")
        .classList.remove("hidden");

}





function sendMessage() {


    let input = document.getElementById("message-input");


    let text = input.value.trim();



    if(text === "") {
        return;
    }



    let message = document.createElement("div");


    message.className = "message outgoing";


    message.innerText = text;



    document
        .getElementById("messages")
        .appendChild(message);



    input.value = "";



    let box = document.getElementById("messages");

    box.scrollTop = box.scrollHeight;

}





function showScreen(screen) {


    document
        .getElementById("chats-screen")
        .classList.add("hidden");


    document
        .getElementById("chat-screen")
        .classList.add("hidden");


    document
        .getElementById("contacts-screen")
        .classList.add("hidden");


    document
        .getElementById("profile-screen")
        .classList.add("hidden");





    if(screen === "chats") {

        document
            .getElementById("chats-screen")
            .classList.remove("hidden");

    }




    if(screen === "contacts") {

        document
            .getElementById("contacts-screen")
            .classList.remove("hidden");

    }





    if(screen === "profile") {

        document
            .getElementById("profile-screen")
            .classList.remove("hidden");

    }

}