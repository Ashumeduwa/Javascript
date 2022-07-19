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

    console.log(TitleComplete[1]);
    TitleComplete.forEach((element, index) => {
        console.log(TitleComplete[index])
        let htmlString = `

    <tbody>
      <tr>
        <td scope="row">${[index]}</td>
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
}