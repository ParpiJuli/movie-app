export interface MovieType {
    genres: [
        {
            id: number,
            name: string
        },
    ],
    homepage: string;
    id: number,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_countries: [
        {
            iso_3166_1: string,
            name: string
        }
    ],
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number
}
