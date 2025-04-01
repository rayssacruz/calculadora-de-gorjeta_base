let bill = 0
 let tipPercentage = 0
 let numberOfPeople = 0
 let buttonSelected = null
 
 function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
     
 }
 
 function receiveNumberOfPeopleValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber
    console.log(numberOfPeople)
    }
 
    function receiveTipPercentageValue(value){
        if (buttonSelected !== null){
            buttonSelected.classList.remove("button-selected")
        }
    
        let customTipInput = document.querySelector("#custom-tip")
    
        if(customTipInput.value !== ""){
            customTipInput.value = ""
        }
    
    
        tipPercentage = value / 100
 
     buttonSelected = document.querySelector(`#button-${value}`)
     buttonSelected.classList.add("button-selected")
 }
 
 
 function receiveCustomTipPercentageValue(){
    if(buttonSelected != null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }

    tipPercentage = document.querySelector("#custom-tip").valueAsNumber/100
}   

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
    
    calculate()
}

function receiveNumberOfPeopleValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber

    calculate()
}

function receiveTipPercentageValue(value){
buttonSelected = document.querySelector(`#button-${value}`)
     buttonSelected.classList.add("button-selected")
     calculate()
 }
 
 function receiveCustomTipPercentageValue(){
}

tipPercentage = document.querySelector("#custom-tip").valueAsNumber/100
calculate()


function calculate() {
if(bill != 0 && tipPercentage !== 0 && numberOfPeople !== 0){
    let amountStrong = document.querySelector(".amount strong")
    let tipAmountPerson = (bill * tipPercentage) / numberOfPeople
    amountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`

    let totalStrong = document.querySelector(".total strong")
    let totalPerson = (bill / numberOfPeople) + tipAmountPerson
    totalStrong.innerText = `$${totalPerson.toFixed(2)}`
} else {
    console.log("preencha tudo")
}
}

