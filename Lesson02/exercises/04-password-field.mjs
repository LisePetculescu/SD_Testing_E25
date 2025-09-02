

export function checkPasswordInput(passwordInput) {
    let isValidPassword = false;

    // let passwordInput = andjfnk

    const minChar = 6;
    const maxChar = 10; 

     if (typeof passwordInput !== "string") {
        return false;
     }
        
    

    if (passwordInput.includes("æ") || passwordInput.includes("Æ") || passwordInput.includes("ø") || passwordInput.includes("Ø") || passwordInput.includes("å") || passwordInput.includes("Å")) {
        return isValidPassword;
        
    } else if ( passwordInput.length >= minChar && passwordInput.length <= maxChar &&  passwordInput.trim().length !== 0 ) {
        // console.log(passwordInput);
        // console.log(typeof passwordInput);
        
        isValidPassword = true;

    } else {
       return isValidPassword;
    }


    return isValidPassword;
}

try {
    console.log(checkPasswordInput(abdjek));
} catch (error) {
    console.error("not valid pw input");
    
}

