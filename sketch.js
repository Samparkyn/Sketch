$(document).ready(function() {
    
    createGrid(16);

    
}); 

function createGrid(x) {
    
        var squareSize = (800/ x);
    
        if($(".square")[0]) {
        
            $(".square").remove();      // remove current grid if it exists
        
        }
    
        for(var i = 0; i < (x * x); i++) {
            
            $(".container").append("<div class='square'></div>");       // create grid squares
                                   
        }
    
        $(".square").width(squareSize);         // set height and
        $(".square").height(squareSize);        // width of grid squares 
    
        sketch();       // set the animation to the default one
        
    }


    
function resetSquares() {
    
    $(".square").css("background-color", "darkgrey");
    $(".square").css("opacity", 1);
    
}

function sketch() {     // default sketch animation

    $(".square").mouseenter(function() {

        $(this).css("background-color", "black");

    });

}

function randomColors() {       // draw random colours
    
    $(".square").mouseenter(function() {
        
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        
        $(this).css("background-color", randomColor);
        
    });
    
}
                            
 function opacity() {       // decrease opacity of square by 10% with each pass of the mouse
     
     $(".square").mouseenter(
         
         function() {
         
         var currentOpacity = $(this).css("opacity");
         
         if(!(currentOpacity === 0)) {
         
         $(this).css("opacity", currentOpacity - 0.1);
         
     }
         
                            
     });
     
 }

function trails() {     // draw trails using fade animations
    
    $(".square").mouseenter(function() {
        
        $(this).fadeTo(100, 0);
        
    });
    
    $(".square").mouseleave(function() {
        
        $(this).fadeTo(400, 1);
        
    });
    
}

function colorOption() {
    var newColor = "#" + $('#colorBox').val();
    console.log(newColor);

    $('.square').mouseover(function() {
        $(this).css("background-color", newColor);
    });
}



var borders = $("input[type=checkbox]");

borders.click (function() {     // toggle borders
        
        if ($(this).is(":checked")) {
            
            $(".square").css("border", "1px solid #333");
            
        } else {
            
            $(".square").css("border", "none");
            
        }
        
    });


$("navbar").click(function() {      // reset event handlers for the animations when choosing a new type of animation
    
    $(".square").unbind();
    
});



$(".default").click (function() {
        
        sketch();
        
    });

$(".random").click(function() {
        
        randomColors();
        
    });

$(".opacity").click(function() {
        
        opacity();
        
    });

$(".trail").click(function() {
        
        trails();
        
    });

$("#colorBox").change(function() {
        colorOption();

    });



$("#newGrid").click(function() {
        
        createGrid(getGridSize());
        $(borders).attr("checked", false);
        
    });

$(".clear").click(function() {       // clears the canvas and reverts back to the default animation
    
        resetSquares();
        sketch();
    
    });

$(".normal").click(function(){
    
    sketch();
})
