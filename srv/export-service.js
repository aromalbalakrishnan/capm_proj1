const cds = require("@sap/cds");

class ExportService extends cds.ApplicationService{
    async init(){
        const { exports }  = this.entities;

        this.before("READ","exports",(req)=>{
            console.log("Before Event")
        })

        this.after("READ","exports",(res)=>{
            console.log("After Event");
            for(let i =0; i<res.length; i++){
                console.log(res[i].Id)
            }
        })

        this.before("CREATE","exports",(req)=>{
            console.log("Before Event Of Create")
            console.log(req);
            if(req.data.Id>6){
                req.reject(400,"Id exceeds 6");
            }
        })


        await super.init();
    }
} 

module.exports = ExportService;