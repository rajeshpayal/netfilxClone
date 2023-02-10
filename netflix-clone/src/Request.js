const key = "77853b70c2f32f05cbdbc91620373ecb";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=77853b70c2f32f05cbdbc91620373ecb&language=en-US&page=1",
  requestTreading:
    "https://api.themoviedb.org/3/movie/popular?api_key=77853b70c2f32f05cbdbc91620373ecb&language=en-US&page=2",
  requestHorror:
    "https://api.themoviedb.org/3/search/movieu?api_key=77853b70c2f32f05cbdbc91620373ecb&language=en-US&query=horror&page=1&include_additional",
  requestUpComing:
    "https://api.themoviedb.org/3/movie/upcoming?api_key=77853b70c2f32f05cbdbc91620373ecb&language=en-US&page=1",
};

export default requests;
