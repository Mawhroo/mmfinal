









 //shop 
let mainmenu1 = document.querySelector("img.shop")
     let openshop=document.querySelector("div.openshop")
     let flag1=true
      mainmenu1.addEventListener("click",function(){
          if (flag1 === true)
          {
              openshop.style.display = "flex"
             celebrate.style.display = "none"
            explore.style.display = "none"
            business.style.display="none"
              
      flag1=false}
       else{
        openshop.style.display = "none"
    
      flag1=true
      }
      })
    //   mainmenu1.addEventListener("mouseleave",function(){
    //     if (flag1 === true)
    //     {
    //         openshop.style.display = "flex"
            
    // flag1=false}
    //  else{
    //   openshop.style.display="none"
    // flag1=true
    // }
    // })
      
    //celebrate
      let mainmenu2=document.querySelector("img.celebrate")
      let celebrate=document.querySelector("div.opencelebrate")
      let flag2=true
       mainmenu2.addEventListener("click",function(){
           if (flag2 === true)
           {
            openshop.style.display = "none"
            celebrate.style.display = "flex"
            explore.style.display = "none"
            business.style.display="none"
               
       flag2=false}
        else{
           
            celebrate.style.display = "none"
           
       flag2=true
       }
       })
    //    mainmenu2.addEventListener("mouseleave",function(){
    //     if (flag2 === true)
    //     {
    //      celebrate.style.display = "flex"
            
    // flag2=false}
    //  else{
    //      celebrate.style.display="none"
    // flag2=true
    // }
    //   })
 
      
    //explore
    let mainmenu3=document.querySelector("img.explore")
    let explore=document.querySelector("div.openexplore")
    let flag3=true
     mainmenu3.addEventListener("click",function(){
         if (flag3 === true)
         {
            openshop.style.display = "none"
            celebrate.style.display = "none"
            explore.style.display = "flex"
            business.style.display="none"
             
     flag3=false}
      else{
          
             explore.style.display = "none"
            
     flag3=true
     }
     })
//      mainmenu3.addEventListener("mouseleave",function(){
//       if (flag3 === true)
//       {
//         explore.style.display = "flex"
          
//   flag3=false}
//    else{
//     explore.style.display="none"
//   flag3=true
//   }
//      })  
    
     
    //business
    let mainmenu4=document.querySelector("img.business")
    let business=document.querySelector("div.openbusiness")
    let flag4=true
     mainmenu4.addEventListener("click",function(){
         if (flag4 === true)
         {
            openshop.style.display = "none"
            celebrate.style.display = "none"
            explore.style.display = "none"
            business.style.display="flex"
             
     flag4=false}
      else{
 
        business.style.display="none"
     flag4=true
     }
     })
//      mainmenu4.addEventListener("mouseleave",function(){
//       if (flag4 === true)
//       {
//         business.style.display = "flex"
          
//   flag4=false}
//    else{
//     business.style.display="none"
//   flag4=true
//   }
//     })      

// $("img.shop").on("click", function () {

//     $("div.openshop").fadeToggle(300)
//     $("div.openshop").css({
//          "display":"flex"      
//     })

// })

// $("img.celebrate").on("click", function () {

//     $("div.opencelebrate").fadeToggle(300)

//     $("div.opencelebrate").css({
//          "display":"flex"      
//     })

// })

// $("img.explore").on("click", function () {

//     $("div.openexplore").fadeToggle(300)
//     $("div.openexplore").css({
//          "display":"flex"      
//     })

// })

export default mainmenu1

