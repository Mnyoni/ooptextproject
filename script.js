class Room {
    constructor(name, image, hiddenItem) {
        this.name = name;
        this.image = image;
        this.hiddenItem = hiddenItem;
    }
}

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
    document.querySelector(".content").textContent = "";
    // Display room1 details (e.g., name and image)
    document.getElementById("roomName").textContent = room1.name;
    document.getElementById("roomImage").src = room1.image;

});
// Display the image in the grid area with class "menu"
document.querySelector(".menu").appendChild(document.getElementById("roomImage"));
// Create instances of Room
const room1 = new Room("Studio A", "living_room.jpg", "guitar");
const room2 = new Room("Studio B", "studio-b.jpg", "mic");
const room3 = new Room("Studio C", "studio-c.jpg", "keyboard");
const room4 = new Room("Studio D", "studio-d.jpg", "drums");


// Add a bonus item to room3
room3.bonusItem = "headphones";

// Function to collect an item from a room
function collectItem(room, input) {
    if (input.toLowerCase() === room.hiddenItem.toLowerCase()) {
        alert(`Congratulations! You found the hidden item: ${room.hiddenItem} in ${room.name}.`);
        if (room.bonusItem) {
            alert(`Bonus! You also found a ${room.bonusItem}.`);
        }
        goToNextRoom(room);
    } else {
        alert(`You found a ${input} but it's not the hidden item in ${room.name}.`);
    }
}

function goToNextRoom(currentRoom) {
    const rooms = [room1, room2, room3, room4];
    const currentIndex = rooms.indexOf(currentRoom);
    if (currentIndex < rooms.length - 1) {
        const nextRoom = rooms[currentIndex + 1];
        alert(`Moving to the next room: ${nextRoom.name}`);
        displayRoomStory(nextRoom);
    } else {
        alert("You have visited all the rooms!");
    }
}

// Example usage
const userInput = prompt("Type the name of the item you found in Studio C:");
collectItem(room3, userInput);
// Function to display the story of a room
function displayRoomStory(room) {
    const roomTextElement = document.getElementById("roomtext");
  

// Example usage to display the story of room3
displayRoomStory(room3);}