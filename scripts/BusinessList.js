import { businesses } from "./Business.js";
import { getBusinesses } from "./database.js";

//----LISTING ALL BUSINESSES--------


//Define variable to store array of business
const businessArray = getBusinesses()

//Function to list businesses
export const businessList = () => {
    //Define variable to store html content
    let businessListHtml = document.querySelector(".business")
    businessListHtml.innerHTML = "<h1>Active Businesses</h1>"
    //Use forEach array method to run businesses function for each object
    businessArray.forEach(
        (businessObject) => {
            businessListHtml.innerHTML += businesses(businessObject)
        }
    );
    return businessListHtml
}


//----LISTING NEW YORK BUSINESSES--------

//Function to list only NY business
const checkForNY = (businessObject) => {
   //Check each object for business states with "NY"
    if (businessObject.addressStateCode === "NY") {
        return true
    } 
    return false
}

//Function to create new array of filtered items
const nyBusinessesArray = () => {
    const filteredItems = businessArray.filter(checkForNY)
    return filteredItems
}

export const nyBusinessList = () => {
    //Define variable to store html content
    let businessListHtmlNY = document.querySelector(".businessList--newYork")
    businessListHtmlNY.innerHTML = "<h1>New York Businesses</h1>"
    //Define variable to hold new array from nyBusinessesArray function
    const nyArray = nyBusinessesArray()
    nyArray.forEach(
        (businessObject) => {
            businessListHtmlNY.innerHTML += businesses(businessObject)
    });
    return businessListHtmlNY
}

//----LISTING MANUFACTURING BUSINESSES--------

//Function to list only NY business
const checkForManufacturing = (businessObject) => {
    //Check each object for manufacturing
    if (businessObject.companyIndustry === "Manufacturing") {
        return true
    } 
    return false
}

 //Function to create new array of filtered items
const manufacturingBusinessesArray = () => {
    const filteredItems = businessArray.filter(checkForManufacturing)
    return filteredItems
 }
 
export const manufacturingBusinessList = () => {
     //Define variable to store html content
    let businessListHtmlManufacturing = document.querySelector(".businessList--manufacturing")
    businessListHtmlManufacturing.innerHTML = "<h1>Manufacturing Businesses</h1>"
     //Define variable to hold new array from manufacturingBusinessesArray function
    const manufacturingArray = manufacturingBusinessesArray()
    manufacturingArray.forEach(
        (businessObject) => {
            businessListHtmlManufacturing.innerHTML += businesses(businessObject)
    });
    return businessListHtmlManufacturing
}

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */
                    const input = document.getElementById("companySearch").value
                    const foundBusiness = businessArray.find(business => business.companyName.includes(input))
                            if (foundBusiness === undefined){
                                window.alert("huh?")
                            } else {
                            companySearchResultArticle.innerHTML += `${businesses(foundBusiness)}`
                            }
                }
        });