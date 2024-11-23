import { Character } from "../domain/character";
import { CharacterResponse } from "../domain/character-response";

export const getCharacterMapper = (character:CharacterResponse):Character =>{
    return{
        id:character.id,
        title:character.title,
        description:character.description,      
        category:character.category,          
        price:character.price,          
        discountPercentage:character.discountPercentage,  
        rating:character.rating,       
        stock:character.stock,         
        tags:character.tags,          
        brand:character.brand,          
        sku:character.sku,         
        weight:character.weight,        
        warrantyInformation:character.warrantyInformation,  
        shippingInformation:character.shippingInformation, 
        availabilityStatus:character.availabilityStatus, 
    
        returnPolicy:character.returnPolicy     ,
        minimumOrderQuantity:character.minimumOrderQuantity,
        images:character.images,   
    }
}


