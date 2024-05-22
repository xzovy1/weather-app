import { createClient } from 'pexels';

const client = createClient('9pIHn9ZngEAiIgpMmuS6m9ntOiTmAGs8neaCL8Z2KaYihthJk66sDgZf');

export async function fetchBackground (query){
    query += ' weather'
   const response = await client.videos.search({ query, per_page: 1 }).then(resp => {
        return resp;
    }).then(
        data => {
            // console.log(data.videos[0])
            return data.videos[0]
        }
    )
    return response;
};

// export async function fetchBackground(query = "clear weather"){

//     // const query = 'Nature';
    
//     fetch(`https://api.pexels.com/videos/${query}`).then(
//         response => {
//             return response.json;
//         }
//     ).then(
//         video => {
//             console.log(video)
//             return video;
//         }
//     )
//     return video;
// }
