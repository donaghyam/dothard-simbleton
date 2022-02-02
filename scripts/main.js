import { businessList, nyBusinessList, manufacturingBusinessList } from "./businessList.js";
import { agentList } from "./PurchasingAgents.js";

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
${agentList()}
</article>
`