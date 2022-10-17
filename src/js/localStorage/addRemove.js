import localStrg from './localStrg';

export function removeMovieFromLib(movieID, userLibrary) {
  let currentLibraryState = localStrg.load(userLibrary);
  let updatedLibraryState = currentLibraryState.filter(movie => {
    return movie.id !== +movieID;
  });

  updatedLibraryState =
    updatedLibraryState.length ? updatedLibraryState : null;
  localStrg.save(userLibrary, updatedLibraryState);
}

export function addMovieToLib(movieID, userLibrary) {
  let currentLibraryState = localStrg.load(userLibrary);
  const currentPage = localStrg.load('currentPage');
  let movieToAddToLib = currentPage.find(movie => movie.id == movieID);

  if (!currentLibraryState) {
    currentLibraryState = [movieToAddToLib];
  } else currentLibraryState.push(movieToAddToLib);

  localStrg.save(userLibrary, currentLibraryState);
}
