export interface TVMazeShowList {
    query: string,
    shows: Array<TVMazeShow>
}

export interface TVMazeShow {
    search: string,
    show: {
        id: string,
        url: string,
        name: string,
        type: string,
        language: string,
        genres: Array<string>,
        status: string,
        runtime: number,
        premiered: string,
        officialSite: string,
        schedule: { time: string, 
                    days: Array<string> },
        rating: { average: number },
        weight: number,
        network: { id: number, 
                   name: string, 
                   country: { name: string, 
                              code: string, 
                              timezone: string} },
        webChannel: { id: number, 
                      name: string, 
                      country: string },
        externals: { tvrange: number, 
                     thetvdb: number, 
                     imdb: string }
        image: { medium: string, 
                 original: string },
        summary: string,
        updated: number,
        _links: { self: { href: string }, 
                  previousepisode: { href: string} }
        
    }
}