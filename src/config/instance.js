const axios = require('axios')

export const instance = axios.create({
    baseURL : 'https://songmeanings.p.rapidapi.com/',
    params: {
        key: '<REQUIRED>',
        artist_name: '<REQUIRED>',
        lyric_title: '<REQUIRED>',
        type: 'all',
        page: '1',
        page_size: '25',
        page_order: 'date',
        page_sort: 'asc',
        method: 'comments.get',
        format: 'json'
      },
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'songmeanings.p.rapidapi.com'
      }
})