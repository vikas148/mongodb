const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
//connection creation and creating a new db
mongoose.connect("mongodb://localhost:27017/iitstu").then(()=> console.log("connection is successful..")).catch((err)=>console.log(err));

//tut 49 schema

const iitStudentSchema = new mongoose.Schema({
    // name  : String,
    name : {
        type : String,
        required : true

    },

    stuid : Number,
    branch : String,
    course : { 
        type : String,
        required : true
    },
    active : Boolean,
    
    date    : {
        type :Date,
        default: Date.now
    },

    age : {
          type : Number,
    }

})


//tut50 models ke through hum collection create kr skte hai
//collection creation
const IitStudent = new mongoose.model("IitStudent",iitStudentSchema)

//tut 51 create a document or inserting document 

//asynchronous way it take time to save data
// const Students = new IitStudent ({
//     name : "Ravi",

//     stuid : 202001,
//     branch : "cse",
//     course : "btech",
//     active : true
    
//     // date    : {
//     //     type :Date,
//     //     default: Date.now
//     // }
    
// })

// Students.save();


// const createDocument = async()=>{

//     try{
          
//         const Students = new IitStudent ({
//             name : "Yash",
        
//             stuid : 202003,
//             branch : "cse",
//             course : "btech",
//             active : true
            
//             // date    : {
//             //     type :Date,
//             //     default: Date.now
//             // }
            
//         })
        
//         const result =await Students.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }

// }

// createDocument();

//tut 52 inserting many
const createDocument = async()=>{

    try{
          
        const Student1 = new IitStudent ({
            name : "Yash",
        
            stuid : 202001,
            branch : "cse",
            course : "btech",
            date: 22,
            active : true
            })

            const Student2 = new IitStudent ({
                name : "sawai",
            
                stuid : 202002,
                branch : "cse",
                course : "btech",
                age: 33,
                active : true
                })

                const Student3 = new IitStudent ({
                    name : "sachin",
                
                    stuid : 202003,
                    branch : "cse",
                    course : "btech",
                    age: 26,
                    active : true
                    })
                    
                    
                const Student4 = new IitStudent ({
                    name : "siya",
                
                    stuid : 202003,
                    branch : "cse",
                    course : "btech",
                    age: 29,
                    active : true
                    })
        
        const result =await IitStudent.insertMany([Student1,Student2,Student3]);
        console.log(result);
    }catch(err){
        console.log(err);
    }

}

//createDocument();


//tut 53 how to read mongo document
//try catch use krna hai isme bhi

// const getDocument = async()=>{
// //  const result  =await IitStudent.find({name: "Yash"})//query methods can be used here 
//  const result  =await IitStudent.find();
//  console.log(result);
// }

// getDocument();


const getDocument = async()=>{
    //  const result  =await IitStudent.find({name: "Yash"})//query methods can be used here 
    //  const result  =await IitStudent.find({branch: {$in : ["cse","civil"]}});
    //  const result  =await IitStudent.find({$or : [{age:""},{branch:"cse"}]});
    //  const result  =await IitStudent.find({$or : [{age:""},{branch:"cse"}]}).count();
    //  const result  =await IitStudent.find({$and : [{branch:"cse"},{name:"Yash"}]});
     const result  =await IitStudent.find().select({age:1}).sort({age:-1});         //1 or -1;

     console.log(result);
    }
    
    getDocument();

    //tut 57 use try catch

    const updateDocument =async(_id)=>{
     const result = await IitStudent.updateOne({_id},{
        $set:{course:"Btech"}
     });    
    }
    updateDocument("639b53a87f8660f8f408297b");
