WidgetMetadata = {
    id: "forward.tmdb",
    title: "TMDB",
    version: "1.0.3",
    requiredVersion: "0.0.1",
    description: "Obtenir les données de classement TMDB",
    author: "Forward",
    site: "https://github.com/InchStudio/ForwardWidgets",
    modules: [
      {
        id: "nowPlaying",
        title: "Actuellement en salle",
        functionName: "nowPlaying",
        params: [
          {
            name: "type",
            title: "Interface",
            type: "enumeration",
            enumOptions: [
              {
                title: "Film",
                value: "movie",
              },
              {
                title: "Série",
                value: "tv",
              },
            ],
          },
          {
            name: "page",
            title: "Page",
            type: "page"
          },
          {
            name: "language",
            title: "Langue",
            type: "language",
            value: "fr-FR",
          },
        ],
      },
      {
        id: "trending",
        title: "Tendances",
        functionName: "trending",
        params: [
          {
            name: "time_window",
            title: "Fenêtre temporelle",
            type: "enumeration",
            enumOptions: [
              {
                title: "Aujourd'hui",
                value: "day",
              },
              {
                title: "Cette semaine",
                value: "week",
              },
            ],
          },
          {
            name: "language",
            title: "Langue",
            type: "language",
            value: "fr-FR",
          },
        ],
      },
      {
        id: "popular",
        title: "Populaire",
        functionName: "popular",
        params: [
          {
            name: "type",
            title: "Type",
            type: "enumeration",
            enumOptions: [
              {
                title: "Film",
                value: "movie",
              },
              {
                title: "Série",
                value: "tv",
              },
            ],
          },
          {
            name: "language",
            title: "Langue",
            type: "language",
            value: "fr-FR",
          },
          {
            name: "page",
            title: "Page",
            type: "page",
          },
        ],
      },
      {
        id: "topRated",
        title: "Meilleurs notes",
        functionName: "topRated",
        params: [
          {
            name: "type",
            title: "Interface",
            type: "enumeration",
            enumOptions: [
              {
                title: "Film",
                value: "movie",
              },
              {
                title: "Série",
                value: "tv",
              },
            ],
          },
          {
            name: "page",
            title: "Page",
            type: "page"
          },
          {
            name: "language",
            title: "Langue",
            type: "language",
            value: "fr-FR",
          },
        ],
      },
      {
        id: "categories",
        title: "Catégories",
        functionName: "categories",
        params: [
          {
            name: "with_genres",
            title: "Catégories",
            type: "enumeration",
            enumOptions: [
              {
                title: "Familial",
                value: "10751",
              },
              {
                title: "Animation",
                value: "16",
              },
              {
                title: "Comédie",
                value: "35",
              },
              {
                title: "Crime",
                value: "80",
              },
              {
                title: "Documentaire",
                value: "99",
              },
              {
                title: "Drame",
                value: "18",
              },
              {
                title: "Mystère",
                value: "9648",
              },
              {
                title: "Western",
                value: "37",
              },
              {
                title: "Enfant",
                value: "10762",
              },
              {
                title: "Science-fiction",
                value: "878",
              },
              {
                title: "Action",
                value: "28",
              },
              {
                title: "Thriller",
                value: "53",
              },
              {
                title: "Téléréalité",
                value: "10764",
              },
            ],
          },
          {
            name: "type",
            title: "Type",
            type: "enumeration",
            belongTo: {
              paramName: "with_genres",
              value: ["16", "35", "80", "99", "18", "878", "9648", "37", "10751"],
            },
            enumOptions: [
              {
                title: "Film",
                value: "movie",
              },
              {
                title: "Série",
                value: "tv",
              },
            ],
          },
          {
            name: "with_origin_country",
            title: "Pays",
            type: "input",
            belongTo: {
              paramName: "with_genres",
              value: ["10764"],
            },
            value: "CN",
            placeholders: [
              {
                title: "Chine",
                value: "CN",
              },
              {
                title: "États-Unis",
                value: "US",
              },
              {
                title: "Royaume-Uni",
                value: "GB",
              },
              {
                title: "Japon",
                value: "JP",
              },
              {
                title: "Corée du Sud",
                value: "KR",
              },
            ],
          },
          {
            name: "page",
            title: "Page",
            type: "page"
          },
          {
            name: "language",
            title: "Langue",
            type: "language",
            value: "fr-FR",
          },
        ],
      },
      {
        id: "networks",
        title: "Plateformes de diffusion",
        functionName: "networks",
        params: [
          {
            name: "with_networks",
            title: "Plateformes de diffusion",
            type: "input",
            placeholders: [
              {
                title: "Netflix",
                value: "213",
              },
              {
                title: "Disney+",
                value: "2739",
              },
              {
                title: "Apple TV+",
                value: "2552",
              },
              {
                title: "HBO Max",
                value: "3186",
              },
              {
                title: "Hulu",
                value: "453",
              },
              {
                title: "Prime Video",
                value: "1024",
              }, 
              {
                title: "Paramount+",
                value: "4330",
              }
            ],
          },
          {
            name: "page",
            title: "Page",
            type: "page"
          },
          {
            name: "language",
            title: "Langue",
            type: "language",
            value: "fr-FR",
          },
        ],
      },
      {
        id: "companies",
        title: "Sociétés de production",
        functionName: "companies",
        params: [
          {
            name: "with_companies",
            title: "Sociétés de production",
            type: "enumeration",
            enumOptions: [
              {
                title: "Disney",
                value: "2",
              },
              {
                title: "Warner Bros",
                value: "174",
              },
              {
                title: "Columbia Pictures",
                value: "5",
              },
              {
                title: "Sony Pictures",
                value: "34",
              },
              {
                title: "Universal Pictures",
                value: "33",
              },
              {
                title: "Paramount Pictures",
                value: "4",
              },
              {
                title: "20th Century Studios",
                value: "25",
              },
              {
                title: "Marvel",
                value: "420",
              },
            ]
          },
          {
            name: "page",
            title: "Page",
            type: "page"
          },
          {
            name: "language",
            title: "Langue",
            type: "language",
            value: "fr-FR",
          },
        ]
      },
      {
        id: "list",
        title: "Listes",
        functionName: "list",
        params: [
          {
            name: "url",
            title: "Adresse de la liste",
            type: "input",
            description: "Adresse de la liste TMDB",
            placeholders: [
              {
                title: "Oscars",
                value: "https://www.themoviedb.org/list/8512095-2025-oscar-nominations-for-best-picture-97th-academy-awards",
              }
            ],
          }
        ],
      }
    ],
  };
  
  // Méthode de base pour obtenir les données TMDB
  async function fetchData(api, params, forceMediaType) {
    try {
      const response = await Widget.tmdb.get(api, { params: params });
  
      if (!response) {
        throw new Error("Échec de l'obtention des données");
      }
  
      console.log(response);
      let data = response.results;
      
      // 如果没有 forceMediaType，先过滤只保留 movie 和 tv 的数据
      if (!forceMediaType) {
        data = data.filter((item) => {
          let mediaType = item.media_type;
          if (mediaType == null) {
            if (item.title) {
              mediaType = "movie";
            } else {
              mediaType = "tv";
            }
          }
          return mediaType === "movie" || mediaType === "tv";
        });
      }
      
      const result = data.map((item) => {
        let mediaType = item.media_type;
        if (forceMediaType) {
          mediaType = forceMediaType;
        } else if (mediaType == null) {
          if (item.title) {
            mediaType = "movie";
          } else {
            mediaType = "tv";
          }
        } 
        return {
          id: item.id,
          type: "tmdb",
          title: item.title ?? item.name,
          description: item.overview,
          releaseDate: item.release_date ?? item.first_air_date,
          backdropPath: item.backdrop_path,
          posterPath: item.poster_path,
          rating: item.vote_average,
          mediaType: mediaType,
          genreTitle: genreTitleWith(item.genre_ids),
        };
      });
      
      return result;
    } catch (error) {
      console.error("Échec de l'appel à l'API TMDB :", error);
      throw error;
    }
  }
  
  async function nowPlaying(params) {
    const type = params.type;
    let api = "tv/on_the_air";
    if (type === "movie") {
      api = "movie/now_playing";
    }
    return await fetchData(api, params, type);
  }
  
  async function trending(params) {
    const timeWindow = params.time_window;
    const api = `trending/all/${timeWindow}`;
    delete params.time_window;
    return await fetchData(api, params);
  }
  
  async function popular(params) {
    const type = params.type;
    let api = `movie/popular`;
    if (type === "tv") {
      api = `tv/popular`;
    }
    delete params.type;
    return await fetchData(api, params, type);
  }
  
  async function topRated(params) {
    const type = params.type;
    let api = `movie/top_rated`;
    if (type === "tv") {
      api = `tv/top_rated`;
    }
    delete params.type;
    return await fetchData(api, params, type);
  }
  
  async function categories(params) {
    let genreId = params.with_genres;
    let type = params.type;
    const onlyMovieGenreIds = ["28", "53"];//Action, Thriller
    const onlyTvGenreIds = ["10762", "10764", "10766"];//Enfant, Téléréalité, Soap opera
    if (genreId == "878" && type == "tv") {
      genreId = "10765";
    }
    if (onlyMovieGenreIds.includes(genreId)) {
      type = "movie";
    }
    if (onlyTvGenreIds.includes(genreId)) {
      type = "tv";
    }
    const api = `discover/${type}`;
    params.with_genres = genreId;
    delete params.type;
    return await fetchData(api, params, type);
  }
  
  async function networks(params) {
    let api = `discover/tv`;
    delete params.type;
    return await fetchData(api, params);
  }
  
  async function companies(params) {
    let api = `discover/movie`;
    delete params.type;
    return await fetchData(api, params, "movie");
  }
  
  async function list(params = {}) {
    let url = params.url;
  
    // append ?view=grid
    if (!url.includes("view=grid")) {
      if (url.includes("?")) {
        url = url + "&view=grid";
      } else {
        url = url + "?view=grid";
      }
    }
  
    console.log("Demande de la page de liste :", url);
    // 发送请求获取片单页面
    const response = await Widget.http.get(url, {
      headers: {
        Referer: `https://www.themoviedb.org/`,
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
  
    if (!response || !response.data) {
      throw new Error("Échec de l'obtention des données de liste");
    }
  
  
    console.log("Longueur des données de la page de liste :", response.data.length);
    console.log("Commencer l'analyse");
  
    // 解析 HTML 得到文档 ID
    const $ = Widget.html.load(response.data);
    if (!$ || $ === null) {
      throw new Error("Échec de l'analyse HTML");
    }
  
    //        // 获取所有视频项，得到元素ID数组
    const coverElements = $(".block.aspect-poster");
  
    console.log("éléments :", coverElements);
  
    let tmdbIds = [];
    for (const itemId of coverElements) {
      const $item = $(itemId);
      const link = $item.attr("href");
      if (!link) {
        continue;
      }
      const match = link.match(/^\/(movie|tv)\/([^\/-]+)-/)
      const type = match?.[1];
      const id = match?.[2];
      if (id && type) {
        tmdbIds.push({ id: `${type}.${id}`, type: 'tmdb' });
      }
    }
  
    return tmdbIds;
  }
  
  function genreTitleWith(genre_ids) {
    if (!genre_ids) {
      return "";
    }
    const genreDict = [
      {"id": 10759, "name": "Action & Aventure"},
      {"id": 16, "name": "Animation"},
      {"id": 35, "name": "Comédie"},
      {"id": 80, "name": "Crime"},
      {"id": 99, "name": "Documentaire"},
      {"id": 18, "name": "Drame"},
      {"id": 10751, "name": "Familial"},
      {"id": 10762, "name": "Enfant"},
      {"id": 9648, "name": "Mystère"},
      {"id": 10763, "name": "Actualités"},
      {"id": 10764, "name": "Téléréalité"},
      {"id": 10765, "name": "Sci-Fi & Fantasy"},
      {"id": 10766, "name": "Soap opera"},
      {"id": 10767, "name": "Talk-show"},
      {"id": 10768, "name": "War & Politics"},
      {"id": 37, "name": "Western"},
      {"id": 28, "name": "Action"},
      {"id": 12, "name": "Aventure"},
      {"id": 16, "name": "Animation"},
      {"id": 35, "name": "Comédie"},
      {"id": 80, "name": "Crime"},
      {"id": 99, "name": "Documentaire"},
      {"id": 18, "name": "Drame"},
      {"id": 10751, "name": "Familial"},
      {"id": 14, "name": "Fantastique"},
      {"id": 36, "name": "Historique"},
      {"id": 27, "name": "Horreur"},
      {"id": 10402, "name": "Musique"},
      {"id": 9648, "name": "Mystère"},
      {"id": 10749, "name": "Romance"},
      {"id": 878, "name": "Science-fiction"},
      {"id": 10770, "name": "Téléfilm"},
      {"id": 53, "name": "Thriller"},
      {"id": 10752, "name": "Guerre"},
      {"id": 37, "name": "Western"},
    ]
    if (genre_ids.length > 2) {
      genre_ids = genre_ids.slice(0, 2);
    }
    const result = genre_ids.map(id => {
      const genre = genreDict.find(genre => genre.id == id);
      if (genre) {
        return genre.name;
      }
      return null;
    }).filter(genre => genre !== null).join(", ");
    return result;
  }