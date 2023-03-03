const URL='https://capstone-production-a50d.up.railway.app/api/';


export const indexLoader = async () => {
    const response = await fetch(URL + "/api");
    const post = await response.json();
    return post;
}

