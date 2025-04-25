class Room {
    constructor(name, image, isLit, isEquipped ) {
        this.name = name;
        this.image = image;
        this.isLit = isLit;
        this.isEquipped = isEquipped;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const rooms = [
        new Room("Living Room", "living_room.jpg", true, true),
        new Room("Kitchen", "kitchen.jpg", true, false),
        new Room("Bedroom", "bedroom.jpg", false, true),
        new Room("Bathroom", "bathroom.jpg", false, false)
    ];

    const roomContainer = document.getElementById("room-container");
    const roomImage = document.getElementById("room-image");
    const roomName = document.getElementById("room-name");
    const roomPrompt = document.getElementById("room-prompt");

    rooms.forEach(room => {
        const roomDiv = document.createElement("div");
        roomDiv.classList.add("room");
        roomDiv.innerText = room.name;
        roomDiv.addEventListener("click", () => {
            roomImage.src = room.image;
            roomName.innerText = room.name;
            if (room.isLit) {
                roomContainer.style.backgroundColor = "lightyellow";
            } else {
                roomContainer.style.backgroundColor = "darkgray";
            }
            if (room.isEquipped) {
                alert(`${room.name} is equipped with necessary items.`);
            } else {
                alert(`${room.name} is not equipped with necessary items.`);
            }

            if (room.name === "Living Room") {
                roomPrompt.innerText = "Nothing to find here but Bob, Steve, and Marvin are sat on the setee. Ask one of them who shot the sheriff, but did not shoot the deputy. Type who you will ask.";
            } else {
                roomPrompt.innerText = "";
            }
        });
        roomContainer.appendChild(roomDiv);
    });
});