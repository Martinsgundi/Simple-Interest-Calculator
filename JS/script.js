
// This opens the search box when the search icon is clicked
document.getElementById('open-search-box').addEventListener('click', () => {

    navBrandName.style.display = 'none';  
    searchContainer.classList.add("open-search-box");

    document.getElementById('open-search-box').style.display = 'none';

    setTimeout(() => {
        document.getElementById('close-search-box').style.display = 'block';
    }, 400);
    
    menuIcon.style.display = 'none'; // Menu icon dissapears
});

const menuIcon = document.getElementById('open');
const navBrandName = document.querySelector('.brand-name');
const searchContainer = document.querySelector('.search-container');

// This closes the search box when the x icon is clicked
document.getElementById('close-search-box').addEventListener('click', () => {

    searchContainer.classList.remove("open-search-box");

    setTimeout(() => {
        navBrandName.style.display = 'block';
        document.getElementById('close-search-box').style.display = 'none';
        document.getElementById('open-search-box').style.display = 'block';
        menuIcon.style.display = 'block'; // Menu icon appears back
    }, 400); // The brand name & Icons shows after the search-box leaves the viewport
});



// This makes the side bar show when the open-menu icon is clicked.
const openSideBar = () => {

    navSideBar.classList.add("open-side-links")
    openIcon.style.display = 'none'
    closeIcon.style.display = 'block'

    document.getElementById('open-search-box').style.display = 'none'

    // This adds opacity to the elements with class="content"
    for (let i = 0; i < changeColorElements.length; i++) {
        changeColorElements[i].style.opacity = ".60";  
    };
    
    // This makes the viewport unscrollable
    body.style.overflow = "hidden"
    navSideBar.style.overflow = "hidden"
};

const navSideBar = document.querySelector (".nav-side-links")
const changeColorElements = document.getElementsByClassName ("content")
const body = document.body
const openIcon = document.getElementById ('open')
const closeIcon = document.getElementById ('close')

// This makes the side bar disappear when the close-menu icon is clicked.
const closeTheSideBar = () => {

    navSideBar.classList.remove("open-side-links")
    openIcon.style.display = 'block'
    closeIcon.style.display = 'none'

    document.getElementById('open-search-box').style.display = 'block'

    // This removes opacity from the elements with class="content"
    for (let i = 0; i < changeColorElements.length; i++) {
        changeColorElements[i].style.opacity = "1";  
    };

    // This makes the viewport scrollable
    body.style.overflow = "auto"
    navSideBar.style.overflow = "auto"
};


 
// In the nav-sidebar when the More link is clicked, it displays the secondary links
document.getElementById('more').addEventListener('click', () => {

    linkList.style.display = 'none'
    linkSocial.style.display = 'none'

    document.querySelector('.more-links').style.display = 'block'
});

const linkList = document.getElementById('side-link-list')
const linkSocial = document.querySelector('.side-links-socials')


// Navsidebar primary-links and socials shows when the left arrow icon is clicked
document.getElementById('close-more-links').addEventListener("click", () => {

    document.querySelector('.more-links').style.display = 'none'
            
    linkList.style.display = 'block'

    if (window.innerWidth > 475 && window.innerWidth < 1151) {
        linkSocial.style.display = 'flex'
    } else {
        linkSocial.style.display = 'block'
    }
});



//created a new IntersectionObserver object to observe an element
let observer = new IntersectionObserver (function (entries) {
 
    for (const entry of entries) {

        // The fixed linkholder appears when the block links element leaves the viewport 
        if (!entry.isIntersecting) {

            linkHolder.style.display = "block"

        } 
        
        // This does the opposite
        else {
            linkHolder.style.display = "none"
            fixedLinks.style.display = "none"  // The fixed links element disappears
            arrowIcon.style.transform = "none" // The arrow icon returns to it's default position
        }
    }
});    

// element to observe
let blockLinks = document.querySelector(".block-side-bar")

// Observing the .block-side-bar element
observer.observe(blockLinks);



