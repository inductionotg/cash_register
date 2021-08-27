var billAmount = document.querySelector('#cash');
const cashGiven = document.querySelector('#amount-give');

const btnCheck = document.querySelector('.btn-check');
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.no-0f-notes');
const btnNext = document.querySelector('.btn-next');
const label = document.querySelector('.label-text');
const diva = document.querySelector('.show');



const notesAvailable=[2000,500,100,20,10,5,1];

function hideMessage(){
    message.style.dispaly = "none";
}

function showMessage(msg){
    message.style.display="block";
    message.textContent =msg 
}

function calculateChange(amountToReturned){
    for (var i=0; i<notesAvailable.length; i++){
        const numberOfNotes = Math.trunc(amountToReturned/notesAvailable[i]);
    
        amountToReturned = amountToReturned % notesAvailable[i];
        noOfNotes[i].textContent = numberOfNotes;
    }
}

function check(){
    if(billAmount.value === ""){
        alert("Please enter the Bill Amount");
    }
    else{
        diva.classList.remove('hidden');
        btnNext.classList.add('hidden');

    }
}

btnNext.addEventListener('click',function(){
    
    check();
    
    
      
});

btnCheck.addEventListener('click',function(){
    
    hideMessage();
    if(Number(billAmount.value) === Number(cashGiven.value)){
        showMessage("Thank you For the Exact Amount");
    }

    else if (Number(billAmount.value)>0)
    {
        if(Number(cashGiven.value)>= Number(billAmount.value))
        {
            var amoutToReturned = cashGiven.value - billAmount.value;
            console.log(amoutToReturned);
            calculateChange(amoutToReturned);
            
        }
        else
        {

            showMessage("Do you wanna wash the plates");
        }

    }

    else{
        showMessage("Invalid Amount");

    } 
    
});
