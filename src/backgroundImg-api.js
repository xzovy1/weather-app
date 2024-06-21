import { createClient } from 'pexels';

const client = createClient('9pIHn9ZngEAiIgpMmuS6m9ntOiTmAGs8neaCL8Z2KaYihthJk66sDgZf');
function rand (){
    return Math.floor(Math.random()* 10);
}
export async function fetchBackground (query){
    query += ' weather'
   const response = await client.videos.search({ query, per_page: 11 }).then(resp => {
        return resp;
    }).then(
        data => {
            let video = data.videos[rand()];
            console.log(video);
            return video.video_files[2].link;
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
