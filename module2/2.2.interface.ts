{

    interface student {
        name:string,
        age:number
    }
    const studernt1:student ={
        name:'fahim',
        age:21,
    }
    
    interface newStudent extends student {
        roll:number,
        class:string
    }
    
    const student2 : newStudent = {
        name:'sujon',
        age:21,
        class:'twelbe',
        roll:50
    }
    
    interface arr{
        [index:number]:number
    }
    
    const newArr:arr =[10,20] 
    
    interface Add {
    (num1:number,num2:number):number
    }
    
    const add:Add=(num1,numn2)=>num1+numn2

}