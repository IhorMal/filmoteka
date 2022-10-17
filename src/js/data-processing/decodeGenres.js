import { fetchGenresList } from "../index-page/themoviedbAPI";
import { APIKEY } from "../common/varriables";
import localStrg, { save, load, del } from "../localStorage/localStrg";

export async function decodeGenres(genres){
    if (!localStrg.load ("genresList")){
        await fetchGenresList(APIKEY)
    }
    let genresList = localStrg.load ("genresList");
    let genresNames = new Array;
    
    genres.forEach(async genre =>  {
    // try to find genre in localStorage
    try{
        genresNames.push((genresList.find(genreListItem => genreListItem.id === genre)).name)
    }// update localStorage ganres data and try to find one more time
    catch(error){
        console.log(`${genre} wasn't found in Local Storage, updating ganresList`)
        genresList = await fetchGenresList(APIKEY);
        genresNames.push((genresList.find(genreListItem => genreListItem.id === genre)).name)
    }
});

    return(genresNames.join(", "))
}
