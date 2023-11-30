let timerLength=1; let savedSeconds=0; var counter;
let leaf1time = 0; let leaf2time = 0; let leaf3time = 0; let leaf4time = 0; let leaf5time = 0; let leaf6time = 0; let leaf7time = 0; let leaf8time = 0;
var gongSound = new Audio('audio/gongSound.wav');

function min3(){
    clearInterval(counter);
    document.getElementById('min3').style.backgroundColor = "#73583e";
    document.getElementById('min3').style.borderColor = "#614932";
    document.getElementById('min3').style.fontStyle = "oblique";

    document.getElementById('min5').style.backgroundColor = "#7d5f43";
    document.getElementById('min5').style.borderColor = "#73583e";
    document.getElementById('min5').style.fontStyle = "normal";

    document.getElementById('min10').style.backgroundColor = "#7d5f43";
    document.getElementById('min10').style.borderColor = "#73583e";
    document.getElementById('min10').style.fontStyle = "normal";

    timerLength = 3; savedSeconds=0;
    //This way was chosen to have "cleaner" looking times over the time divided by 8.
    leaf1time = 0; leaf2time = 20; leaf3time = 40; leaf4time = 60; leaf5time = 90; leaf6time = 120; leaf7time = 140; leaf8time = 160;
    document.getElementById('play').innerHTML = "&#9658";
    document.getElementById('time').innerHTML = timerLength + ":00";

    document.getElementById('hiddenText1').innerHTML = "3:00";
    document.getElementById('hiddenText2').innerHTML = "2:40";
    document.getElementById('hiddenText3').innerHTML = "2:20";
    document.getElementById('hiddenText4').innerHTML = "2:00";
    document.getElementById('hiddenText5').innerHTML = "1:30";
    document.getElementById('hiddenText6').innerHTML = "1:00";
    document.getElementById('hiddenText7').innerHTML = "0:40";
    document.getElementById('hiddenText8').innerHTML = "0:20";

    changeLeafsPaused(1);
}

function min5(){
    clearInterval(counter);
    document.getElementById('min5').style.backgroundColor = "#73583e";
    document.getElementById('min5').style.borderColor = "#614932";
    document.getElementById('min5').style.fontStyle = "oblique";

    document.getElementById('min3').style.backgroundColor = "#7d5f43";
    document.getElementById('min3').style.borderColor = "#73583e";
    document.getElementById('min3').style.fontStyle = "normal";

    document.getElementById('min10').style.backgroundColor = "#7d5f43";
    document.getElementById('min10').style.borderColor = "#73583e";
    document.getElementById('min10').style.fontStyle = "normal";

    timerLength = 5; savedSeconds=0;
    leaf1time = 0; leaf2time = 30; leaf3time = 60; leaf4time = 100; leaf5time = 150; leaf6time = 200; leaf7time = 240; leaf8time = 270;
    document.getElementById('play').innerHTML = "&#9658";
    document.getElementById('time').innerHTML = timerLength+":00";

    document.getElementById('hiddenText1').innerHTML = "5:00";
    document.getElementById('hiddenText2').innerHTML = "4:30";
    document.getElementById('hiddenText3').innerHTML = "4:00";
    document.getElementById('hiddenText4').innerHTML = "3:20";
    document.getElementById('hiddenText5').innerHTML = "2:30";
    document.getElementById('hiddenText6').innerHTML = "1:40";
    document.getElementById('hiddenText7').innerHTML = "1:00";
    document.getElementById('hiddenText8').innerHTML = "0:30";

    changeLeafsPaused(1);
}

function min10(){
    clearInterval(counter);
    document.getElementById('min10').style.backgroundColor = "#73583e";
    document.getElementById('min10').style.borderColor = "#614932";
    document.getElementById('min10').style.fontStyle = "oblique";

    document.getElementById('min3').style.backgroundColor = "#7d5f43";
    document.getElementById('min3').style.borderColor = "#73583e";
    document.getElementById('min3').style.fontStyle = "normal";

    document.getElementById('min5').style.backgroundColor = "#7d5f43";
    document.getElementById('min5').style.borderColor = "#73583e";
    document.getElementById('min5').style.fontStyle = "normal";

    timerLength = 10; savedSeconds=0;
    leaf1time = 0; leaf2time = 60; leaf3time = 150; leaf4time = 240; leaf5time = 300; leaf6time = 360; leaf7time = 450; leaf8time = 540;
    document.getElementById('play').innerHTML = "&#9658";
    document.getElementById('time').innerHTML = timerLength+":00";

    document.getElementById('hiddenText1').innerHTML = "10:00";
    document.getElementById('hiddenText2').innerHTML = "9:00";
    document.getElementById('hiddenText3').innerHTML = "7:30";
    document.getElementById('hiddenText4').innerHTML = "6:00";
    document.getElementById('hiddenText5').innerHTML = "5:00";
    document.getElementById('hiddenText6').innerHTML = "4:00";
    document.getElementById('hiddenText7').innerHTML = "2:30";
    document.getElementById('hiddenText8').innerHTML = "1:00";

    changeLeafsPaused(1);
}

