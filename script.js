const mnFilterCheck = localStorage.mnFilter;
mnLoadLocal = () => {
    var notesTitle = JSON.parse(localStorage.getItem("Title"));
    var notesDetails = JSON.parse(localStorage.getItem("Details"));
    var notesPriority = JSON.parse(localStorage.getItem("Priority"));
    var notesDate = JSON.parse(localStorage.getItem("mnDates"));
    var notesEta = JSON.parse(localStorage.getItem("lmnEta"));

    return { notesTitle, notesDetails, notesPriority, notesDate, notesEta};
}


// Defining class

class mNpotes {
    constructor(mnTitle, mnDetails, mnPriority, mnEta) {
        this.mnTitle = mnTitle;
        this.mnDetails = mnDetails;
        this.mnPriority = mnPriority;
        this.mnEta = mnEta;
    }

    addValue = (mnobject) => {

        //initiating local storage and saving

        let notesTitle = new Array();
        let notesDetails = new Array();
        let notesPriority = new Array();
        let notesDate = new Array();
        let notesEta = new Array();

        const cardBody = document.getElementById('card-body')

        notesTitle = JSON.parse(localStorage.getItem('Title'));
        notesDetails = JSON.parse(localStorage.getItem('Details'));
        notesPriority = JSON.parse(localStorage.getItem('Priority'));
        notesDate = JSON.parse(localStorage.getItem('mnDates'));
        notesEta = JSON.parse(localStorage.getItem('lmnEta'));

        if (notesTitle == null) {
            notesTitle = [];
            notesDetails = [];
            notesPriority = [];
            notesDate = [];
            notesEta = [];
        }

        notesTitle.push(mnobject.mnTitle);
        notesDetails.push(mnobject.mnDetails);
        notesPriority.push(mnobject.mnPriority);
        notesEta.push(mnobject.mnEta);
        notesDate.push(new Date().toString());

        localStorage.setItem('Title', JSON.stringify(notesTitle));
        localStorage.setItem('Details', JSON.stringify(notesDetails));
        localStorage.setItem('Priority', JSON.stringify(notesPriority));
        localStorage.setItem('mnDates', JSON.stringify(notesDate));
        localStorage.setItem('lmnEta', JSON.stringify(notesEta));
        cardBody.innerHTML = "";
        let mnPriorityArry = ['Urgent priority task', 'Task', 'Notes', 'Normal Task (EOD)', 'Weekly task']
        // this.LoadApps(notesTitle, notesDetails, notesPriority, notesDate, mnPriorityArry, notesEta);
        //end of initiating local storage and saving
        localStorage.setItem('mnFilter','All');
        location.reload();
        mnNotify("Success");

    }

