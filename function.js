document.querySelector('.mnCreateImage').addEventListener("click",()=>{
    // x.style = "background-color:#008000; color:white; height:auto!important";
    let mnheader = document.querySelector('.mnheader');
    mnStyle = window.getComputedStyle(mnheader);
    mnHeight = mnStyle.getPropertyValue('height');
    if(mnHeight == '0px'){
        mnheader.style = 'height:230px';
    } else {
        mnheader.style = 'height:0px';
    }

})

document.getElementById('mnbuttonClearYes').addEventListener('click',()=>{
    let mnCondition = document.querySelector('.mnoverlayMain')
    localStorage.clear();
    mnCondition.style = 'display:none'
    location.reload();
   
})

document.getElementById('mnbuttonClearNo').addEventListener('click',()=>{
let mnCondition = document.querySelector('.mnoverlayMain')
mnCondition.style = 'display:none'
})