// When the #fixedlink element is clicked it opens/close the quick-links element
window.onload = () => {

    linkHolder.addEventListener('click', () => {

        const computedStyle = window.getComputedStyle(fixedLinks)
        
        if (computedStyle.display === "none") {
            
            fixedLinks.style.display = "block"
            arrowIcon.style.transform = "rotate(180deg)"

        } 
        
        else {
            fixedLinks.style.display = "none"
            arrowIcon.style.transform = "none"
        }
    });
};

const linkHolder = document.querySelector ("#link-holder")
const fixedLinks = document.querySelector ("#fixed-links")

const arrowIcon = document.querySelector ('.fa-angle-down')

// When one of the quick-link is clicked it closes the quick-links element 
const removeLinks = () => {
    
    if (fixedLinks.style.display === "block") {
        
        fixedLinks.style.display = "none"
        arrowIcon.style.transform = "none"

    } 
}; 



// Calculator
const principalAmountInputField = document.getElementById('principal');
const calculateButton = document.getElementById('btn');
const displayResult = document.getElementById('show-result');


principalAmountInputField.addEventListener('input', () => {

    const value = principalAmountInputField.value.replace(/,/g, ''); // Remove existing commas

    // Adds comma as the user types inside the principalAmount input field
    if (isValidNumber(value)) {
        const formattedValue = addCommasToNumber(value);
        principalAmountInputField.value = formattedValue;
    }
});


calculateButton.addEventListener('click', () => {

    // This removes the comma in the principal input field(changes it from string back to number)
    principalAmountInputField.value = principalAmountInputField.value.replace(/,/g, ''); // Important!

    // Gets the value of the user input
    const principal = Number(document.getElementById('principal').value);
    const rate = Number(document.getElementById('rate').value);
    const period = Number(document.getElementById('period').value);
    const currency = document.getElementById('currency-select').value;
    const percentRatePeriod = document.getElementById('percent-period').value;
    const periodType = document.getElementById('period-type').value;

    calculateSimpleInterest(principal, rate, period, percentRatePeriod, periodType, currency);
});

function isValidNumber(value) {
    return /^\d*\.?\d+$/.test(value); // RegEx to validate a number
}

function addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Adds comma to the numbers
}

