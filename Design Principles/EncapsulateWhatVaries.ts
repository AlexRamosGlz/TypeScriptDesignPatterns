/**
 * Encapsulate what varies
 * 
 * Identify the aspects of your application that vary and separate them from what stays the same
 */

// #########################        Encapsulation on a method level    #####################################################

function getOrder(order): number {
    // Some code that won't change
    let total;

    // add taxt rate
    if(order.country === "US") {
        total += total * .07; // US sales tax
    }
    if(order.country == "EU") {
        total += total * .20; // EU sales tax
    }

    
    // improved way to calculate tax rate
    return total += total * getTaxRate(order.country);
}

/**
 *  You can extract the taxt calcuation logistic
 */
function getTaxRate(country): number {
    if(country === "US") {
       return .07; // US sales tax
    }
    if(country == "EU") {
       return .20; // EU sales tax
    }

    else return 0;
}

// ###################################################################################################



// #########################        Encapsulation on a Class level    #####################################################

/**
 *  Encapsulation on a class level
 */


// ########################################################################################################################