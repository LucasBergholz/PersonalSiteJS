function scrollIntoDiv(variable){
    document.getElementById(variable).scrollIntoView({behavior:"smooth"});
} 

function lightModeOption(){
    var element = document.getElementById("cssMode")
    var mode = element.getAttribute("href");

        if(mode == "/Css/index.css"){
            element.setAttribute("href",
            "/Css/lightMode.css");
        } else {
            element.setAttribute("href",
            "/Css/index.css");
        }
            
}