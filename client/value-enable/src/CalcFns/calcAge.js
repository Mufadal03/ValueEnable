export const CalcAge = (dob) => {
    let difference  = Date.now() - dob.getTime();
    return Math.abs(new Date(difference).getUTCFullYear() - 1970);
}