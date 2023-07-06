let notes_arr = [
    "This game created like a mix of rusty lake, Edna and Harvey and the Neverhood",
    "Since 8 yo I make sites",
    "No autosaves. Play once or note the quest answers",
    "The pictures are very interesting, yk",
    "Need some coins, search",
    "Pepe's coat is so lettering, yk",
    "Huck this i need too lil time to do",
];

function show(){
    let show_notes = Math.floor(Math.random() * notes_arr.length);
    document.getElementById('note-text').innerHTML = notes_arr[show_notes];
}

show()