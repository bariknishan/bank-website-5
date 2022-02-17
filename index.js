// console.log("hi");

document.getElementById("calculate-btn" ).addEventListener("click" , function input () {
    console.log("1000");

    // income field 

    const incomeInput= document.getElementById("income-input");
    const incomeInputText= incomeInput.value;
    const newIncomeAmount= parseFloat(incomeInputText);
    // balance field 
     const balanceAmount= document.getElementById("income-balance");
    const previousInputText= balanceAmount.innerText;
    const previousIncomeAmount= parseFloat(previousInputText);
    const total=  previousIncomeAmount+ newIncomeAmount;
    balanceAmount.innerText= newIncomeAmount;
  
// 
    // incomeInput.value= "";
    
     // food area
     const foodCostInput= document.getElementById("food-input");
     const foodCostInputText= foodCostInput.value;
     const newFoodCostAmount= parseFloat(foodCostInputText);
 
     const expanseAmount= document.getElementById("total-expanse");
     const previousFoodText= expanseAmount.innerText;
     const previousFoodAmount= parseFloat(previousFoodText);
     const newTotal =   newFoodCostAmount + previousFoodAmount;
     expanseAmount.innerText=  newFoodCostAmount;
 
 //    rent area 
     const rentCostInput= document.getElementById("rent-input");
     const rentCostInputText= rentCostInput.value;
     const newRentCostAmount= parseFloat(rentCostInputText);
 
 
     const NewExpanseAmount= document.getElementById("total-expanse");
     const previousRentText= NewExpanseAmount.innerText;
     const previousRentAmount= parseFloat(previousRentText);
     const newTotalAmount =   newRentCostAmount + newFoodCostAmount;
     NewExpanseAmount.innerText= newTotalAmount;
 
     // clothes area
 
     const clothCostInput= document.getElementById("clothes-input");
     const clothCostInputText= clothCostInput.value;
     const newClothCostAmount= parseFloat(clothCostInputText);
 
   //update Balance
     const TotalExpanseAmount= document.getElementById("total-expanse");
     const previousClothText= TotalExpanseAmount.innerText;
     const previousClothAmount= parseFloat(previousClothText);
     const totalExpenses =  newTotalAmount + newClothCostAmount;
     TotalExpanseAmount.innerText= totalExpenses;

// final balance after expanses 

    const Finalbalance= document.getElementById("income-balance");
    const FinalbalanceText= Finalbalance.innerText;
    const FinalbalanceAmount= parseFloat (FinalbalanceText);
    const totalFinalbalance= total- totalExpenses;
    Finalbalance.innerText= totalFinalbalance;

}) ;


document.getElementById("save-btn").addEventListener("click", function () {
    // console.log("clicked");

    const saveInput= document.getElementById("percentage-input")
    const saveInputText= saveInput.value;
    const saveAmount= parseFloat(saveInputText);
   
    const savingAmount= document.getElementById("income-input");
    /// saving by input
    const newIncomeTotalText= savingAmount.value;
    const IncomeAmount= parseFloat(newIncomeTotalText);
    const newTotalAmount= IncomeAmount + saveAmount;
    savingAmount.value= IncomeAmount;

    const newSave = document.getElementById("saving-balance")
    const prevoiusSave= newSave.innerText;
    const previuosSaveAmount= parseFloat(prevoiusSave);
    const totalSave=  IncomeAmount * saveAmount / 100;
    newSave.innerText= totalSave;

    //  remaining balance field 
  
  const incomeBalance=  document.getElementById("income-balance");
  const incomeBalanceText= incomeBalance.innerText;
  const newIncomeBalance= parseFloat(incomeBalanceText);

 const remainBalance= document.getElementById("remaining-balance");
 const remainBalanceText= remainBalance.innerText;
 const remainBalanceAmount= parseFloat(remainBalanceText);
 const totalr= newIncomeBalance - totalSave;
 remainBalance.innerText= totalr;

    








});
    
   


