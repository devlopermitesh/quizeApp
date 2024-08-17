import localforage from "localforage";
//middlewire to save levels to localstorage
const localstorageMiddlewire=store=>next=>action=>{
if(action.type==="quiz/updateLevels"){
    //passing action to reducer to get updated data
const result=next(action);
//get levels from slice
const {levels}=store.getState().quiz;
//set the data from slice to local storage
 localforage.setItem("quizLevels",levels)
.then(()=>{
    console.log("data loaded successfully")
})
.catch(()=>{
console.log("data coudnt loaded successfully")

})
return result
}
else{
    //if no action pas to reducer
    next(action)
}
}


import { configureStore } from "@reduxjs/toolkit";
import quize from "./quizslice"
const store=configureStore({
    reducer:{
        quiz:quize
    },
    middleware:(getDefaultMiddleware)=>{
   return getDefaultMiddleware().concat(localstorageMiddlewire)
    }
})
export default store;