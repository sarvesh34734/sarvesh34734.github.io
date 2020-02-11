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