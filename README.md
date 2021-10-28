# Generate Your Password Mr. Bond

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
IF user enters anything other than a numeric value b/w 8 & 128 the user will be prompted again
THEN I choose a length of at least 8 characters and no more than 128 characters
<!-- *IF user enters anything other than a numeric value b/w 8 & 128 the user will be prompted again -->
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
<!-- *IF user enters anythng other than "y"(yes) or "n"(no) then the prompt will reappear and ask for correct value.  -->
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
<!-- *user does not have to choose "y" to each character type and program will recognizee this.  -->
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

Generator will use different loops to aid the user in creating a random password that can consist of upper and lowercase letters, numerical values, and special characters. In addition to the wide array of variables the user can also determine the length of said password when prompted. The generator will then use a concat function to combine the several arrays and generate a single password. 


to begin, click the "Generate Password" button.

