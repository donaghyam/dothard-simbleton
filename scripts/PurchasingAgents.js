import { getBusinesses } from "./database.js";

const businesses = getBusinesses()

//Function to create new array with only purchasing agents
export const purchasingAgentNames = () => {
    const onlyNames = businesses.map(purchasingAgentObject => {
        return purchasingAgentObject.
    })
}