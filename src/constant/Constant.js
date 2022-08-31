export const getToken = ()=>{
    if(localStorage.getItem("customer-info")){
        return JSON.parse(localStorage.getItem("customer-info")).token;
    }
    else{
        return false;
    }
}
export const getStorageData = ()=>{
    if(localStorage.getItem("customer-info"))
    {
        return JSON.parse(localStorage.getItem("customer-info"))
    }
}
export const setTokenData = (storage)=>{
    localStorage.setItem("customer-info",JSON.stringify(storage))
}
export const destroyStorage = ()=>{
    localStorage.clear()
}