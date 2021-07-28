// Code your solution here

// findMatching() returns all drivers that match the passed in name 

function findMatching(array,str) {
    let matchingDrivers = array.filter( name => { return name.toLowerCase() === str.toLowerCase() })
    return matchingDrivers 
}

/////////////////////////////////

function fuzzyMatch(array,str) {
    let matchingDrivers = array.filter( name => { return  name.startsWith(str)    })
    return matchingDrivers

}

/////////////////////////////////

function matchName(array,str) {

    let matching = array.filter( driver => { return driver.name === str }    ) 
    return matching 
}
