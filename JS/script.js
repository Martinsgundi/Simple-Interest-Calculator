const calculateSi = ()=> {
    
    const principal = Number(document.getElementById ('principal').value);
    const rate = Number(document.getElementById ('rate').value);
    const period = Number(document.getElementById ('period').value);
    const displayResult = document.getElementById ('show-result');

    const currency = document.getElementById ('currency').value;

    const percentRatePeriod = document.getElementById ('percent-period').value;
    const periodType = document.getElementById ('period-type').value;

    
    const yearly = document.getElementById ('yearly').value;
    const years = document.getElementById ('years').value;
    
    const monthly = document.getElementById ('monthly').value;
    const months = document.getElementById ('months').value;

    const weekly = document.getElementById ('weekly').value;
    const weeks = document.getElementById ('weeks').value;

    const daily = document.getElementById ('daily').value;
    const days = document.getElementById ('days').value;


    const calcSi = (principal * rate/100 * period);

    const finalBalance = (principal + calcSi);

    const monthlyInterestPerYear = (calcSi / period / 12);
    const monthlyInterestPerMonth = (calcSi / period);
   
    const dailyInterestPerWeek = (calcSi / period / 7);
    const dailyInterestPerDay = (calcSi / period);


    if (percentRatePeriod === yearly && periodType === years) {

        displayResult.innerHTML = `
    
        <div class= "result-header">
            Simple Interest Projection  
        </div>

        <div class= "result-wrapper">
            <div class= "left-result">
            <span class= "value-header"> Final Balance </span> </br>
            <span class= "final-bal"> ${currency}${finalBalance.toFixed(2)} </span> </br></br>    
            
            <span class= "value-header"> Interest Accrued </span> </br>
            <span class= "interest-acc"> ${currency}${calcSi.toFixed(2)} </span> </br></br> 
            </div>

            <div class= "right-result">
            <span class= "value-header"> Initial Balance </span> </br>
            <span class= "value"> ${currency}${principal.toFixed(2)} </span> </br></br>    
            
            <span class= "value-header"> Monthly Interest </span> </br>
            <span class= "value"> ${currency}${monthlyInterestPerYear.toFixed(2)} </span> 
            </div>
        </div>    
        `
    } 
    
    if (percentRatePeriod === monthly && periodType === months) {

        displayResult.innerHTML = `
    
        <div class= "result-header">
            Simple Interest Projection  
        </div>
        
        <div class= "result-wrapper">
            <div class= "left-result">
            <span class= "value-header"> Final Balance </span> </br>
            <span class= "final-bal"> ${currency}${finalBalance.toFixed(2)} </span> </br></br>    
            
            <span class= "value-header"> Interest Accrued </span> </br>
            <span class= "interest-acc"> ${currency}${calcSi.toFixed(2)} </span> </br></br> 
            </div>

            <div class= "right-result">
            <span class= "value-header"> Initial Balance </span> </br>
            <span class= "value"> ${currency}${principal.toFixed(2)} </span> </br></br>    
            
            <span class= "value-header"> Monthly Interest </span> </br>
            <span class= "value"> ${currency}${monthlyInterestPerMonth.toFixed(2)} </span> 
            </div>
        </div>    
        `

    }

    if (percentRatePeriod === weekly && periodType === weeks) {

        displayResult.innerHTML = `
    
        <div class= "result-header">
            Simple Interest Projection  
        </div>

        <div class= "result-wrapper">
            <div class= "left-result">
            <span class= "value-header"> Final Balance </span> </br>
            <span class= "final-bal"> ${currency}${finalBalance.toFixed(2)} </span> </br></br>    
            
            <span class= "value-header"> Interest Accrued </span> </br>
            <span class= "interest-acc"> ${currency}${calcSi.toFixed(2)} </span> </br></br> 
            </div>

            <div class= "right-result">
            <span class= "value-header"> Initial Balance </span> </br>
            <span class= "value"> ${currency}${principal.toFixed(2)} </span> </br></br>    
            
            <span class= "value-header"> Daily Interest </span> </br>
            <span class= "value"> ${currency}${dailyInterestPerWeek.toFixed(2)} </span> 
            </div>
        </div>    
        `

    }
    
    if (percentRatePeriod === daily && periodType === days) {

        displayResult.innerHTML = `
    
        <div class= "result-header">
            Simple Interest Projection  
        </div>


        <div class= "result-wrapper">
            <div class= "left-result">
            <span class= "value-header"> Final Balance </span> </br>
            <span class= "final-bal"> ${currency}${finalBalance.toFixed(2)} </span> </br></br>    
            
            <span class= "value-header"> Interest Accrued </span> </br>
            <span class= "interest-acc"> ${currency}${calcSi.toFixed(2)} </span> </br></br> 
            </div>

            <div class= "right-result">
            <span class= "value-header"> Initial Balance </span> </br>
            <span class= "value"> ${currency}${principal.toFixed(2)} </span> </br></br>    
            
            <span class= "value-header"> Daily Interest </span> </br>
            <span class= "value"> ${currency}${dailyInterestPerDay.toFixed(2)} </span> 
            </div>
        </div>    
        `
    }

    // HAHAHAHA I KNOW IT'S NOT THE CLEANEST OF CODES, BUT FOR THE MAIN TIME TILL I FIGURE OUT A CLEANER METHOD.
    if (percentRatePeriod === yearly && periodType === months || percentRatePeriod === monthly && periodType === years
        || percentRatePeriod === weekly && periodType === days || percentRatePeriod === daily && periodType === weeks
        ||  percentRatePeriod === yearly && periodType === weeks || percentRatePeriod === monthly && periodType === weeks
        || percentRatePeriod === weekly && periodType === years || percentRatePeriod === daily && periodType === months
        ||  percentRatePeriod === yearly && periodType === days || percentRatePeriod === daily && periodType === yearly
        || percentRatePeriod === monthly && periodType === weeks || percentRatePeriod === monthly && periodType === days
        || percentRatePeriod === weekly && periodType === months || percentRatePeriod === daily && periodType === years)
        { 

        displayResult.innerHTML = `

        <div class= "error">
            <h2> Please Ensure your interest rate (r) and time period (t) are in the same time units! </h2>
            <p> For example, if you select an interest rate that is to be calculated anually(yearly), it is expected
            that you select "years" after inputing your time period. </p> 
            <span>The same applies to monthly, weekly and daily interest rate selections. </span>
        </div>
       `
    }
      
};


// This makes the side bar show and disappear when the button is clicked on mobile.
const openSideBar = () => {
    const openOnClick = document.getElementById ("side-links")
    const changeColor = document.getElementsByClassName ("content")
    const body = document.body



    if (openOnClick.style.display === "none") {
        
        openOnClick.style.display = "block"

        // This adds opacity to the elements with class="content"
        for (let i = 0; i < changeColor.length; i++) {
            changeColor[i].style.opacity = ".60";  
        };
        
        // This makes the body unscrollable
        body.style.overflow = "hidden"

    }

    else {
        openOnClick.style.display = "none"

        // This removes opacity from the elements with class="content"
        for (let i = 0; i < changeColor.length; i++) {
            changeColor[i].style.opacity = "1";  
        };

        // This makes the body scrollable
        body.style.overflow = "auto"
    }
} 



// const blockSidebarLinks = document.getElementById ("blocklinks")
// const fixedSidebarLinks = document.getElementById ("fixedlinks")
// const blockHeight = blockSidebarLinks.offsetTop

// window.onscroll = () => {


//     if (window.pageXOffset >= blockHeight ) {
        
//         fixedSidebarLinks.style.display = "flex"

//     } else {
//         fixedSidebarLinks.style.display = "none"
//     }
// };


