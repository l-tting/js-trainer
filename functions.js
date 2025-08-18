//Write a program that takes as input the speed of a car e.g 80. 
// If the speed is less than 70, it should print “Ok”. Otherwise, 
// for every 5 km/s above the speed limit (70), it should give the 
// driver one demerit point and print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”. 
//If the driver gets more than 12 points, the function should print: “License suspended”.

//math.floor -> round down to the nearest whole number
function check_speed(speed){
    const speed_limit = 70

    if (speed<=speed_limit){
        console.log("Ok")
    }else{
        let speed_exceeded = speed - speed_limit
        let points = Math.floor((speed_exceeded / 5)) + 1
        let result = points 
        if(points > 12){
            result = "License suspended"
        }else{
            result = `Demerit points - ${points}`
        }
    }
    return result
}

// let speed_input = parseInt(prompt("Enter some speed: "))

// let func_speed = check_speed(speed_input)
// console.log(func_speed)


// Write a program called stars. It should prompt the user for a number, 
// and it should print the number of stars till the number entered.
// Example If rows is 5, it should print the following:
// *
// **
// ***
// ****
// *****.....

// _-> printing lines 


function stars(num){

    for(let i=1;i<= num;i++){
        let row = "" 
        for (let j = 1;j<=i;j++){
            row += "*"
        }
    console.log(row)
    }
}
// let no_of_stars = parseInt(prompt("Enter no of stars: "))
// stars(no_of_stars)




// Write a program that takes the date of birth of a 
// person and the program outputs the age in terms of years,months,days TODAY.

let birth_date = prompt("Enter your date of birth in the format: YYYY-MM-DD")

//2006-2-25
//2025-8-18

function get_birthday(birth_date){
    let birthdate_parts = birth_date.split('-')
    console.log(birthdate_parts)
    //['2006', '9', '25']
    let birth_year = parseInt(birthdate_parts[0])
    let birth_month = parseInt(birthdate_parts[1])
    let birth_day = parseInt(birthdate_parts[2])

    let todayDate = 18
    let todayMonth = 8
    let todayYear = 2025 

    let monthDays = [31,30,31,30,31,30,31,31,30,31,30,31]

    if (todayDate < birth_day){
        todayMonth--
        todayDate += monthDays[(todayMonth -1 + 12) %12]
    }
    let calculated_day = todayDate - birth_day
    let calculated_month;
    let calculated_year

    if (birth_month > todayMonth){
        calculated = 12 - (birth_month - todayMonth)
        calculated_year = todayYear - birth_year - 1
    }
    else{
        calculated_month = todayMonth - birth_month
        calculated_year = todayYear - birth_year
    }

   return {"calculated_year":calculated_year,"calculated_month":calculated_month,
    "calculated_days":calculated_day
   } 


}














