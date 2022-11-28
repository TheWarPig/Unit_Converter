/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



const convertInputElement = document.getElementById('convertInput-element')
const convertBtnElement =  document.getElementById('convertBtn-element')
const lengthDiv = document.getElementById("lengthC")
const volumeDiv = document.getElementById("volumeC")
const massDiv = document.getElementById("massC")
let count = 0

convertBtnElement.addEventListener('click', function() {
    
    let unites = convertInputElement.value
        
    metersToFeet = Math.round((unites * 3.281) * 1000) / 1000
    feetToMeters = Math.round((unites / 3.281) * 1000) / 1000

    litersToGallons = Math.round((unites * 0.264) * 1000) / 1000
    gallonsToLiters = Math.round((unites / 0.264) * 1000)/ 1000

    kilogramToPounds = Math.round((unites * 2.204) * 1000) / 1000
    poundsToKilograms = Math.round((unites / 2.204) * 1000) / 1000
    
    if (count < 5){
        
        count++
        render(unites ,metersToFeet, feetToMeters, litersToGallons, gallonsToLiters, 
            kilogramToPounds, poundsToKilograms)
        
    }
    
    if(count === 5){
        const pEl = document.getElementsByTagName("p")
        console.log(pEl)
        Array.from(pEl).forEach(p => {
            p.remove()
            
        });
        render(unites ,metersToFeet, feetToMeters, litersToGallons, gallonsToLiters, 
            kilogramToPounds, poundsToKilograms)
        count = 1
    }
});


function render(unites, metersToFeet, feetToMeters, litersToGallons, gallonsToLiters, 
    kilogramToPounds, poundsToKilograms){
    const pLength = document.createElement("p")
    pLength.setAttribute("id", `convert-${count}`)
    pLength.textContent = `${unites} meters = ${metersToFeet} feet | ${unites} feet = ${feetToMeters} meters`
    lengthDiv.append(pLength)

    const pVolume = document.createElement("p")
    pVolume.setAttribute("id", `convert-${count}`)
    pVolume.textContent = `${unites} Liters = ${litersToGallons} Gallons | ${unites} Gallons = ${gallonsToLiters} Liters`
    volumeDiv.append(pVolume)

    const pMass = document.createElement("p")
    pMass.setAttribute("id", `convert-${count}`)
    pMass.textContent = `${unites} Kilograms = ${kilogramToPounds} Pounds | ${unites} Pounds = ${poundsToKilograms} Kilograms`
    massDiv.append(pMass)
}