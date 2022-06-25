
// Defining global variables

let btnclick = document.querySelector('.btn-primary');
// let objnotes = [];

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
        notesTitle = JSON.parse(localStorage.getItem('Title'));
        notesDetails = JSON.parse(localStorage.getItem('Details'));
        notesPriority = JSON.parse(localStorage.getItem('Priority'));

        if (notesTitle == null) {
            notesTitle = [];
            notesDetails = [];
            notesPriority = [];
        }

        notesTitle.push(mnobject.mnTitle);
        notesDetails.push(mnobject.mnDetails);
        notesPriority.push(mnobject.mnPriority)

        localStorage.setItem('Title', JSON.stringify(notesTitle));
        localStorage.setItem('Details', JSON.stringify(notesDetails));
        localStorage.setItem('Priority', JSON.stringify(notesPriority));
        console.log(notesTitle);
        console.log(notesDetails);
        console.log(notesPriority)


        //end of initiating local storage and saving

        //for loop to print all arrays

        notesTitle.forEach((Element,index) =>{
                

        })

        //for end loop to print all arrays



        let cardBody = document.getElementById('card-body')
        let htmlString = `
        <div class="card-body">
        <h5 class="card-title">${mnobject.mnTitle}</h5>
        <p class="card-text">${mnobject.mnDetails}</p>
        <h5 class="card-title">${mnobject.mnPriority}</h5>
        <a href="#" class="btn btn-primary">Completed</a>
      </div>
        `
        cardBody.innerHTML += htmlString;

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
    }

})
