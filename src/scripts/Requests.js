import { getRequests } from "./dataAccess.js"

/* In the following code, you will need to define the function that will be passed to the map() method.

The function you write will convert each service request object into HTML representations. Since it is wrapped with a <ul> element, make each one an <li> element showing only the description of the request to start.

1. The function should define 1 parameter (value will be each object in the array).
2. The description of the service request should be interpolated inside the <li> HTML representation.
3. The function should return the HTML representation.

For example, if you write a function named convertRequestToListElement, then you would update the code below to the following... 

requests.map(convertRequestToListElement).join("") */ 

const convertRequestToListElement = (request) => {

    return `<li id="request--${request.id}">
    ${request.child}'s birthday party for ${request.guests} guests 
    </li>`

}

export const Requests = () => {

    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}