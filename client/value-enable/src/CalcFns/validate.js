import { CalcAge } from "./calcAge"

export const Validate = (data) => {
    const { DOB, gender, policy_term, sum_assured, modal_premium, premium_frequency, premium_paying_term } = data

    // 1st check if any field is empty 
    if (DOB == '' || gender == "NA" || sum_assured == 0 || policy_term == "" || modal_premium == "" || premium_frequency == 'NA' || premium_paying_term == "") return "All fields are mandatory"
 
    // 2nd check policy term should be between 10 to 20 
    if(+policy_term<10 || +policy_term>20)return "Policy term should be between 10 to 20"


    //3rd check ppt should be between 5 to 10 
    if(+premium_paying_term<5||+premium_paying_term>10)return 'Premium paying term should be between 5 to 10'


    //4th check premium should be 10k to 50k
    if (+modal_premium < 10000 || +modal_premium > 50000) return "modal premimum should be between 10000 to 50000"
    
    // 5th check policy term should be greater than premium paying term
    if(+policy_term<= +premium_paying_term)return "Policy term should be greater than Premium paying term"

    // 6th check age 23 to 56 only 
    let age = CalcAge(new Date(DOB))
    if (+age < 23 || +age > 56) return `You are not eligible your age is ${age}.It should be between 23 to 56`
    

    // 7th sum assured
    if (+sum_assured < 1000000 || +sum_assured > 5000000) return "Sum Assured should be between 10Lacs to 50Lacs"
    
    return true 
}