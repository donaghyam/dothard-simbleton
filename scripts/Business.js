
//Function to display business information html
export const businesses = (businessObject) => {
    return `
        <section>
            <h3 class="business-name">${businessObject.companyName}</h3>
            <div class="business-address">
            ${businessObject.addressFullStreet}<br>
            ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode} <br><br>
            <div class="lines">
            </div>
        </section>
    `
}