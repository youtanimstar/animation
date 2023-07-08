// ============================
// TITLE : Animation selector
// DESCRIPTION: this js file is used to select the animation in the box
// Author: Deep Das
// Date: 8 /7/2023
// ============================

// classes array
const classes = ["slide-left-class", "slide-right-class", "slide-top-class", "slide-bottom-class", "scale-up-class", "scale-down-class", "rotate-class", "rotate-anti-class"];
let i;


// adding the options in the options section
const addOptions = ()=>{
    for(i=0;i<classes.length;i++)
    {
        const optionClass = document.createElement('div');
        optionClass.classList.add('option');
        const string = classes[i];
        const trimmedString1 = string.replace('-class', '')
        const trimmedString2 = trimmedString1.replace('-', " ");
        const htmlData = `<p class="option-text">${trimmedString2}</p><div class="option-hover"></div>` 
        optionClass.insertAdjacentHTML('afterbegin', htmlData);
        document.querySelector('.option-section').append(optionClass);
    }
}

addOptions();

// declaration section
const option = document.querySelectorAll(".option");
const optionText = document.querySelectorAll('.option-text');
const box = document.querySelector(".box");

// Animation selector
option.forEach((item, index) => {
    let i;
    const num = index;
    
  item.addEventListener("click", () => {
    
    for(i=0;i<classes.length;i++)
    {   
      box.classList.remove(classes[i]);
      
    }
    box.classList.add(classes[index]);

    for(i=0;i<classes.length;i++)
    {
        option[i].classList.remove('active');
        
    }
    item.classList.add('active');
    
  });
});
