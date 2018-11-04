import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(abstractControl: AbstractControl) {
       let password = abstractControl.get('password').value;
       let confirmPassword = abstractControl.get('confirmPassword').value;

        if(password !== confirmPassword) {
            abstractControl.get('confirmPassword').setErrors({
                PasswordNotMatch: true
            })
        } else {
            return null
        }
    }

    static PasswordStrength(abstractControl: AbstractControl) {
        let password = abstractControl.get('password').value;
        let confirmPassword = abstractControl.get('confirmPassword').value;
 
         if(password !== confirmPassword) {
             abstractControl.get('confirmPassword').setErrors({
                 PasswordNotMatch: true
             })
         } else {
             return null
         }
     }
}