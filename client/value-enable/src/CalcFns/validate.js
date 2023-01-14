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
    if (age == 23) {
        
    }
    else if (+age < 23 || +age > 56) return `You are not eligible your age is ${age}.It should be between 23 to 56`
    
    // 7th sum assured caping the sum to 1lakh to 5lakh
    // becoz max premium can be paid is 50k and the max ppt is 10 so if we 50*10 max we can pay is 5lakhs and minimum can be paid 1lakh ---> min premium 10k so if we max it to match ppt 10k*10 --->1lakh
    if (+sum_assured < 100000 || +sum_assured > 500000) return "Sum Assured should be between 1Lac to 5Lacs"

    // 8th check if within PPT amount can be paid or not
    if (Math.round(sum_assured/premium_paying_term)!=modal_premium) {
        return`Make your premium ${Math.round(sum_assured/premium_paying_term)} inorder to pay within PPT or Increase your PPT`
    }
    return true 
}