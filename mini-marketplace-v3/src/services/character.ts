export const getCharacter = async (id:number)=>{

    try{
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if(!response.ok){
            throw new Error("1");
        }

        const data = await response.json();
        console.log({data});
        return data;
    }catch (error){
        console.log({error});
    }
}