function countDown(minutes){
    let seconds = 0; let mins = 0; let secs = 0;
    if(document.getElementById('time').innerHTML=="timerLength"){}
    else{
        if (savedSeconds>0){
            clearInterval(counter);
            seconds = savedSeconds;
        }
        else{
            clearInterval(counter);
            seconds = minutes*60;
        }
        if(timerLength*60==seconds){
            gongSound.play();
        }else{}
        counter = setInterval(function(){
            changeLeafs(minutes, seconds);
            seconds--;
            mins = Math.floor(seconds/60);
            secs = seconds-(Math.floor(seconds/60)*60);
            if(secs<10){
                document.getElementById('time').innerHTML = mins + ":0" + secs;
            }
            else{
                document.getElementById('time').innerHTML = mins + ":" + secs;
            }
            if(seconds<4){
                gongSound.play();
            }
            if(seconds<1){
                savedSeconds = minutes*60;
                document.getElementById('time').innerHTML = "0:00";
                document.getElementById('play').innerHTML = "&#9658";
                alert("Meditation Over!");
                changeLeafs(minutes, 0);
                document.getElementById('time').innerHTML = timerLength + ":00";
                clearInterval(counter);
            }
            //This was because the javascript of the symbol didnt match the HTML passed symbol.
            else if(document.getElementById('play').innerHTML == document.getElementById('conditionSymbol').innerHTML){
                savedSeconds = seconds;
                clearInterval(counter);
            }else{}
        },1000);    
    }   
}

function pausePlay(){
    if(document.getElementById('time').innerHTML=="timerLength"){
        alert("Choose a time for the meditation.");
    }
    else{
        let conditionSymbol = document.getElementById('conditionSymbol').innerHTML;
        let buttonSymbol = document.getElementById('play').innerHTML;
        if(buttonSymbol == conditionSymbol){
            document.getElementById('play').innerHTML = "&#10074 &#10074";
            countDown(timerLength);
        }
        else{
            document.getElementById('play').innerHTML = "&#9658";
            
        }
    }
}

function changeLeafs(minut, secon){
    let colorChange; let change = false;
    if(secon==0){
        change=true;
        colorChange="#72a179";
    }
    else{
        switch(secon){
            case (minut*60):
                colorChange = "#72a179";
                change = true;
                break;
            case (minut*60-leaf2time):
                colorChange = "rgb(168, 219, 106)";
                change = true;
                break;
            case (minut*60-leaf3time):
                colorChange = "#bfd961";
                change = true;
                break;
            case (minut*60-leaf4time):
                colorChange = "rgb(223, 209, 83)";
                change = true;
                break;
            case (minut*60-leaf5time):
                colorChange = "rgb(218, 176, 72)";
                change = true;
                break;
            case (minut*60-leaf6time):
                colorChange = "rgb(219, 127, 74)";
                change = true;
                break;
            case (minut*60-leaf7time): 
                colorChange = "rgb(206, 97, 97)";
                change = true;
                break;
            case (minut*60-leaf8time):
                colorChange = "rgb(151, 113, 78)";
                change = true;
                break;
            default:
                change = false; 
        }
    }
        if(change=true){
            document.getElementById('leaf1').style.backgroundColor = colorChange;
            document.getElementById('leaf2').style.backgroundColor = colorChange;
            document.getElementById('leaf3').style.backgroundColor = colorChange;
            document.getElementById('leaf4').style.backgroundColor = colorChange;
            document.getElementById('leaf5').style.backgroundColor = colorChange;
            document.getElementById('leaf6').style.backgroundColor = colorChange;
            document.getElementById('leaf7').style.backgroundColor = colorChange;
            document.getElementById('leaf8').style.backgroundColor = colorChange;
            document.getElementById('hiddenText1').style.color = colorChange;
            document.getElementById('hiddenText2').style.color = colorChange;
            document.getElementById('hiddenText3').style.color = colorChange;
            document.getElementById('hiddenText4').style.color = colorChange;
            document.getElementById('hiddenText5').style.color = colorChange;
            document.getElementById('hiddenText6').style.color = colorChange;
            document.getElementById('hiddenText7').style.color = colorChange;
            document.getElementById('hiddenText8').style.color = colorChange;
        }else{}
}

