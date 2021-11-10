/*<!--Js for toggle menu-->*/
    let menuItems=document.getElementById("menuItems");
    menuItems.style.maxHeight="0px"
    function menutoggle(){
        if(menuItems.style.maxHeight=="0px"){
            menuItems.style.maxHeight="400px"
            
        }
        else{
            menuItems.style.maxHeight="0px"
        }
    }
     /*----js for toggle form*/
    let loginForm=document.getElementById("login-form")
let regForm=document.getElementById("reg-form")
let indicator=document.getElementById("indicator")

function register(){
    regForm.style.transform="translateX(0px)"
    loginForm.style.transform="translateX(0px)"
    indicator.style.transform="translateX(100px)"
    
}
function login(){
   
    regForm.style.transform="translateX(300px)"
    loginForm.style.transform="translateX(300px)"
    indicator.style.transform="translateX(0px)"
}
    /*product gallery*/
    
    function myFunction(imgs) {
        let expandImg = document.getElementById("expandedImg");
        expandImg.src = imgs.src;
        expandImg.parentElement.style.display = "block";
      }