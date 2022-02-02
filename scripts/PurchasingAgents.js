import { getBusinesses } from "./database.js";

const businesses = getBusinesses()



//Function to create new array with only purchasing agents info
export const purchasingAgents = () => {
    const onlyNames = businesses.map(purchasingAgentObject => {
        return purchasingAgentObject.purchasingAgent
    })
    return onlyNames
}

//Function to add fullName to purchasingAgents
export const purchasingAgentsFullNames = () => {
    let newPurchasingAgentsArray = purchasingAgents()
    newPurchasingAgentsArray.forEach(
        (agentObject) => {
            agentObject.fullName = `${agentObject.nameFirst} ${agentObject.nameLast}`
        }
    )
    return newPurchasingAgentsArray
}

const purchasingAgentsArray = purchasingAgentsFullNames() 


//Define variable to store html content
export let purchasingAgentsHTML = document.querySelector(".agents")

//Function to list purchasing agent names from new array
export const agentList = () => {
    //Define variable store new array from previous functions
    const newAgentArray = purchasingAgentsArray
    //Use forEach array method to iterate through newAgentArray
    purchasingAgentsHTML.innerHTML = "<h1>Purchasing Agents</h1>"
    newAgentArray.forEach(
        (agentObject) => {
            //Use forEach array method to iterate through businesses array
            businesses.forEach(
                (businessObject) => {
                    //Check if last name of agent array = last name on business array
                    if (agentObject.nameLast === businessObject.purchasingAgent.nameLast){
                        //If true, invoke agentListHTML function
                        purchasingAgentsHTML = agentListHTML(agentObject, businessObject)
                    }
                }
            )
        }
    );
    return purchasingAgentsHTML
}

//Function to take results of agentList and put it in html
export const agentListHTML = (agentObject, businessObject) => {
    purchasingAgentsHTML.innerHTML += `
        <section>
        <h1>${agentObject.nameFirst} ${agentObject.nameLast}</h1> 
        ${businessObject.companyName} <br><br>
        ${businessObject.phoneWork} <br><br>
        <div class="lines">
        </div>
        </section>
    `
    return purchasingAgentsHTML
}

export const agentListHTMLforSearch = (agentObject, businessObject) => {
    return `
        <section>
        <h1>${agentObject.nameFirst} ${agentObject.nameLast}</h1> 
        ${businessObject.companyName} <br><br>
        ${businessObject.phoneWork} <br><br>
        <div class="lines">
        </div>
        </section>
    `
}