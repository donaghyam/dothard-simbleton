import { businessList, nyBusinessList, manufacturingBusinessList } from "./businessList.js";
import { agentListHTML } from "./PurchasingAgents.js";

// const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="business">
${businessList()}
</article>
<article class="businessList--newYork">
${nyBusinessList()}
</article>
<article class="businessList--newYork">
${manufacturingBusinessList()}
</article>
<article class="agents">
${agentListHTML()}
</article>
`
// mainContainer.innerHTML = applicationHTML
