/* You need to fetch the data from the API and store it in application state before you can convert the data structures to HTML representations. The syntax here is very confusing for a beginner, and your instruction team will explain the logic when they do a live coding review. */ 

import { fetchRequests } from "./dataAccess.js"
import { ButtonsTheClown } from "./ButtonsTheClown.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}

render()