    // Adding new call function loadApps () to load cards based on priority
    LoadApps = (notesTitle, notesDetails, notesPriority, notesDate, mnPriorityArry, mnotesEtanEta, mnFilters) => {
        //loop to set priority
    
        var mntoday = new Date();
        //Filter upcomming 


        if (mnFilters == 'Upcomming') {
            let mnDateString = new Date()
            console.log(mnDateString); //delete it
            mnPriorityArry.forEach((element, index) => {  //for loop to print all arrays based on priority
                let cardPriority = element;
                notesTitle.forEach((Element, index) => { //loop to [print] elements
    
                    let ComparemnotesEtanEta = new Date(mnotesEtanEta[index])
                    if (ComparemnotesEtanEta > mnDateString) {
                        let cardBody = document.getElementById('card-body')
                        if (cardPriority == notesPriority[index]) {
                            let htmlString = `
                        <div class="card-body">
                        <div class="mnoptions">
                        <img src="/images/edit.png" id="0" onclick="editcard(0)" class="editButton"><div class="timelines"></div>
                        <p class="cardETA"> ETA : ${mnotesEtanEta[index]}</p>
                        </div>
                        <h7 class="card-title"><b>${notesTitle[index]}</b></h7>
                        <p class="card-title cardPriority">Created on: ${notesDate[index]}</p>
                        <p class="card-text" style="white-space: pre-line" >${notesDetails[index]}</p>
                        <a href="#" id="${[index]}" onclick="mnDeleteNotes(${[index]})" class="btn btn-primary btn-primary-hover btn${notesPriority[index]}">${notesPriority[index]}</a>
                        <a href="#" id="${[index]}" onclick="mnDeleteNotes(${[index]})" class="btn btn-primary btn${notesPriority[index]} mnComplete">Completed</a>
                        </div>
                `
                            cardBody.innerHTML += htmlString;
                        }
                    }
    
    
                })
            });
        }



      //Filtercondition Overdue

      if (mnFilters == 'Overdue') {
        let mnDateString = new Date()
        console.log(mnDateString); //delete it
        mnPriorityArry.forEach((element, index) => {  //for loop to print all arrays based on priority
            let cardPriority = element;
            notesTitle.forEach((Element, index) => { //loop to [print] elements

                let ComparemnotesEtanEta = new Date(mnotesEtanEta[index])
                if (ComparemnotesEtanEta < mnDateString) {
                    let cardBody = document.getElementById('card-body')
                    if (cardPriority == notesPriority[index]) {
                        let htmlString = `
                    <div class="card-body">
                    <div class="mnoptions">
                    <img src="/images/edit.png" id="0" onclick="editcard(0)" class="editButton"><div class="timelines"></div>
                    <p class="cardETA"> ETA : ${mnotesEtanEta[index]}</p>
                    </div>
                    <h7 class="card-title"><b>${notesTitle[index]}</b></h7>
                    <p class="card-title cardPriority">Created on: ${notesDate[index]}</p>
                    <p class="card-text" style="white-space: pre-line" >${notesDetails[index]}</p>
                    <a href="#" id="${[index]}" onclick="mnDeleteNotes(${[index]})" class="btn btn-primary btn-primary-hover btn${notesPriority[index]}">${notesPriority[index]}</a>
                    <a href="#" id="${[index]}" onclick="mnDeleteNotes(${[index]})" class="btn btn-primary btn${notesPriority[index]} mnComplete">Completed</a>
                    </div>
            `
                        cardBody.innerHTML += htmlString;
                    }
                }


            })
        });
    }


        //Filtercondition All

        if (mnFilters == 'All') {
            var mnDateString = mntoday.toISOString().substring(0, 10);

            mnPriorityArry.forEach((element, index) => {  //for loop to print all arrays based on priority
                let cardPriority = element;
                notesTitle.forEach((Element, index) => { //loop to [print] elements
                    // console.log(notesTitle[index]);
                    // let compareDate = new Date( mnotesEtanEta[index]);
                    // mntodayDate = new Date();


                    let cardBody = document.getElementById('card-body')
                    if (cardPriority == notesPriority[index]) {
                        let htmlString = `
                <div class="card-body">
                <div class="mnoptions">
                <img src="/images/edit.png" id="0" onclick="editcard(0)" class="editButton"><div class="timelines"></div>
                <p class="cardETA"> ETA : ${mnotesEtanEta[index]}</p>
                </div>
                <h7 class="card-title"><b>${notesTitle[index]}</b></h7>
                <p class="card-title cardPriority">Created on: ${notesDate[index]}</p>
                <p class="card-text" style="white-space: pre-line" >${notesDetails[index]}</p>
                <a href="#" id="${[index]}" onclick="mnDeleteNotes(${[index]})" class="btn btn-primary btn-primary-hover btn${notesPriority[index]}">${notesPriority[index]}</a>
                <a href="#" id="${[index]}" onclick="mnDeleteNotes(${[index]})" class="btn btn-primary btn${notesPriority[index]} mnComplete">Completed</a>
                </div>
        `
                        cardBody.innerHTML += htmlString;
                    }



                })
            });
        }


        // Filter Today condition

        if (mnFilters == 'Today') {
            var mnDateString = mntoday.toISOString().substring(0, 10);

            mnPriorityArry.forEach((element, index) => {  //for loop to print all arrays based on priority
                let cardPriority = element;
                notesTitle.forEach((Element, index) => { //loop to [print] elements
                    // console.log(notesTitle[index]);
                    // let compareDate = new Date( mnotesEtanEta[index]);
                    // mntodayDate = new Date();

                    if (mnotesEtanEta[index] == mnDateString) {
                        let cardBody = document.getElementById('card-body')
                        if (cardPriority == notesPriority[index]) {
                            let htmlString = `
                        <div class="card-body">
                        <div class="mnoptions">
                        <img src="/images/edit.png" id="0" onclick="editcard(0)" class="editButton"><div class="timelines"></div>
                        <p class="cardETA"> ETA : ${mnotesEtanEta[index]}</p>
                        </div>
                        <h7 class="card-title"><b>${notesTitle[index]}</b></h7>
                        <p class="card-title cardPriority">Created on: ${notesDate[index]}</p>
                        <p class="card-text" style="white-space: pre-line" >${notesDetails[index]}</p>
                        <a href="#" id="${[index]}" onclick="mnDeleteNotes(${[index]})" class="btn btn-primary btn-primary-hover btn${notesPriority[index]}">${notesPriority[index]}</a>
                        <a href="#" id="${[index]}" onclick="mnDeleteNotes(${[index]})" class="btn btn-primary btn${notesPriority[index]} mnComplete">Completed</a>
                        </div>
                `
                            cardBody.innerHTML += htmlString;
                        }
                    }


                })
            });
        }

    }

