
// Function to get query parameter value by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Retrieve the sport from the URL
const selectedSport = getQueryParam('sport');

// Define a mapping of sports to background images
const sportBackgrounds = {
    Football: 'url("img/football.gif")',
    Basketball: 'url("img/basketball.gif")',
    Tennis: 'url("img/tennis.gif")',
    Cricket: 'url("img/cricket.gif")',
    Badminton: 'url("img/badminton.gif")',
    Swimming: 'url("img/swimming.gif")',
    Rugby: 'url("img/rugby.gif")',
    Golf: 'url("img/golf.gif")',
    Volleyball: 'url("img/volleyball.gif")',
    Track_Field: 'url("img/track_field.gif")',
    Baseball: 'url("img/baseball.gif")',
    Esports: 'url("img/esports.gif")'
};

// Define a mapping of sports to descriptions
const sportDescriptions = {
    Football: "Football, also known as soccer, is the world's most popular sport, played between two teams of 11 players.",
    Basketball: "Basketball is a fast-paced sport where two teams of five players aim to score points by shooting a ball through the hoop.",
    Tennis: "Tennis is a racket sport that can be played in singles or doubles. It's known for its dynamic and quick gameplay.",
    Cricket: "Cricket is a bat-and-ball game played between two teams of 11 players, known for its long matches and strategic gameplay.",
    Badminton: "Badminton is a racquet sport played with a shuttlecock. It's typically played in singles or doubles format.",
    Swimming: "Swimming is an individual or team racing sport that involves moving through water using your entire body.",
    Rugby: "Rugby is a physical and fast-paced game played with an oval ball between two teams of fifteen players.",
    Golf: "Golf is a precision club-and-ball sport where players aim to hit balls into a series of holes on a course.",
    Volleyball: "Volleyball is a team sport where two teams try to ground the ball on the opponent's side of the court.",
    Track_Field: "Track & Field includes a range of athletic events like running, jumping, and throwing.",
    Baseball: "Baseball is a bat-and-ball sport played between two teams where players aim to score runs by hitting the ball.",
    Esports: "Esports is the competitive playing of video games, where players or teams compete in various video games."
};

// Set the background image based on the selected sport
if (selectedSport && sportBackgrounds[selectedSport]) {
    document.body.style.backgroundImage = sportBackgrounds[selectedSport];
    document.getElementById("message").textContent = `Thank you for choosing ${selectedSport} !`;
    document.getElementById("sportDescription").textContent = sportDescriptions[selectedSport];
} else {
    document.getElementById("message").textContent = "Thank you for your submission!";
}