// This handles the calculations and displays the result
function calculateSimpleInterest(principal, rate, period, percentRatePeriod, periodType, currency) {

    // Get the values of time periods and time rates 
    const yearly = document.getElementById ('yearly').value;
    const years = document.getElementById ('years').value;
    
    const monthly = document.getElementById ('monthly').value;
    const months = document.getElementById ('months').value;

    const weekly = document.getElementById ('weekly').value;
    const weeks = document.getElementById ('weeks').value;

    const daily = document.getElementById ('daily').value;
    const days = document.getElementById ('days').value;

    // Calculation formulas
    const calcSi = principal * (rate / 100) * period;
    const finalBalance = principal + calcSi;
  
    const monthlyInterestPerYear = calcSi / period / 12;
    const monthlyInterestPerMonth = calcSi / period;
  
    const dailyInterestPerWeek = calcSi / period / 7;
    const dailyInterestPerDay = calcSi / period;

    // Conditions given for the display of result
    if (percentRatePeriod === yearly && periodType === years) {

        displayResult.innerHTML = `

        <div class="result-header">
          Simple Interest Projection  
        </div>
  
        <div class="result-wrapper">
          <div class="left-result">
            <span class="value-header"> Final Balance </span> </br>
            <span class="final-bal"> ${currency}${addCommasToNumber(finalBalance.toFixed(2))} </span> </br></br>
            
            <span class="value-header"> Interest Accrued </span> </br>
            <span class="interest-acc"> ${currency}${addCommasToNumber(calcSi.toFixed(2))} </span> </br></br> 
          </div>
  
          <div class="right-result">
            <span class="value-header"> Initial Balance </span> </br>
            <span class="value"> ${currency}${addCommasToNumber(principal.toFixed(2))} </span> </br></br>
            
            <span class="value-header"> Monthly Interest </span> </br>
            <span class="value"> ${currency}${addCommasToNumber(monthlyInterestPerYear.toFixed(2))} </span>
          </div>
        </div>    
      `;
    }
  

    if (percentRatePeriod === monthly && periodType === months) {

        displayResult.innerHTML = `
    
        <div class= "result-header">
            Simple Interest Projection  
        </div>
        
        <div class= "result-wrapper">
            <div class= "left-result">
            <span class= "value-header"> Final Balance </span> </br>
            <span class= "final-bal"> ${currency}${addCommasToNumber(finalBalance.toFixed(2))} </span> </br></br>    
            
            <span class= "value-header"> Interest Accrued </span> </br>
            <span class= "interest-acc"> ${currency}${addCommasToNumber(calcSi.toFixed(2))} </span> </br></br> 
            </div>

            <div class= "right-result">
            <span class= "value-header"> Initial Balance </span> </br>
            <span class= "value"> ${currency}${addCommasToNumber(principal.toFixed(2))} </span> </br></br>    
            
            <span class= "value-header"> Monthly Interest </span> </br>
            <span class= "value"> ${currency}${addCommasToNumber(monthlyInterestPerMonth.toFixed(2))} </span> 
            </div>
        </div>    
        `;
    }


    if (percentRatePeriod === weekly && periodType === weeks) {

        displayResult.innerHTML = `
    
        <div class= "result-header">
            Simple Interest Projection  
        </div>

        <div class= "result-wrapper">
            <div class= "left-result">
            <span class= "value-header"> Final Balance </span> </br>
            <span class= "final-bal"> ${currency}${addCommasToNumber(finalBalance.toFixed(2))} </span> </br></br>    
            
            <span class= "value-header"> Interest Accrued </span> </br>
            <span class= "interest-acc"> ${currency}${addCommasToNumber(calcSi.toFixed(2))} </span> </br></br> 
            </div>

            <div class= "right-result">
            <span class= "value-header"> Initial Balance </span> </br>
            <span class= "value"> ${currency}${addCommasToNumber(principal.toFixed(2))} </span> </br></br>    
            
            <span class= "value-header"> Daily Interest </span> </br>
            <span class= "value"> ${currency}${addCommasToNumber(dailyInterestPerWeek.toFixed(2))} </span> 
            </div>
        </div>    
        `;
    }


    if (percentRatePeriod === daily && periodType === days) {

        displayResult.innerHTML = `
    
        <div class= "result-header">
            Simple Interest Projection  
        </div>


        <div class= "result-wrapper">
            <div class= "left-result">
            <span class= "value-header"> Final Balance </span> </br>
            <span class= "final-bal"> ${currency}${addCommasToNumber(finalBalance.toFixed(2))} </span> </br></br>    
            
            <span class= "value-header"> Interest Accrued </span> </br>
            <span class= "interest-acc"> ${currency}${addCommasToNumber(calcSi.toFixed(2))} </span> </br></br> 
            </div>

            <div class= "right-result">
            <span class= "value-header"> Initial Balance </span> </br>
            <span class= "value"> ${currency}${addCommasToNumber(principal.toFixed(2))} </span> </br></br>    
            
            <span class= "value-header"> Daily Interest </span> </br>
            <span class= "value"> ${currency}${addCommasToNumber(dailyInterestPerDay.toFixed(2))} </span> 
            </div>
        </div>    
        `;
    }


    // Checks if the time rate and time period are compatible
    if ((percentRatePeriod === yearly && periodType !== years) ||
        (percentRatePeriod === monthly && periodType !== months) ||
        (percentRatePeriod === weekly && periodType !== weeks) ||
        (percentRatePeriod === daily && periodType !== days)
    )
    { // If not, error message is displayed
        displayResult.innerHTML = `

        <div class= "error">
            <h2> Please Ensure your interest rate (r) and time period (t) are in the same time units! </h2>
            <p> For example, if you select an interest rate that is to be calculated anually(yearly), it is expected
            that you select "years" after inputing your time period. </p> 
            <span>The same applies to monthly, weekly and daily interest rate selections. </span>
        </div>
       `;
    }  

};



// This handles linking of the site 
const scrollToElement = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
        const elementRect = targetElement.getBoundingClientRect();
        const offsetTop = elementRect.top + document.documentElement.scrollTop || document.body.scrollTop
        const headerHeight = 140; // Added extra pixels, to give space btw the header and the element
        const targetPosition = offsetTop - headerHeight;
        window.scrollTo({top: targetPosition, behavior: 'smooth'});
    }
};

const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');

// Listening to links with class 'smooth-scroll'
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', scrollToElement);
});