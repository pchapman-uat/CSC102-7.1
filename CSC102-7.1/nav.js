
// Array for the nav pages
// To add a new page, add a new name and file to the array 
var pages =[
    {name: "Home", file: "index.html"},
    {name: "ACS Board", file: "boards/boards_ACS.html"},
    {name: "GP Board", file: "boards/boards_GP.html"},
    {name: "Strings", file: "strings.html"},
    {name: "Play my Game!", file: "game/game_info.html"}
]

//Array for the meme buttons
// To add a new button, add a new name and function (function must exist in the JS)
var meme_buttons = [
    {name: "Move", function: "move()"},
    {name: "Stop", function: "stop()"},
    {name: "Spin", function: "spin()"}
]

// Function to create buttons based on the parent, array, and location provided
function createbuttons(parent, array, location){
    // Get the element based on the ID of the provided parent
    var parent = document.getElementById(parent)
    // For each element in the array 
    for(i in array){
        // Create a new element for the button
        var button = document.createElement("button")
        // Check if location is provided
        if(typeof location !== "undefined"){
            // Set the atribute for the button to be a reference to a different page (used for nav)
            button.setAttribute("onclick",`window.location.href='${location}${array[i].file}'`)
        } else{
            // Set the atribute of the onclick function to be the function of the respective element in the array
            button.setAttribute("onclick", `${array[i].function}`)
        }
        // set the innner HTML (the text) to the name of the element
        button.innerHTML = array[i].name  
        // Append the button to the parent
        parent.appendChild(button)
    }
}

function loadnav(location){
    // Run the create buttons function 
    createbuttons("nav", pages, location)
    // Set the background color of the nav to be a transparent black
    var parent = document.getElementById("nav")
    parent.style.backgroundColor = 'rgba(0, 0, 0, 0.304)'
    
    // Get the toggle button element
    var toggle = document.getElementById("togglebutton")
    // Check if the button was found
    if(!toggle){
        // Create button element
        var togglenav = document.createElement("button")
        // Set the onclick function to be the hidenav function
        togglenav.setAttribute("onclick", `hidenav('${location}')`) 
        // set the ID to togglebutton
        togglenav.setAttribute("ID","togglebutton" )
        // set the inner HTML (display text) to Toggle Nav
        togglenav.innerHTML = "Toggle Nav"
        // Get the parent for the toggle nav button
        var navparent = document.getElementById("togglenav")
        // append the toggle nav button to the parent
        navparent.appendChild(togglenav)
    }

}

function hidenav(location){
    // Get the nv element
    var nav = document.getElementById("nav")
    // Set its text (inner HTML) to nothing
    nav.innerHTML = ""
    // set the color to 100% transparency
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    // change the toggle button to now show nav
    document.getElementById("togglebutton").setAttribute("onclick", `shownav('${location}')`)

}

function shownav(location){
    // Run the load nav function
    loadnav(location)
    // Change the toggle button to now hide nav
    document.getElementById("togglebutton").setAttribute("onclick", `hidenav('${location}')`)

}

function show_meme_buttons(){
    // Run the create buttons function based on the hidden ID and meme_buttons array
    createbuttons("hidden", meme_buttons)
}
function stop(){
    // get the meme image element
    var meme = document.getElementById("memeimage")
    // set the duration to 0s, therefor stopping the animation
    meme.style.animationDuration = "0s"
}

// Do animation function to run a animation
function doanimation(id, type, duration){
    // Grab the meme image elment
    var meme = document.getElementById(id)
    // Set the animation type
    meme.style.animationName = `${type}`
    // set the duration
    meme.style.animationDuration = `${duration}`
}

// This function is unessisary
function move(){
    // run the do animation function 
    doanimation("memeimage", "moving", "5s")
}

// This function is unessisary
function spin(){
    // run the do animation function
    doanimation("memeimage", "spin", "5s")
}


function submit() {
    console.log("Submited!")
    
    // Get elements by id of f_name, l_name, and zip
    var f_name = document.getElementById("f_name").value
    var l_name = document.getElementById("l_name").value
    var zip = document.getElementById("zip").value
    
    // log the first and last name
    console.log(f_name)
    console.log(l_name)
    
    // Concat the first and last name
    var full = f_name + l_name 
    console.log(full.length)
    
    // Check if the length of both names is more than 20
    if (full.length > 20) {
        console.log("Over 20!")
        //Check if the zip is a intager, and is exactly 5 digits long
        if((parseInt(zip) == zip) && zip.length == 5){
            console.log("Valid Zip")

            //Alert letting user know information has been submited
            alert("Your information has been submited \nNo information was kept, this is only for a demonstration \n Your secret message is: SquidsRule")
        } else {
            
            //Alert if zip is not valid
            alert("Not a valid vip, must be a whole number exactly 5 digits long")
        }
        
    } else {
        console.log("No over 20")

        //Alert if lenght is not valid
        alert(`Length of first and last name must be over 20, currently ${full.length}/20`)
    }

}