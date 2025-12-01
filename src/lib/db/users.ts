export async function fetchUserFromAPI(uid: string){
    try{
        const response = await fetch(`/api/profile?uid=${uid}`);
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        return result;
    } catch (err: any) {
        return null;
    }
}