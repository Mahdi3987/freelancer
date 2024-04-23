


export const errorHandler = (statuscode ,message )=>{
const error = new Error(message);
error.message= message;
return error ;
};