//This is for when the timer is paused and a button is pressed (because otherwise it wouldnt change till a time point is passed in the timer)
function changeLeafsPaused(casePassed){
    let colorChange; let change = false;
    switch(casePassed){
        case (1):
            colorChange = "#72a179";
            change = true;
            break;
        case (2):
            colorChange = "rgb(168, 219, 106)";
            change = true;
            break;
        case (3):
            colorChange = "#bfd961";
            change = true;
            break;
        case (4):
            colorChange = "rgb(223, 209, 83)";
            change = true;
            break;
        case (5):
            colorChange = "rgb(218, 176, 72)";
            change = true;
            break;
        case (6):
            colorChange = "rgb(219, 127, 74)";
            change = true;
            break;
        case (7): 
            colorChange = "rgb(206, 97, 97)";
            change = true;
            break;
        case (8):
            colorChange = "rgb(151, 113, 78)";
            change = true;
            break;
        default:
            change = false; 
    }
    if(change=true){
        document.getElementById('leaf1').style.backgroundColor = colorChange;
        document.getElementById('leaf2').style.backgroundColor = colorChange;
        document.getElementById('leaf3').style.backgroundColor = colorChange;
        document.getElementById('leaf4').style.backgroundColor = colorChange;
        document.getElementById('leaf5').style.backgroundColor = colorChange;
        document.getElementById('leaf6').style.backgroundColor = colorChange;
        document.getElementById('leaf7').style.backgroundColor = colorChange;
        document.getElementById('leaf8').style.backgroundColor = colorChange;
        document.getElementById('hiddenText1').style.color = colorChange;
        document.getElementById('hiddenText2').style.color = colorChange;
        document.getElementById('hiddenText3').style.color = colorChange;
        document.getElementById('hiddenText4').style.color = colorChange;
        document.getElementById('hiddenText5').style.color = colorChange;
        document.getElementById('hiddenText6').style.color = colorChange;
        document.getElementById('hiddenText7').style.color = colorChange;
        document.getElementById('hiddenText8').style.color = colorChange;
    }else{}
}

function timeChange(position){
    switch(position){
        case 1:
            savedSeconds = timerLength*60+1;
            break;
        case 2:
            savedSeconds = timerLength*60-leaf2time+1;
            break;
        case 3:
            savedSeconds = timerLength*60-leaf3time+1;
            break;
        case 4:
            savedSeconds = timerLength*60-leaf4time+1;
            break;
        case 5:
            savedSeconds = timerLength*60-leaf5time+1;
            break;
        case 6:
            savedSeconds = timerLength*60-leaf6time+1;
            break;
        case 7:
            savedSeconds = timerLength*60-leaf7time+1;
            break;
        case 8:
            savedSeconds = timerLength*60-leaf8time+1;
            break;
        default:
    }
    countDown(timerLength);
}

function openCloseArticles(articleNum){
    switch(articleNum){
        case 1:
            document.getElementById('header1Symbol').innerHTML = "&#11033;";
            document.getElementById('header2Symbol').innerHTML = "&#11031;";
            document.getElementById('header3Symbol').innerHTML = "&#11031;";

            document.getElementById('footerParagraph1').style.display = "block";
            document.getElementById('footerParagraph2').style.display = "none";
            document.getElementById('footerParagraph3').style.display = "none";
            break;
        case 2:
            document.getElementById('header1Symbol').innerHTML = "&#11031;";
            document.getElementById('header2Symbol').innerHTML = "&#11033;";
            document.getElementById('header3Symbol').innerHTML = "&#11031;";

            document.getElementById('footerParagraph1').style.display = "none";
            document.getElementById('footerParagraph2').style.display = "block";
            document.getElementById('footerParagraph3').style.display = "none";
            break;
        case 3:
            document.getElementById('header1Symbol').innerHTML = "&#11031;";
            document.getElementById('header2Symbol').innerHTML = "&#11031;";
            document.getElementById('header3Symbol').innerHTML = "&#11033;";

            document.getElementById('footerParagraph1').style.display = "none";
            document.getElementById('footerParagraph2').style.display = "none";
            document.getElementById('footerParagraph3').style.display = "block";
            break;
        default:
    }
}