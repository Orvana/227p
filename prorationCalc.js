document.getElementById("submit").addEventListener("click",calculate)

        function proration(currentDate){
            comparisonDate = 18
            if(currentDate > comparisonDate){
                currentDate = currentDate*(-1)
                dateComparison = (currentDate) + (comparisonDate) + 30
                dateComparison = dateComparison/30
                return dateComparison
            }
    
            if(currentDate == comparisonDate){
                dateComparison = 1
                return dateComparison
            }
            else{
                dateComparison = currentDate-comparisonDate
                dateComparison = dateComparison/30
                return dateComparison
            }    

        }
        function planCost(plan,lines){
            planCosts = 0

            if(lines == 1 && plan == "ELITE"){
                return planCosts = 95*lines
            }
            if(lines == 2 && plan == "ELITE"){
                return planCosts = 85*lines
            }
            if(lines == 3 && plan == "ELITE"){
                return planCosts = 70*lines
            }
            if(lines == 4 && plan == "ELITE"){
                return planCosts = 60*lines
            }
            if(lines == 5 && plan == "ELITE"){
                return planCosts = 55*lines
            }
            if(lines >= 6 && plan == "ELITE"){
                return planCosts = 50*lines
            }


            //extra pricing
            if(lines == 1 && plan == "EXTRA"){
                return planCosts = 85*lines
            }
            if(lines == 2 && plan == "EXTRA"){
                return planCosts = 75*lines
            }
            if(lines == 3 && plan == "EXTRA"){
                return planCosts = 60*lines
            }
            if(lines == 4 && plan == "EXTRA"){
                return planCosts = 50*lines
            }
            if(lines == 5 && plan == "EXTRA"){
                return planCosts = 45*lines
            }
            if(lines >= 6 && plan == "EXTRA"){
                return planCosts = 45*lines
            }
            //starter pricing
            if(lines == 1 && plan == "STARTER"){
                return planCosts = 75*lines
            }
            if(lines == 2 && plan == "STARTER"){
                return planCosts = 70*lines
            }
            if(lines == 3 && plan == "STARTER"){
                return planCosts = 55*lines
            }
            if(lines == 4 && plan == "STARTER"){
                return planCosts = 45*lines
            }
            if(lines == 5 && plan == "STARTER"){
                return planCosts = 40*lines
            }
            if(lines >= 6 && plan == "STARTER"){
                return planCosts = 40*lines
            }
        }



        function calculate(){    
            plan = document.getElementById("planInput").value
            lines = document.getElementById("linesInput").value
            currentDate = document.getElementById("dayInput").value
            plan = plan.toUpperCase()


            if(document.querySelector("#signature").checked){
                if(plan == "ELITE"){
                    plan = "EXTRA"
                }
            }

            prorations = proration(currentDate)
            planCosts = planCost(plan,lines)
            if(document.querySelector("#twentyFivePercent").checked){
                planCosts = planCosts*.75
            }

            if(document.querySelector("#autopayPaperless").checked){
                planCosts = planCosts - (lines*10)
            }

            totalProrations = prorations*planCosts

            if(totalProrations < 0 ){
                totalProrations = totalProrations*(-1)
            }
            totalProrations = totalProrations.toFixed()
            document.getElementById("outputLabel").innerHTML = "Your total prorations are: $" + totalProrations


        }