import { Playlist } from "../entities"

const playlistData: Playlist = {
  name: "My Playlist",
  author: "Andrews Alves",
  duration: 4700,
  songs_qtd: 14,
  tags: [
    "Hard rock",
    "Classic rock",
    "Heavy metal",
    "Progressive rock",
    "Thrash metal"
  ],
  "cover_image": "playlist_cover.png",
  "artists": [
    {
      "id": "f2a0a4a1-53bc-432a-8466-e91d6601bc6f",
      "name": "Led Zeppelin",
      "image": "zeppelin.png"
    },
    {
      "id": "6bfc2ac4-3f59-47c6-8328-25f77b839a34",
      "name": "Guns N' Roses",
      "image": "guns.png"
    },
    {
      "id": "5a5d9f8f-88cb-4bcb-8b6b-00a59e09e2e3",
      "name": "Faith No More",
      "image": "faithnomore.png"
    },
    {
      "id": "f2a0a4a1-53bc-432a-8466-e90d6601bc6f",
      "name": "AC/DC",
      "image": "acdc.png"
    },
    {
      "id": "a1d68a42-eab8-4fe9-943f-8a13d8a93018",
      "name": "Aerosmith",
      "image": "aerosmith.png"
    },
    {
      "id": "07c90f63-5391-41e2-8165-0419aaf8d7c4",
      "name": "Pink Floyd",
      "image": "pinkfloyd.png"
    },
    {
      "id": "1b3939ae-ef90-464e-91c7-e88ec234f1de",
      "name": "Black Sabbath",
      "image": "sabbath.png"
    },
    {
      "id": "4e6c7865-4b23-41fc-b12e-df91a110540a",
      "name": "Van Halen",
      "image": "vanhalen.png"
    }
  ],
  "songs": [
    {
      "id": "9f2b6e34-7d4b-4d2e-b8f7-b2cf6f1c9d89",
      "name": "Back in Black",
      "artist": "AC/DC",
      "album": "Back in Black",
      "duration": 255,
      "is_favorite": false,
      "album_cover": "backinblackalbum.png"
    },
    {
      "id": "3b5c9c15-73e8-4e49-a2b1-ff3587e0cf01",
      "name": "Midlife Crisis",
      "artist": "Faith No More",
      "album": "Angel Dust",
      "duration": 356,
      "is_favorite": false,
      "album_cover": "therealthing.png"
    },
    {
      "id": "53fbb299-1294-407e-9433-7332dcdbbdf1",
      "name": "Dream On",
      "artist": "Aerosmith",
      "album": "Aerosmith",
      "duration": 276,
      "is_favorite": false,
      "album_cover": "aerosmithalbum.png"
    },
    {
      "id": "7792386a-257e-41ef-931e-088ae77b76a2",
      "name": "14 Years",
      "artist": "Guns N' Roses",
      "album": "Use Your Illusion II",
      "duration": 500,
      "is_favorite": false,
      "album_cover": "illusion2.png"
    },
    {
      "id": "c70965a9-7b39-45a8-ae46-0f94cc292c3e",
      "name": "Black Dog",
      "artist": "Led Zeppelin",
      "album": "Led Zeppelin IV",
      "duration": 482,
      "is_favorite": false,
      "album_cover": "zeppeliniv.png"
    },
    {
      "id": "1d04fd60-230a-471a-8df2-46a0c99db4b5",
      "name": "Somebody Gimme a Doctor",
      "artist": "Van Halen",
      "album": "Van Halen II",
      "duration": 184,
      "is_favorite": false,
      "album_cover": "vanhalen2.png"
    },
    {
      "id": "6d7d7f2d-6a8f-46d4-9d12-75ff1cde31d6",
      "name": "Money",
      "artist": "Pink Floyd",
      "album": "The Dark Side of the Moon",
      "duration": 382,
      "is_favorite": false,
      "album_cover": "darksidemoon.png"
    },
    {
      "id": "c19f9d6d-7637-49f0-a8a8-519d1ae2df61",
      "name": "Sweet Child O' Mine",
      "artist": "Guns N' Roses",
      "album": "Appetite for Destruction",
      "duration": 356,
      "is_favorite": false,
      "album_cover": "appetitefordestruction.png"
    },
    {
      "id": "a515e6d9-7b2d-4d5e-b30e-d56eec113c5d",
      "name": "Paranoid",
      "artist": "Black Sabbath",
      "album": "Paranoid",
      "duration": 171,
      "is_favorite": false,
      "album_cover": "paranoid.png"
    },
    {
      "id": "f5f69390-7aa1-4f21-832e-bdfec62cbb1f",
      "name": "Good Bye Blue Sky",
      "artist": "Pink Floyd",
      "album": "The Wall",
      "duration": 269,
      "is_favorite": false,
      "album_cover": "thewall.png"
    },
    {
      "id": "a2ddcf36-3f00-4c6e-9c88-7053ae42f625",
      "name": "Hangar 18",
      "artist": "Megadeth",
      "album": "Rust in Peace",
      "duration": 274,
      "is_favorite": false,
      "album_cover": "rustinpeace.png"
    },
    {
      "id": "bfa0e530-69e2-4b45-a765-6f61a91d6204",
      "name": "Epic",
      "artist": "Faith No More",
      "album": "The Real Thing",
      "duration": 304,
      "is_favorite": false,
      "album_cover": "therealthing.png"
    },
    {
      "id": "cf4b6u34-7d4b-4d2e-b8f7-b2ff1c39191",
      "name": "Little Lover",
      "artist": "AC/DC",
      "album": "High Voltage",
      "duration": 339,
      "is_favorite": false,
      "album_cover": "highvoltage.png"
    },
    {
      "id": "9b60d0b5-6bd1-4f84-b06a-4187f7b2bfb4",
      "name": "Jump",
      "artist": "Van Halen",
      "album": "1984",
      "duration": 255,
      "is_favorite": false,
      "album_cover": "1984.png"
    }
  ]
}
export default playlistData
