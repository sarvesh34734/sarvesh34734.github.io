var buttons=document.getElementsByClassName("listItems")
for (let ele of buttons)
{
    ele.addEventListener("click",function(event){
       
        event.preventDefault();
        var dataValue=ele.getAttribute("data-value");
        var sectionId=document.getElementById(dataValue)
        var pos=sectionId.getBoundingClientRect().top;
        var currentPos=0;
        var interval=setInterval(function(){
        if(currentPos>=pos){
            clearInterval(interval);
        return;
            }
            currentPos+=100;
            window.scrollBy(0,100);
                        
},50)
    })
    
    
}

// auto-fill

var progressBar=document.querySelectorAll(".skill-progress > div")
var skillContainer=document.getElementById("skills-container")
var animationDone=false;
window.addEventListener("scroll",checkScroll);


function initialiseBar()
{
    for(let bars of progressBar)
    {
        bars.style.width=0+"%";
    }
}
initialiseBar();
function fillBars()
{
    for (let ele of progressBar)
    {
        let getPercent=ele.getAttribute("data-bar-width");
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>getPercent)
            {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            ele.style.width=currentWidth+"%";


        },30)

    }
}

function checkScroll()
{
    var coordinates=skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight)
    {
        animationDone=true;
        console.log("skill-section-visible");
        fillBars();
    }
    
}