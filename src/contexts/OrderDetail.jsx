import React,{useContext,useState,useMemo,createContext, useEffect} from "react";

const OrderDetails= createContext()

export function useOrderDetails(){
    const context=useContext(OrderDetails)
    if(!context)
    throw new Error("useOrderDetail must be used within an OrderDetailProvider")

    return context
}

function calculateSubTotal(orderType,optionCounts){
    let optioncount=0
    for(let count of optionCounts[orderType].value())
        optioncount+=count

    const priceItem=orderType==='scoop'?1:1.5
    return optioncount*priceItem

}


export function OrderDetailProvider(props){
    
    const [optionCounts, setOptionCounts]= useState({
        scoops:new Map(),
        toppings: new Map()
    })
    const [total,setTotal]= useState({
        scoops:0,
        toppings:0,
        grandTotal:0
    })

    useEffect(()=>{
        const scoopSubtotal= calculateSubTotal('scoops',optionCounts)
        const toppingSubtotal=calculateSubTotal('toppings',optionCounts)
        const grandTotal= scoopSubtotal+toppingSubtotal

        setTotal({
            scoop:scoopSubtotal,
            toppings:toppingSubtotal,
            grandTotal
        })
    })

    const value= useMemo(()=>{
        //getter: Obect containing option counts for scoops and toppings, subtotal and total
        //setter: updateOoption count

        function updateItemCount(itemName,newItemCount,optionType){
            const newOptionCount={...optionCounts}

            //get the map of the optionType
            const optionTypeMap=optionCounts[optionType]
            optionTypeMap.set(itemName,newItemCount)

            setOptionCounts(newOptionCount)
        }
        return[{...optionCounts,total},updateItemCount]
    },[optionCounts,total])

    return <OrderDetails.Provider value={value} {...props}/>

}