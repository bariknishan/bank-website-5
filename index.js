// console.log("hi");

document.getElementById("calculate-btn").addEventListener("click", function input() {

    // income field 

    const incomeInput = document.getElementById("income-input");
    const incomeInputText = incomeInput.value;
    const newIncomeAmount = parseInt(incomeInputText);

    // balance 
        const balanceAmount = document.getElementById("income-balance");
        const previousInputText = balanceAmount.innerText;
        const previousIncomeAmount = parseInt(previousInputText);
        const total = previousIncomeAmount + newIncomeAmount;
        balanceAmount.innerText = newIncomeAmount;


    // balance field 

    // food area
    const foodCostInput = document.getElementById("food-input");
    const foodCostInputText = foodCostInput.value;
    const newFoodCostAmount = parseInt(foodCostInputText);

    const expanseAmount = document.getElementById("total-expanse");
    const previousFoodText = expanseAmount.innerText;
    const previousFoodAmount = parseInt(previousFoodText);
    const newTotal = newFoodCostAmount + previousFoodAmount;
    expanseAmount.innerText = newFoodCostAmount;

    //    rent area 
    const rentCostInput = document.getElementById("rent-input");
    const rentCostInputText = rentCostInput.value;
    const newRentCostAmount = parseInt(rentCostInputText);

      
    const NewExpanseAmount = document.getElementById("total-expanse");
    const previousRentText = NewExpanseAmount.innerText;
    const previousRentAmount = parseInt(previousRentText);
    const newTotalAmount = newRentCostAmount + newFoodCostAmount;
    NewExpanseAmount.innerText = newTotalAmount;

    // clothes area

    const clothCostInput = document.getElementById("clothes-input");
    const clothCostInputText = clothCostInput.value;
    const newClothCostAmount = parseInt(clothCostInputText);

    //update total Expanses
    const TotalExpanseAmount = document.getElementById("total-expanse");
    const previousClothText = TotalExpanseAmount.innerText;
    const previousClothAmount = parseInt(previousClothText);
    const totalExpenses = newTotalAmount + newClothCostAmount;
    TotalExpanseAmount.innerText = totalExpenses;

    // final balance after expanses 

    const Finalbalance = document.getElementById("income-balance");
    const FinalbalanceText = Finalbalance.innerText;
    const FinalbalanceAmount = parseInt(FinalbalanceText);
    const totalFinalbalance = total - totalExpenses;
    Finalbalance.innerText = totalFinalbalance;

});


document.getElementById("save-btn").addEventListener("click", function () {


    const saveInput = document.getElementById("percentage-input")
    const saveInputText = saveInput.value;
    const saveAmount = parseInt(saveInputText);

    const savingAmount = document.getElementById("income-input");
    /// saving by input
    const newIncomeTotalText = savingAmount.value;
    const IncomeAmount = parseInt(newIncomeTotalText);
    const newTotalAmount = IncomeAmount + saveAmount;
    savingAmount.value = IncomeAmount;

    const newSave = document.getElementById("saving-balance")
    const prevoiusSave = newSave.innerText;
    const previuosSaveAmount = parseInt(prevoiusSave);
    const totalSave = IncomeAmount * saveAmount / 100;
    newSave.innerText = totalSave;

 //  remaining balance field 

    const incomeBalance = document.getElementById("income-balance");
    const incomeBalanceText = incomeBalance.innerText;
    const newIncomeBalance = parseInt(incomeBalanceText);

    const remainBalance = document.getElementById("remaining-balance");
    const remainBalanceText = remainBalance.innerText;
    const remainBalanceAmount = parseInt(remainBalanceText);
    const totalRemainBalance = newIncomeBalance - totalSave;
    remainBalance.innerText = totalRemainBalance;

});




