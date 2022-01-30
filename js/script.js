
    // button
    function moveC(){
        const bodyStyle= document.body.style;
        const buttonStyle= document.getElementById(`buttonCircle`).style;
        if (buttonStyle.transform == `translateX(0%)`) {
            // main
            document.getElementsByTagName('main')[0].style.backgroundColor="#242424";

            // backcircle
            let backcircleIndex= 0;
            for (backcircleIndex=0; backcircleIndex<4; backcircleIndex++) {
                document.getElementsByClassName('backcircle')[backcircleIndex].style.backgroundColor="#ff6d1f";
                
            }

            // main section
            document.getElementsByClassName('main-section')[0].style.backgroundColor="rgba(255, 102, 31, 0.13)";
            document.getElementsByClassName('main-section')[0].style.boxShadow="1px 1px 5px rgba(255, 157, 65, 0.37)";
            
            // dashboard
            document.getElementsByClassName('dashboard')[0].style.backgroundColor="rgba(255, 102, 31, 0.13)";
            
            //textmood
            let textmoodIndex= 0;
            for (textmoodIndex = 0; textmoodIndex < 16; textmoodIndex++) {
                document.getElementsByClassName('textmood')[textmoodIndex].style.color="white";    
            }

            // button
            buttonStyle.cssText= "fill:#ff8b4d; transform:translateX(40%)";
            bodyStyle.backgroundColor = 'black';

            // body
            document.getElementById("moodhead").style.color='white';
            document.getElementById("moodhead").innerHTML="N";

        }else if(buttonStyle.transform == `translateX(40%)`){
            // main
            document.getElementsByTagName('main')[0].style.backgroundColor="rgb(103, 255, 255)";
            
            // backcircle
            let backcircleIndex= 0;
            for (backcircleIndex=0; backcircleIndex<4; backcircleIndex++) {
                document.getElementsByClassName('backcircle')[backcircleIndex].style.backgroundColor="rgb(191, 255, 255)";
                
            }
           
            // main section
            document.getElementsByClassName('main-section')[0].style.backgroundColor="rgba(163, 255, 255, 0.479)";
            document.getElementsByClassName('main-section')[0].style.boxShadow="1px 1px 5px rgba(255, 157, 65, 0.37)";
            
            // dashboard
            document.getElementsByClassName('dashboard')[0].style.backgroundColor="rgba(203, 255, 255, 0.637)";

            //textmood
            let textmoodIndex= 0;
            for (textmoodIndex = 0; textmoodIndex < 16; textmoodIndex++) {
                document.getElementsByClassName('textmood')[textmoodIndex].style.color="black";    
            }

            // button
            buttonStyle.cssText= "fill:; transform:translateX(0%)";
            bodyStyle.backgroundColor="white";

            // body
            document.getElementById("moodhead").style.color='black';
            document.getElementById("moodhead").innerHTML="L";
        }
      
    }
    // button end