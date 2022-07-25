TitleCompleteObj = () => {
    var TitleComplete = JSON.parse(localStorage.getItem("TitleComplete"));
    var DetailsComplete = JSON.parse(localStorage.getItem("DetailsComplete"));
    var PriorityComplete = JSON.parse(localStorage.getItem("PriorityComplete"));
    var DateComplete = JSON.parse(localStorage.getItem("mnDatesComplete"));
    var EtaComplete = JSON.parse(localStorage.getItem("lmnEtaComplete"));
    return { TitleComplete, DetailsComplete, PriorityComplete, DateComplete, EtaComplete };
}

let x = document.getElementById('mnbuttonComplete').addEventListener('click', loadcompletedContent)

function loadcompletedContent () {
    
    let mnComplete = document.getElementById('mnComplete');
    let mnLoadLocalComplete = TitleCompleteObj();
    TitleComplete = mnLoadLocalComplete.TitleComplete;
    DetailsComplete = mnLoadLocalComplete.DetailsComplete;
    PriorityComplete = mnLoadLocalComplete.PriorityComplete;
    DateComplete = mnLoadLocalComplete.DateComplete;
    EtaComplete = mnLoadLocalComplete.EtaComplete;
    // console.log(TitleComplete,DetailsComplete,PriorityComplete,DateComplete,EtaComplete);
    mnComplete.innerHTML = `
    
    <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Priority</th>
          <th scope="col">ETA</th>
          <th scope="col">Created Date
          
          </th>
        </tr>
      </thead>

    `;
    TitleComplete.forEach((element, index) => {
    let htmlString = `

    <tbody>
      <tr>
        <td scope="row">${[index+1]}</td>
        <td><b>${TitleComplete[index]}</b></td>
        <td>${DetailsComplete[index]}</td>
        <td>${PriorityComplete[index]}</td>
        <td>${EtaComplete[index]}</td>
        <td>${DateComplete[index]}</td>
      </tr>
    </tbody>
  
      `
        mnComplete.innerHTML += htmlString;
    });

    let showData = document.querySelector('.showdata');
    mnStyle = window.getComputedStyle(showData); //get all css values
    mndisplay = mnStyle.getPropertyValue('display');
    if(mndisplay=='none'){ //if display is nono
        showData.style = 'display:block'
    } else {
        showData.style = 'display:none'
    }
}

document.querySelector('.mnDownloadImage').addEventListener('click',()=>{
  console.log('download will work')
})