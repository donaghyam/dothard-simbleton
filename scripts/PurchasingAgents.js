import { getBusinesses } from "./database.js";

const businesses = getBusinesses()



//Function to create new array with only purchasing agents info
const purchasingAgents = () => {
    const onlyNames = businesses.map(purchasingAgentObject => {
        return purchasingAgentObject.purchasingAgent
    })
    return onlyNames
}

//Define variable to store html content
let purchasingAgentsHTML = document.querySelector(".agents")

//Function to list purchasing agent names from new array
export const agentListHTML = () => {
    purchasingAgentsHTML.innerHTML = "<h1>Purchasing Agents</h1>"
    //Define variable store new array from previous functions
    const newAgentArray = purchasingAgents()
    //Use forEach array method to iterate through newAgentArray
    newAgentArray.forEach(
        (agentObject) => {
            //Use forEach array method to iterate through businesses array
            businesses.forEach(
                (businessObject) => {
                    //Check if last name of agent array = last name on business array
                    if (agentObject.nameLast === businessObject.purchasingAgent.nameLast){
                        //If true, add names, company name, and phone number to html string
                        purchasingAgentsHTML.innerHTML += `
                            <section>
                            <h1>${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}</h1> 
                            ${businessObject.companyName} <br><br>
                            ${businessObject.phoneWork} <br><br>
                            <div class="lines">
                            </div>
                            </section>
                        `
                    }
                }
            )
        }
    );
    return purchasingAgentsHTML
}