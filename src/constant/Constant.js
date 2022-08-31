export const getToken = ()=>
{
    if(localStorage.getItem("customer-info"))
    {
        return JSON.parse(localStorage.getItem("customer-info")).token;
    }
}