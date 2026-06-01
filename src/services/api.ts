const API_URL = "https://my-json-server.typicode.com/EnkiGroup/DesafioFrontEnd2026Jr/items";

export async function fetchItems() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        return data;



    } 
    
    catch (error) {
        console.log("ERRO:", error);
    }
}
