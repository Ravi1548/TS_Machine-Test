const EmpId1 = document.querySelector("#EmpId")! as HTMLInputElement;
const EmpName1 = document.querySelector("#EmpName")! as HTMLInputElement;
const Project1 = document.querySelector("#Project")! as HTMLInputElement;
const Cause1 = document.querySelector("#Cause")! as HTMLInputElement;
const Source1= document.querySelector("#Source")! as HTMLInputElement;
const Destination1 = document.querySelector("#Destination")! as HTMLInputElement;
const fromDate = document.querySelector("#fromDate")! as HTMLElement;
const NoOfDays = document.querySelector("#numberofdays")! as HTMLInputElement;
const ToDate = document.querySelector("#toDate")! as HTMLInputElement;
const mode1 = document.querySelector("#mode")! as HTMLInputElement;
const btn1 = document.querySelector("#reqbtn")! as HTMLElement;

//class
class Request1{
      EmpId:number = 1;
      EmpName:String="";
      Project:string ="";
      Cause:string="";
      Source:string ="";
      Destination:string = "";
      mode:string = "";
      // fromDate: Date= new Date;
      // NoOfdays:number = 0;
      // ToDate :Date = new Date;

      //constructor
      constructor(_EmpId:number,_EmpName:string, _Project:string, _Cause:string,
                   _Source:string, _Destination:string, _mode:string
                  //   _fromDate:Date, _NoOfDays:number, _ToDate:Date
                    ){

                this.EmpId = _EmpId;
                this.EmpName = _EmpName;
                this.Project = _Project;
                this.Cause = _Cause;
                this.Source = _Source;
                this.Destination = _Destination;
                this.mode = _mode;
            //     this.fromDate = _fromDate;
            //     this.NoOfdays = _NoOfDays;
            //     this.ToDate =_ToDate;
      }
}

//create array
let RequestArray:Request1[] = [];

//create a request


btn1?.addEventListener("click", reqfun)

function reqfun(){
      console.log("clicked");
      let Request3 = new Request1(Number(EmpId1.value),EmpName1.value,Project1.value,Cause1.value,Source1.value,Destination1.value,mode1.value);
      RequestArray.push(Request3);
      console.log(Request3);
}
     

