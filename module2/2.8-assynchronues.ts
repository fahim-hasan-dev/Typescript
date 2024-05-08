{
    // Asynchronous typescript

    type Something={data:string}
    const createpromise = ():Promise<Something>=>{
        return new Promise<Something>((resolve, reject)=>{
            const data:Something = {data:'somthing'}
            if(data){
                resolve(data)
            }else{
                reject('faild to load data')
            }
        })
    }

    const callPromise = async():Promise<Something>=>{
        const result:Something = await createpromise();
        
        return result
    }

    console.log(callPromise())
}