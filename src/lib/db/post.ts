export async function fetchPostFromAPI(id: string){
    try{
        const response = await fetch(`/api/post/single?id=${id}`);
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        return result;
    } catch (err: any) {
        return null;
    }
}