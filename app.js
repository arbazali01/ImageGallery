var div1=document.createElement("div");
div1.id="div"+i
div1.style=`flex-basis:1000px;
      background-color: transparent;
      border: thistle;
      border-radius: 1%;
      border-color: black;
      border-style: solid;
      margin:100px;
      height: 500px;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;

      background-position: center;
background-repeat: no-repeat;
background-size: cover;`;
div1.style.backgroundImage="url(image"+i+".png";
 var div2=document.createElement("div");
 div2.id="div1-div2";
 var button = document.createElement("button");
 button.innerText="logo";
 button.id="b"
 button.style="color:white;visibility:hidden";
 button.innerHTML=`<i class="fas fa-search fa-2x"></i>`;
 var button1 = document.createElement("button");
 button1.innerHTML=`<i  class="fas fa-download fa-2x"></i>`;
 button1.id="b1"+i;
 button1.style= "border-radius:100%;color:white;visibility:hidden";
 button.onclick=(event)=>
 {
     console.log("scale")
   console.log(event.path);
    var div_transform=event.path[3];
    div_transform.style.transform="scale(1.2)"
   // div1.style.transition="all .5";
    //myVar = setInterval(alertFunc, 3000);
   // div1.style.transform="none";
 }
 button.onmouseout=(event)=>
 {
    var div_transform=event.path[3];
    div_transform.style.transform="scale(1)"
   // console.log(div_transform)
   // div1.style.transform="scale(1)"
   // div1.style.transition="all .5";
    //myVar = setInterval(alertFunc, 3000);
   // div1.style.transform="none";
 }
 button1.onclick=(event)=>
 {
    console.log("b1")
 }

 div2.appendChild(button);
 div2.appendChild(button1);
 div2.style="display:grid;grid-template-columns:9fr 1fr;"
 var div3=document.createElement("div");
 div3.id="pappu";
 var div31=document.createElement("div");

 var div32=document.createElement("div");
 div32.id="3-2"
 var b_div32=document.createElement("button");

 b_div32.innerHTML=`<i class="fas fa-book-open fa-2x"></i>`;
 div32.style.padding="10px 10px 20px 20px";
 //div32.style.visibility="hidden";
 b_div32.style="width:100px;height:50px;text-alignment:center;color:white;visibility:hidden";
 div32.appendChild(b_div32);
 var div33=document.createElement("div");

 div31.onmouseover=(event)=>
 {

    event.path[3].children[0].children[0].style.visibility="visible";
    event.path[3].children[0].children[1].style.visibility="visible";
 }
 div32.onmouseover=(event)=>
 {
    console.log(event.path[0].id=="3-2");
    if(event.path[1].id=="3-2")
    {
    var button=event.path[1].children[0];
    button.style.visibility="visible";
    }
    else
    {

        event.path[0].visibility="visible";
    }
 }
 div33.onmouseover=(event)=>
 {
   // console.log(event);

    event.path[3].children[0].children[0].style.visibility="visible";
    event.path[3].children[0].children[1].style.visibility="visible";
//     button.style.visibility="visible";
//    button1.style.visibility="visible";
 }
 div31.onmouseout=(event)=>
 {
    button.style.visibility="hidden";
   button1.style.visibility="hidden";
 }
 div32.onmouseout=(event)=>
 {
//     button.style.visibility="visible";
//    button1.style.visibility="visible";

 if(event.path[1].id=="3-2")
    {
    var button=event.path[0].children[0];
    button.style.visibility="hidden";
    }
    else
    {

        event.path[0].visibility="hidden";
    }
 }
 div33.onmouseout=(event)=>
 {
    button.style.visibility="hidden";
   button1.style.visibility="hidden";
 }

 div3.append(div31);
 div3.append(div32);
 div3.append(div33);
 var div4=document.createElement("div");
 div4.id="div1-div4";
 div1.appendChild(div2);
 div1.appendChild(div3);
 div1.appendChild(div4);
 div_main.appendChild(div1);
 div2.onmouseover=(event)=>
 {
    // console.log(event.path[0].id)
     if(event.path[0].id=="div1-div2")
     {
    event.path[1].children[0].children[1].style.visibility="visible";
     event.path[1].children[0].children[0].style.visibility="visible";

     }


        // console.log("b ib");
        // console.log(event.path)
         if(event.path[0].id=="b")
         {
            // event.path[1].style.visibility="vis";
             console.log("bbbb");
             //console.log(event.path);
             event.path[1].children[0].visibility="visible";
             event.path[1].children[1].visibility="visible";
         }
         if(event.path[1].id=="b")
         {
            // event.path[1].style.visibility="vis";
             console.log("bbbb1");
             //console.log(event.path);
             event.path[2].children[0].visibility="visible";
             event.path[2].children[1].visibility="visible";
         }
