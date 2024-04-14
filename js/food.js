function getDietloss() {
    const weightloss = document.getElementById("description");


    weightloss.innerText = `
    14 Healthy Breakfast Foods That Help You Lose Weight
    
    1.Eggs
           2.Wheat germ
    3.Bananas
    4.Yogurt
    5.Smoothies
    6.Berries
    7.Grapefruits
    8.Coffee
    9.Kiwis
    10.Green Tea
    11.Chia Seeds
    12.Oatmeal
    13.Flaxseeds
    14.Nuts`
    weightloss.style.background = "lightyellow";
    weightloss.style.textAlign = "center";
    weightloss.style.borderRadius = "20px";
    weightloss.style.fontSize = "15px"

    document.getElementById("wl").style.background = "lightyellow"
    document.getElementById("wg").style.background = "yellow"
    document.getElementById("mg").style.background = "yellow"


}

function getDietgain() {
    const weightgain = document.getElementById("description");
    weightgain.innerText = `
        A healthy breakfast for weight gain must offer anywhere between 200-300 calories per serving, which may vary with factors like body weight and metabolism.

        1. Avocado and egg sandwich
        2. Sabudana cutlets:
        3. Banana pancakes with fruits
        4. Cheese omelette
        5. Granola with Greek Yoghurt
        6. Banana shake
        7. Peanut Butter smoothie
        9. Oatmeal Porridge
        10. Potato Sandwich

        `
    weightgain.style.background = "lightgreen"
    document.getElementById("wg").style.background = "lightgreen"
    document.getElementById("wl").style.background = "yellow"
    document.getElementById("mg").style.background = "yellow"
}


function getDietfit() {
    const fit = document.getElementById("description");
    fit.style.background = "lightpink"
    fit.innerText = `10 Best High Protein Breakfasts for Muscle Growth
    
    1. Avocado Toast With Cottage Cheese
    2. Hard-Boiled Eggs and Ezekiel Bread
    3. Oatmeal With Berries
    4. Scrambled Eggs With Veggies
    5. Banana Pancakes
    6. Protein Oatmeal
    9. Southwest Tofu Scramble
    10. Chicken Omelette`



    document.getElementById("wg").style.background = "yellow"
    document.getElementById("wl").style.background = "yellow"
    document.getElementById("mg").style.background = "lightpink"



}

function getDietlunch1() {

    const weightloss = document.getElementById("description2");

    weightloss.innerText = ` A good lunch keeps your metabolism going strong, which in turn results in better, healthier body systems overall.
    
    1. Greek Quinoa Salad
    2. Instant Pot Pakistani Chana Dal
    3. Kale And Brussels Sprout Salad
    4. Creamy Carrot-Tomato Soup
    5. Egg Roll In A Bowl
    6. Low-Carb Vegan Tuna Salad
    7. Peanut Crunch Salad
`
    weightloss.style.background = "lightyellow";
    weightloss.style.textAlign = "center";
    weightloss.style.borderRadius = "20px";
    weightloss.style.fontSize = "15px"

    document.getElementById("losslunch").style.background = "lightyellow";
    document.getElementById("Gainluch").style.background = "yellow"
    document.getElementById("musclelunch").style.background = "yellow"

}



function getDietlunch2() {

    const weightgain = document.getElementById("description2");
    weightgain.innerText = `Foods That Help in Gaining Weight

    1: Milk
    2: Rice
    3: Dried fruits
    4: Homemade Protein Smoothies 
    5: Red Meat 
    6: Fatty and Oily Fish 
    7: Potatoes and Starch 
    8: Whole Grain Bread 
    9.cheese
    10.chapati
    11.chicken curry
`
    weightgain.style.background = "lightgreen"

    document.getElementById("losslunch").style.background = "yellow";
    document.getElementById("Gainluch").style.background = "lightgreen"
    document.getElementById("musclelunch").style.background = "yellow"

}




function getDietlunch3() {

    const fit = document.getElementById("description2");
    fit.innerText = `Muscle building foods for gaining lean muscle

    1.Eggs.
    2.Chicken breast.
    3.Greek yogurt. 
    4.Tuna.
    5.Lean beef.
    6.Shrimp
    7.Soybeans
    8.Cottage cheese.

    `


    fit.style.background = "lightpink";


    document.getElementById("losslunch").style.background = "yellow";
    document.getElementById("Gainluch").style.background = "yellow"
    document.getElementById("musclelunch").style.background = "lightpink"
}