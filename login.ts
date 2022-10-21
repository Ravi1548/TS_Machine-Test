const username = document.querySelector("#user")! as HTMLInputElement;
const password = document.querySelector("#pass")! as HTMLInputElement;
const button1 = document.querySelector("#btn");
const para1:HTMLElement = document.querySelector("#p1") as HTMLElement;

let Validusers = [
      {
            name:"Ravi",
            role:"Employee",
            password:"r1"
      },
      {
            name:"Akshay",
            role:"Employee",
            password:"a1"
      },
      {
            name:"Hritik",
            role:"Admin",
            password:"h1"
      },
      {
            name:"Bhargav",
            role:"Admin",
            password:"b1"
      },
]

 button1?.addEventListener("click", submit);

 function submit(this:HTMLElement){
      console.log("clicked");
      
      for(let i =0;i<Validusers.length;i++){
            if(username.value === Validusers[i].name && password.value === Validusers[i].password){
                  window.location.href = `${Validusers[i].role}.html`;
                  break;
            }else if(username.value =="" || password.value ==""){
                  para1.innerHTML = "please enter details";
                  break;
            }else {
                para1.innerHTML = "Invalid Credentials"
            }
      }

 }