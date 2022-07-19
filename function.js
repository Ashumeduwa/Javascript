document.querySelector('.mnCreateImage').addEventListener("click",()=>{
    // x.style = "background-color:#008000; color:white; height:auto!important";
    let mnheader = document.querySelector('.mnheader');
    mnStyle = window.getComputedStyle(mnheader);
    mnHeight = mnStyle.getPropertyValue('height');
    if(mnHeight == '0px'){
        mnheader.style = 'height:230px'
    } else {
        mnheader.style = 'height:0px'
    }

})