    mnValidation(mnobject) {
        if ((mnobject.mnTitle).length < 2 || (mnobject.mnEta).length < 2) {
            mnNotify("Validation");
            return "False";

        } else {
            return "True";

        }

    }


} editcard = (index) => {

}



// Add event for sumbit button abd calling functions
let btnclick = document.querySelector('.btn-primary');

btnclick.addEventListener('click', (e) => {

    let mnTitle = document.getElementById('txtTitle').value;
    let mnDetails = document.getElementById('txtURL').value;
    let mnPriority = document.getElementById('mnOptions');
    let mnEta = document.getElementById('mnDate').value;
    console.log(mnEta);
    mnPriority = mnPriority.options[mnPriority.selectedIndex].value;

    //creating Object from class
    let mnobject = new mNpotes(mnTitle, mnDetails, mnPriority, mnEta);

    //validating form and runing function incase of true
    let formValidation = mnobject.mnValidation(mnobject);
    if (formValidation == "True") {
        mnobject.addValue(mnobject);
        clearContent();
    }

})



//notifying that data is saved
mnNotify = (fn) => {
    if (fn == "Success") {
        let x = document.getElementById('mnalert')
        x.innerText = "Your data is saved"
        x.style = "background-color:#008000; color:white; height:auto!important";
    } else if (fn == "Validation") {
        let x = document.getElementById('mnalert')
        x.innerText = "Please fill Title and ETA"
        x.style = "background-color:#ff0000; color:white; height:auto!important";
    }



    setTimeout(() => {
        document.getElementById('mnalert').style = "height:0px"
    }, 2000);
}
//end of notifying that data is saved


//loading locdcontent function
window.onload = (event) => {
    loadcontent(mnFilterCheck);
};

//clearing localstorage 
clearContent = () => {
    document.getElementById('txtTitle').value = "";
    document.getElementById('txtURL').value = "";
}

//load conetne function 
loadcontent = (mnFilters) => {

    let mnstorageValue = mnLoadLocal();
    let notesTitle = mnstorageValue.notesTitle;
    let notesDetails = mnstorageValue.notesDetails;
    let notesPriority = mnstorageValue.notesPriority;
    let notesDate = mnstorageValue.notesDate;
    let notesEta = mnstorageValue.notesEta;
    if(typeof(mnFilters) == 'undefined'){
        var mnFilters = 'All';

    }
    console.log(mnFilters)


    if (notesTitle == null) { } else {
        let mnPriorityArry = ['Urgent priority task', 'Task', 'Notes', 'Normal Task (EOD)', 'Weekly task']
        let mnobject1 = new mNpotes(notesTitle, notesDetails, notesPriority, notesEta);
        mnobject1.LoadApps(notesTitle, notesDetails, notesPriority, notesDate, mnPriorityArry, notesEta, mnFilters);
    }
}

