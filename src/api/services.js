import axios from "axios";
const apiKey = '54796a3e4b55b38df21bf359c2387922'
const baseUrl = 'https://corsproxy.io/?https://api.musixmatch.com/ws/1.1'

export const search = async (query) => {
    try {
        const response = await axios.get(`${baseUrl}/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKey}`)
        return response.data.message.body.track_list
    } catch (error) {
        console.log(error)
    }
}

export const getLyrics = async (id) => {
    try {
        const lyrics = await axios.get(`${baseUrl}/track.lyrics.get?track_id=${id}&apikey=${apiKey}`)
        return {
            lyrics : lyrics.data.message.body.lyrics,
        }

    } catch (error) {
        console.log(error)
    }
}
