{
    // generic with interface

interface Developer<T> {
    name:string,
    computer:{
        brand:string,
        model:string,
        price:number
    },
    watch?:T

}

const pooreDeveloper:Developer<{brand:string,price:number}> ={
    name:'fahim',
    computer:{
        brand:'Dell',
        model:'core i5',
        price:35000
    },
    watch:{
        brand:'mi',
        price:5000
    }
}

    // 
}