//clear everything  

let btnclickClear = document.getElementById('mnbuttonClear')
btnclickClear.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

//end clear everything


//delete function --- it will be triggered from HTML not by any event lister
mnDeleteNotes = (index) => {

    let mnstorageValue = mnLoadLocal();

    let notesTitle = mnstorageValue.notesTitle;
    let notesDetails = mnstorageValue.notesDetails;
    let notesPriority = mnstorageValue.notesPriority;
    let notesDate = mnstorageValue.notesDate;
    let notesEta = mnstorageValue.notesEta;

    console.log(notesTitle)
    console.log(index, typeof (notesTitle));

    notesTitle.splice(index, 1);
    notesDetails.splice(index, 1);
    notesPriority.splice(index, 1);
    notesDate.splice(index, 1);
    notesEta.splice(index, 1);


    localStorage.setItem('Title', JSON.stringify(notesTitle));
    localStorage.setItem('Details', JSON.stringify(notesDetails));
    localStorage.setItem('Priority', JSON.stringify(notesPriority));
    localStorage.setItem('mnDates', JSON.stringify(notesDate));
    localStorage.setItem('lmnEta', JSON.stringify(notesEta));

    location.reload();

}

//end of delete function

//cancel button of editable form


//end of cancel button of editable formi


//cancel button of editable form


// click on editables


editcard = (index) => {
    console.log('clicked');

    notesTitle = JSON.parse(localStorage.getItem('Title'));
    notesDetails = JSON.parse(localStorage.getItem('Details'));
    notesPriority = JSON.parse(localStorage.getItem('Priority'));
    notesDate = JSON.parse(localStorage.getItem('mnDates'));
    notesEta = JSON.parse(localStorage.getItem('lmnEta'));
    console.log(notesTitle[index]);

    let editable = document.querySelector('.editableback');
    editable.classList.add("mnInvisible");
    editable.classList.remove("mnVisible");
    document.getElementById('txtTitleUpdate').value = notesTitle[index];
    document.getElementById('txtURLUpdate').value = notesDetails[index];
    document.getElementById('mnOptionsUpdate').value = notesPriority[index];
    document.getElementById('mnDateUpdate').value = notesEta[index];




    let HTMLstring = `
    <div class="noteButtons">
      <div class="col-12">
        <button class="btn btn-primary" id="${[index]}" onclick="updateSave(${[index]})" type="submit">Save</button>
        <button class="btn btn-primary" id="${[index]}" onclick="editcardCancel()" type="submit">Cancel</button>
      </div>
    </div>`

    document.getElementById('notebuttonUpdates').innerHTML = HTMLstring;
}


editcardCancel = () => {
    console.log('clicked');
    let editable = document.querySelector('.editableback');
    editable.classList.add("mnVisible");
    editable.classList.remove("mnInvisible");
}


updateSave = (index) => {

    console.log('Save')
    notesTitle = JSON.parse(localStorage.getItem('Title'));
    notesDetails = JSON.parse(localStorage.getItem('Details'));
    notesPriority = JSON.parse(localStorage.getItem('Priority'));
    // notesDate = JSON.parse(localStorage.getItem('mnDates'));
    notesEta = JSON.parse(localStorage.getItem('lmnEta'));

    notesTitle[index] = document.getElementById('txtTitleUpdate').value;
    notesDetails[index] = document.getElementById('txtURLUpdate').value;
    notesPriority[index] = document.getElementById('mnOptionsUpdate').value;
    notesEta[index] = document.getElementById('mnDateUpdate').value;


    localStorage.setItem('Title', JSON.stringify(notesTitle));
    localStorage.setItem('Details', JSON.stringify(notesDetails));
    localStorage.setItem('Priority', JSON.stringify(notesPriority));
    // localStorage.setItem('mnDates', JSON.stringify(notesDate));
    localStorage.setItem('lmnEta', JSON.stringify(notesEta));
    location.reload();


}

// ---------------------------------------------------------------------------

// Filters

document.getElementById("mnOptionsFilter").addEventListener('change', (event) => {
    localStorage.setItem('mnFilter',event.target.value);
    location.reload();
  });
