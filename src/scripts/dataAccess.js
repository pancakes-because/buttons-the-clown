
/* You will need to store that external data in your application state when you fetch it. Create a property named requests in your application state object. Its initial value must be an empty array. */ 

const applicationState = {
    requests: [], 
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

/* Define and export a function named getRequests that returns a copy of the requests state. Go back to a previous project and look at the functions that return copies of arrays in the database module if you've forgotten the syntax. */ 

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

