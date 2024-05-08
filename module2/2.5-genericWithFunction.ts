{
    // jenericWithFunction

const createArrayWithGenneric = <T>(params:T):T[]=>{
    return [params]
}


const array1 = createArrayWithGenneric<string>('Bangladesh')
const array2 = createArrayWithGenneric<number>(500)


    // 
}