document.getElementById("tax_form").addEventListener("submit",function(event){
    event.preventDefault()


    let basic_salary = Number(document.getElementById("basic_salary").value)
    let allowances = Number(document.getElementById("allowances").value)

    function calculate_gross(basic_salary,allowances){
        return basic_salary + allowances
    }

    let gross = calculate_gross(basic_salary,allowances)
    document.getElementById("gross").innerHTML = gross




})