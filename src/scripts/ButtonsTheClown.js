import { Requests } from "./Requests.js"

/* Here is some starter code. */ 

export const ButtonsTheClown = () => {
    return `
        <h1>House of Clowns</h1>
        <section class="serviceForm">
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}