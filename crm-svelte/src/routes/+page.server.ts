import type { Load } from "@sveltejs/kit"

export const load: Load = async ({ fetch }) => {

    const url = 'http://localhost:1337/api/posts';
    const options = {
        method: 'GET',
        headers: {
            authorization: 'Bearer c9292065c67c55483ed9bf4262849140de0fabc4290bc7998105ff4d5a7ee392e808ba469b7550a8240b877bca894a827dc5d4da510acb3d1b8288f705235928d20138ca0653f6013ee21f2f285fe485eefda42f3705eda8c1e5f495238214b65863e6296f7e0a70b333865384078bd9f59baf8279114c87cff5259f42e1acee'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return { data }
    } catch (error) {
        console.error(error);
    }

}


