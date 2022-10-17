import { decodeGenres } from './decodeGenres';
import localStrg from '../localStorage/localStrg';

export async function processCurrentPage (result){
    const currentPageContent = await Promise.all(
      result.map(
        async ({
          id,
          title,
          original_title,
          name,
          original_name,
          overview,
          poster_path,
          genre_ids,
          popularity,
          release_date,
          first_air_date,
          vote_average,
          vote_count,
        }) => {
          const movieTitle = title ? title : name;
          const movieOriginalTitle = original_title
            ? original_title
            : original_name;
          const movieDate = release_date ? release_date : first_air_date;
          const imgPath = poster_path
            ? `https://image.tmdb.org/t/p/w300` + poster_path
            : '';
          const genres = genre_ids.length > 1 ? await decodeGenres(genre_ids) : false;
          const raitng = vote_average ? vote_average.toFixed(1) : 0;

          return await {
            id: id,
            title: movieTitle,
            originalTitle: movieOriginalTitle,
            year: movieDate ? movieDate.slice(0, 4) : undefined,
            genres: genres,
            popularity: popularity,
            overview: overview,
            rating: raitng,
            voteCount: vote_count,
            imgPath: imgPath,
          };
        }
      )
    );
    localStrg.save('currentPage', currentPageContent);
  
    return currentPageContent;
  }