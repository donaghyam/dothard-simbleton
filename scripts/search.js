import { getBusinesses } from "./database.js";
import { businesses } from "./Business.js";

const businesses = getBusinesses()

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
                    const foundBusiness = businesses.find(business => business.companyName.includes(input))
                            if (foundBusiness === undefined){
                                window.alert("huh?")
                            } else {
                            companySearchResultArticle.innerHTML += `${businesses(foundBusiness)}`
                            }
                }
        });


