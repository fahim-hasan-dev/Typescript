{
    // generic type

    type genericArray<T> = Array<T>

    // const arr1:Array<number> =[10,250]
    const arr1:genericArray<number> =[10,250]

    // const arr2:string[]=['a','b']
    const arr2:genericArray<string>=['a','b']

    // const arr3:boolean[]=[true,false]
    const arr3:genericArray<boolean>=[true,false]

    type genericTuple<x,y> = [x,y]

    const arrObj:genericTuple<number,{name:string,age:number}>=[
        500,
        {
            name:'fahim',
            age:20
        }
    ]
}