{
    // constant and key of

    const getValue = <x, y extends keyof x>(obj:x,key:y)=>{
        return obj[key]
    }

    const user = {
        name:'fahim',
        age:20,
        class:10
    }

    const result = getValue(user,'name')

    // 
}