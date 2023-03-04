const URL='https://capstone-goal-app-api.up.railway.app';


export const indexLoader = async () => {
    const response = await fetch(URL + "/api");
    const post = await response.json();
    return post;
}

