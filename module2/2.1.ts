{
    // Type assertion

    let value:any;
    value='next level webdevelopment';
    (value as string).split

    function kgToGm (value :number | string) :number|string|undefined{
        if (typeof value === 'string'){
            return `The converter value is ${parseFloat(value)*1000}`
        }

        if (typeof value === 'number'){
            return value*1000
        }
    }

    let result1 = kgToGm(20) as number
    let result2 = kgToGm('50') as string

    console.log(result1,result2)

    type customError ={
        message:string
    }

    try{

    }catch(err){
        console.log((err as customError).message)
    }
    
}

