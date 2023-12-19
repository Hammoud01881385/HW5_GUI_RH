// Name: Rami Hammoud rami_hammoud@student.uml.edu
// Date: 12/18/23
// File: script.js
// GUI Assignment: HW5 Implementing a Bit of Scrabble with Drag-and-Drop
//Description: Uses Data structure to hold scrabbleTiles and apply them to draggable squares
// along with images and values. Uses point system based on these tiles. Jquery functions 
// implemented to add draggable effects to tiles etc.

$(document).ready(function() {
    //tiles and imaves and points linked to them (taken from zip file)
    var scrabbleTiles = [] ;
    scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tiles/Scrabble_Tile_A.jpg"  } ;
    scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
    scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
    scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_D.jpg"  } ;
    scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "img/Scrabble_Tiles/Scrabble_Tile_E.jpg"  } ;
    scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
    scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "img/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
    scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
    scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
    scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
    scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
    scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
    scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
    scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
    scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "img/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
    scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
    scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
    scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
    scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
    scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
    scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
    scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
    scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
    scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
    scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
    scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
    scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;
    
    function createTiles() {
        var rackLetters = [];
        var rackSize = 7; // Num of tiles on the rack
    
        // Randomly select 7 letters for the rack
        while (rackLetters.length < rackSize) {
            var randomLetter = Object.keys(scrabbleTiles)[Math.floor(Math.random() * Object.keys(scrabbleTiles).length)];
            if (!rackLetters.includes(randomLetter)) {
                rackLetters.push(randomLetter);
            }
        }

    var rack = $('.rack');
    var rackWidth = rack.width(); // width of the rack
    var tileWidth = 80; // Width each tile
    var gap = (rackWidth - rackSize * tileWidth) / (rackSize - 1); //gap between tiles

    function calculateLeftPosition(index) {
        return index * (tileWidth + gap);
    }
    //  create draggable tiles
    rackLetters.forEach(function(letter, index) {
        var tileData = scrabbleTiles[letter];
        var leftPosition = calculateLeftPosition(index);

        //draggable tile element
        var tile = $('<img />', {
            src: tileData.image,
            alt: letter,
            class: 'draggable-tile',
            'data-letter': letter,
            'data-value': tileData.value,
            css: {
                position: 'absolute',
                width: tileWidth + 'px',
                height: 'auto', // Adjust height as needed
                top: '50px', // Adjust top position to match the bottom of the rack image
                left: leftPosition + 'px',
            },
        }).appendTo(rack);

        // Make the tile draggable
        tile.draggable({
            revert: 'invalid',
            cursor: 'move',
            zIndex: 100,
        });
    });
}


$(".rack").droppable({
    accept: ".draggable-tile",
    drop: function (event, ui) {
        returnLetterToTileHolder(ui.draggable);
    }
});

// returns a letter tile to the tile holder
function returnLetterToTileHolder(letterTile) {
    // Reset the position of the letter tile
    letterTile.css({
        left: 0,
        top: -125,
        position: 'relative'
    });

    // Make  tile draggable again
    letterTile.draggable('option', 'revert', 'invalid');

    // Append  tile back to rack
    letterTile.appendTo($(".rack-tiles"));

    const returnedLetter = letterTile.data('letter'); // Get the letter 

    // Remove the returned letter from the gameboard array
    for (let i = 0; i < gameboard.length; i++) {
        if (gameboard[i] === returnedLetter) {
            gameboard[i] = ''; // Replace the letter with a ' '
            break; // Exit the loop
        }
    }

    updateDisplayedWord();
    console.log("Returned to tile holder");
}


var gameboard = ['', '', '', '', '', '', '']; // gameboard representation of ui
  
  // Updategameboard array when a tile is dropped
  function updateGameboard(index, letter) {
    gameboard[index] = letter || '';  
    updateDisplayedWord();
}
  
  // construct the string based on the gameboard array
  function constructWordFromGameboard() {
    return gameboard.join('');
}
  
  // update the displayed word on the page
  function updateDisplayedWord() {
    const word = constructWordFromGameboard();
    const points = calculatePoints(word); // Calculate points for the word
    $('.displayed-word').text(word);
    $('.displayed-points').text('Points: ' + points); // Display points separately
    console.log('Constructed Word:', word);
    displayGameboard();
}

function displayGameboard() {
    for (let row = 0; row < gameboard.length; row++) {
        console.log(gameboard[row]);
    }
}

function calculatePoints(word) {
    let totalPoints = 0;
    let doubleWordMultiplier = 1; // Initialize the multiplier for double words

    for (const letter of word) {
        let letterPoints = scrabbleTiles[letter.toUpperCase()].value || 0;
        totalPoints += letterPoints;

        // Check if the letter was placed on a double square
        // Update the multiplier accordingly
        // Assuming indices 1 and 5 are the double word squares
        const letterIndex = gameboard.indexOf(letter);
        if (letterIndex === 1 || letterIndex === 5) {
            doubleWordMultiplier *= 2;
        }
    }

    return totalPoints * doubleWordMultiplier;
}


$('.deal-button').on('click', function() {
    // Get the current word
    const currentWord = $('.displayed-word').text();

    // Calculate points for the current word
    const wordPoints = calculatePoints(currentWord);

    // Update total points display
    const $totalPoints = $('.total-points span');
    const currentTotalPoints = parseInt($totalPoints.text()) || 0;
    const updatedTotalPoints = currentTotalPoints + wordPoints;
    $totalPoints.text(updatedTotalPoints);

    // Clear the displayed word
    $('.displayed-word').empty();

    // Clear the points tracker
    const $pointsTracker = $('.displayed-points');
    $pointsTracker.text(0); // Reset points tracker to 0

    // Clear the tiles from the rack
    const rack = $('.rack');
    rack.find('.draggable-tile').remove();

    const rackLetters = [];
    const rackSize = 7;

    // Refill the rack with new tiles
    while (rackLetters.length < rackSize) {
        const randomLetter = Object.keys(scrabbleTiles)[Math.floor(Math.random() * Object.keys(scrabbleTiles).length)];
        if (!rackLetters.includes(randomLetter)) {
            rackLetters.push(randomLetter);
        }
    }

    const rackWidth = rack.width();
    const tileWidth = 80;
    const gap = (rackWidth - rackSize * tileWidth) / (rackSize - 1);

    rackLetters.forEach(function(letter, index) {
        const tileData = scrabbleTiles[letter];
        const leftPosition = index * (tileWidth + gap);

        const tile = $('<img />', {
            src: tileData.image,
            alt: letter,
            class: 'draggable-tile',
            'data-letter': letter,
            'data-value': tileData.value,
            css: {
                position: 'absolute',
                width: tileWidth + 'px',
                height: 'auto',
                top: '50px',
                left: leftPosition + 'px',
            },
        }).appendTo(rack);

        tile.draggable({
            revert: 'invalid',
            cursor: 'move',
            zIndex: 100,
        });
        tile.css({
            left: 0,
            top: -125,
            position: 'relative'
        });
    });

    // Clear the tiles from the gameboard
    $('.gameboard .square').empty();
    gameboard = ['', '', '', '', '', '', '']; // Clear the gameboard array
});






$('.restart-button').on('click', function() {
    location.reload(); // Reload the page
  });

function createBoard() {
    var board = $('.gameboard');

    for (var i = 0; i < gameboard.length; i++) {
        var bgImage = 'img/blank_square.jpg'; // Default background image
        if (i === 1 || i === 5) {
            bgImage = 'img/double_word_score.jpg'; // Set double_word_score background
        }

        $('<div />', {
            class: 'square droppable-square',
            css: {
                backgroundImage: 'url(' + bgImage + ')', // Apply the background image
            },
        }).appendTo(board).droppable({
            accept: function (dragElem) {
                // Allow dragging back to the rack or empty squares on the board
                return dragElem.hasClass('draggable-tile') || !$(this).children().length;
            },
            tolerance: 'intersect', // Change tolerance to ensure snap
            drop: function (event, ui) {
                var droppedTile = ui.draggable;
                var letter = droppedTile.data('letter');
                var square = $(this);
                var squareIndex = $('.square.droppable-square').index(square);

                var originalSquare = droppedTile.parent();

                if (!square.children().length || square.children().hasClass('draggable-tile')) {
                    // Snap the dropped tile to the square if it's not occupied or the same tile is being moved
                    droppedTile.appendTo(square).css({ top: 0, left: 0, position: 'relative' });
                    console.log("Letter '" + letter + "' was dropped on square:", squareIndex);
                    updateGameboard(squareIndex, letter);

                    // Make the dropped tile draggable again
                    droppedTile.draggable({
                        revert: 'invalid',
                        cursor: 'move',
                        zIndex: 100,
                    });
                } else if (originalSquare.hasClass('rack')) {
                    // If the tile is from the rack, place it on the board
                    droppedTile.appendTo(square).css({ top: 0, left: 0, position: 'relative' });
                    updateGameboard(squareIndex, letter);
                    updateDisplayedWord(); // Update the displayed word
                    console.log("Letter '" + letter + "' was dropped on square:", squareIndex);
                } else {
                    // If the tile is from the board, return it to the rack
                    if (originalSquare.hasClass('gameboard')) {
                        droppedTile.appendTo(originalSquare).css({ top: '50px', left: originalSquare.children().length * 80 + 'px', position: 'absolute' });
                        gameboard[squareIndex] = ''; // Remove the tile from the gameboard
                        updateGameboard(squareIndex, ''); // Update the gameboard to remove the letter
                        updateDisplayedWord(); // Update the displayed word
                        console.log("Letter '" + letter + "' was moved back to the rack.");
                    }
                }

            },
        });
    }
}
  
    createTiles();
    createBoard();
  });
