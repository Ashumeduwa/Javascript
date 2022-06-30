// Defining class

class mNpotes {
    constructor(mnTitle, mnDetails, mnPriority) {
        this.mnTitle = mnTitle;
        this.mnDetails = mnDetails;
        this.mnPriority = mnPriority;
    }

    addValue = (mnobject) => {

        //initiating local storage and saving

        let notesTitle = new Array();
        let notesDetails = new Array();
        let notesPriority = new Array();
        let notesDate = new Array();
        const cardBody = document.getElementById('card-body')
        notesTitle = JSON.parse(localStorage.getItem('Title'));
        notesDetails = JSON.parse(localStorage.getItem('Details'));
        notesPriority = JSON.parse(localStorage.getItem('Priority'));
        notesDate = JSON.parse(localStorage.getItem('mnDates'));

        if (notesTitle == null) {
            notesTitle = [];
            notesDetails = [];
            notesPriority = [];
            notesDate= [];
        }

        notesTitle.push(mnobject.mnTitle);
        notesDetails.push(mnobject.mnDetails);
        notesPriority.push(mnobject.mnPriority);
        notesDate.push(new Date().toString());

        localStorage.setItem('Title', JSON.stringify(notesTitle));
        localStorage.setItem('Details', JSON.stringify(notesDetails));
        localStorage.setItem('Priority', JSON.stringify(notesPriority));
        localStorage.setItem('mnDates', JSON.stringify(notesDate));
        cardBody.innerHTML = "";
        this.LoadApps(notesTitle, notesDetails, notesPriority,notesDate);
        //end of initiating local storage and saving

    }

    // Adding new call function loadApps () to load cards based on priority
    LoadApps = (notesTitle, notesDetails, notesPriority,notesDate) => {
        let mnPriorityArry = ['Urgent priority task', 'Task', 'Notes', 'Normal Task (EOD)', 'Weekly task'] //loop to set priority
        mnPriorityArry.forEach((element, index) => {  //for loop to print all arrays based on priority
            let cardPriority = element;
            notesTitle.forEach((Element, index) => { //loop to [print] elements
                // console.log(notesTitle[index]);
                let cardBody = document.getElementById('card-body')
                if (cardPriority == notesPriority[index]) {
                    let htmlString = `
                <div class="card-body">
                <h6 class="card-title">${notesTitle[index]}</h6>
                <p class="card-text">${notesDetails[index]}</p>
                <p class="card-title cardPriority">${notesDate[index]}</p>
                <a href="#" class="btn btn-primary btn${notesPriority[index]}">${notesPriority[index]}</a>
              </div>
                `
                    cardBody.innerHTML += htmlString;
                }
            })
        });
    }

    mnValidation(mnobject) {
        if ((mnobject.mnTitle).length < 2) {
            return "False";
        } else {
            return "True";
        }

    }

}


// Add event for sumbit button
let btnclick = document.querySelector('.btn-primary');

btnclick.addEventListener('click', (e) => {

    let mnTitle = document.getElementById('txtTitle').value;
    let mnDetails = document.getElementById('txtURL').value;
    let mnPriority = document.getElementById('mnOptions');
    mnPriority = mnPriority.options[mnPriority.selectedIndex].value;

    //creating Object from class
    let mnobject = new mNpotes(mnTitle, mnDetails, mnPriority);

    //validating form and runing function incase of true
    let formValidation = mnobject.mnValidation(mnobject);
    if (formValidation == "True") {
        mnobject.addValue(mnobject);
        clearContent();

    }

})


window.onload = (event) => {

    loadcontent();

};

clearContent = () =>{
    document.getElementById('txtTitle').value="";
    document.getElementById('txtURL').value="";
}

loadcontent = () => {
    notesTitle = JSON.parse(localStorage.getItem('Title'));
    notesDetails = JSON.parse(localStorage.getItem('Details'));
    notesPriority = JSON.parse(localStorage.getItem('Priority'));
    notesDate = JSON.parse(localStorage.getItem('mnDates'));
    let mnobject1 = new mNpotes(notesTitle, notesDetails, notesPriority);
    mnobject1.LoadApps(notesTitle, notesDetails, notesPriority,notesDate);
}


let btnclickClear = document.getElementById('mnbuttonClear')
btnclickClear.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})