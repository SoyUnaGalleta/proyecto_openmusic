import { createStore } from 'vuex'

export default createStore({
  state: {
    /*musica: {},*/
    musica: {
      "rap":[
        {
        "id":1,
        "artist":"Tupac",
        "category":"rap",
        "album":"All Eyez on Me",
        "image":"https://is5-ssl.mzstatic.com/image/thumb/Music/4f/49/20/dj.lbjggise.jpg/1000x1000bb.webp"
        },
        {
        "id":2,
        "artist":"Tupac",
        "category":"rap",
        "album":"Greatest Hits",
        "image":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg"
        },
        {
        "id":3,
        "artist":"Kendrick Lamar",
        "category":"rap",
        "album":"DAMN.",
        "image":"https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png"
        },
        {
        "id":4,
        "artist":"Kendrick Lamar",
        "category":"rap",
        "album":"good kid, m.A.A.d city",
        "image":"https://www.musickorea.com/storage/woo680821U0/www//product/2021/48/O/product.30106.163835810275805.jpg"
        },
        {
        "id":5,
        "artist":"Eminem",
        "category":"rap",
        "album":"The Marshall Mathers LP",
        "image":"https://upload.wikimedia.org/wikipedia/en/a/ae/The_Marshall_Mathers_LP.jpg"
        }
        ],
      "pop":[
        {
        "id":6,
        "artist":"Michel Jackson",
        "category":"pop",
        "album":"Thriller",
        "image":"https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/90/3c/60/903c6069-b321-563c-bbc5-28e26f8fb1bd/074643811224.jpg/1000x1000bb.webp"
        },
        {
        "id":7,
        "artist":"Michel Jackson",
        "category":"pop",
        "album":"Bad",
        "image":"https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/d2/97/4c/d2974cc9-19cc-09a2-a359-7b8fe8cae377/886443546264.jpg/1000x1000bb.webp"
        },
        {
        "id":8,
        "artist":"Madonna",
        "category":"pop",
        "album":"Madonna",
        "image":"https://is2-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.ykiinwgl.jpg/1000x1000bb.webp"
        },
        {
        "id":9,
        "artist":"Madonna",
        "category":"pop",
        "album":"Like a Virgin",
        "image":"https://is5-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.wxptosaa.jpg/1000x1000bb.webp"
        }
        ],
      "rock":[
        {
        "id":11,
        "artist":"Foo Fighters",
        "category":"rock",
        "album":"Greatest Hits",
        "image":"https://upload.wikimedia.org/wikipedia/en/3/35/FooFightersGreatestHits.jpg"
        },
        {
        "id":12,
        "artist":"Metallica",
        "category":"rock",
        "album":"Master of Puppets",
        "image":"https://i.redd.it/4a2atbzamfq41.png"
        },
        {
        "id":13,
        "artist":"AC/DC",
        "category":"rock",
        "album":"Highway to Hell",
        "image":"https://is4-ssl.mzstatic.com/image/thumb/Features6/v4/ee/bd/69/eebd6962-9b25-c177-c175-b3b3e641a29d/dj.edqjfvzd.jpg/1000x1000bb.webp"
        },
        {
        "id":14,
        "artist":"AC/DC",
        "category":"rock",
        "album":"Back in Black",
        "image":"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.jpg/1000x1000bb.webp"
        },
        {
        "id":15,
        "artist":"Deep Purple",
        "category":"rock",
        "album":"Machine Head",
        "image":"https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/8b/1e/fa/8b1efa15-24c4-2190-5d7b-22e2945e281a/603497877393.jpg/1000x1000bb.webp"
        }
      ]
    },
    renderizar: true,
  },
  getters: {
    contarAlbumes (state) {
      return state.musica.length
    }
  },
  mutations: {
    ADD_ALBUM: (state, data) => {
      let genero = data.category
      state.musica[genero].push(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
