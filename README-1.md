# Album Recommendation Service

> This service shows the user 7 related albums based on the one they are currently listening to. Based on https://bandcamp.com

## Related Projects

  - https://github.com/team-amy/derrick-service
  - https://github.com/team-amy/Nam-s-Service
  
## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- Before seeding database: ```$brew install mongodb```
- To start mongo: ```$brew services start mongodb``` then ```$mongo```

## Requirements

- Node 6.13.0

## Development

- To seed the database: ```npm run seed-data```
- To start the server: ```npm run start```
- To start webpack: ```npm run react-dev```

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
=======
```

## CRUD

|   Intention   |     Path         |  Req Type |    Req body   |   Response   |
| ------------- | ---------------- | --------- | ------------- | ------------ |
|    Create     | /api/albums/:id  |    POST   | {id: '01', albumName: 'cool dog', artist: 'Bandwidth', albumArt:  'randompic.jpg', tags: 'pop, psychedelic', description: 'Lorem ipsum' }| [{id: '01', albumName: 'cool dog', artist: 'Bandwidth', albumArt:  'randompic.jpg', tags: 'pop, psychedelic', description: 'Lorem ipsum' }] |
|     Read      | /api/albums/1    |   GET     |    N/A        |[{id: '01', albumName: 'cool dog', artist: 'Bandwidth', albumArt:  'randompic.jpg', tags: 'pop, psychedelic', description: 'Lorem ipsum' }]
|    Update     |  /api/albums/1   |    PUT    | {id: '02', albumName: 'fun tunes', artist: 'Bimby', albumArt: 'randompic.jpg', description: 'Morbi gravida', tags: 'pop, trance'} | [{id: '02', albumName: 'fun tunes', artist: 'Bimby', albumArt: 'randompic.jpg', description: 'Morbi gravida', tags: 'pop, trance'}]
|    Delete     | api/albums/1     |  DELETE   | {id: '01', albumName: 'cool dog', artist: 'Bandwidth', albumArt:  'randompic.jpg', tags: 'pop, psychedelic', description: 'Lorem ipsum' } | [{id: '01', albumName: 'cool dog', artist: 'Bandwidth', albumArt:  'randompic.jpg', tags: 'pop, psychedelic', description: 'Lorem ipsum' }]
