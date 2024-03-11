document.addEventListener("DOMContentLoaded", function() {
    // Array to store channels
    let channels = [
        { name: "General", description: "General discussion" },
        { name: "Announcements", description: "Important announcements" },
        { name: "Development", description: "Discussion about development topics" }
    ];

    // Function to display channels
    function displayChannels() {
        let channelsList = document.getElementById("channelsList");
        channelsList.innerHTML = ""; // Clear previous list
        channels.forEach(function(channel) {
            let div = document.createElement("div");
            div.innerHTML = `<strong>${channel.name}</strong>: ${channel.description}`;
            div.classList.add("channel-item");
            div.dataset.channel = channel.name; // Store channel name as data attribute
            channelsList.appendChild(div);
        });
    }

    // Function to handle channel selection
    function handleChannelSelection(event) {
        let selectedChannel = event.target.dataset.channel;
        if (selectedChannel) {
            // Redirect to messages.html with selected channel name
            window.location.href = `messages.html?channel=${encodeURIComponent(selectedChannel)}`;
        }
    }

    // Handle create channel form submission
    document.getElementById("createChannelForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let channelName = document.getElementById("channelName").value;
        let channelDescription = document.getElementById("channelDescription").value;
        // Add new channel to the array
        channels.push({ name: channelName, description: channelDescription });
        // Display updated channels
        displayChannels();
        // Clear form fields
        document.getElementById("channelName").value = "";
        document.getElementById("channelDescription").value = "";
        // Display alert
        alert(`Channel "${channelName}" created successfully!`);
    });

    // Add event listener to handle channel selection
    document.getElementById("channelsList").addEventListener("click", handleChannelSelection);

    // Initially display channels
    displayChannels();
});

function searchChannels() {
    const searchTerm = document.getElementById("channel-search").value.toLowerCase();
    const channels = document.querySelectorAll("#channelsList div");

    channels.forEach(channel => {
        const channelName = channel.textContent.toLowerCase();
        if (channelName.includes(searchTerm)) {
            channel.style.display = "block"; // Show the channel if it matches the search term
        } else {
            channel.style.display = "none"; // Hide the channel if it doesn't match the search term
        }
    });
}



function logout() {
    // Redirect to login page
    window.location.href = "login.html";
}
