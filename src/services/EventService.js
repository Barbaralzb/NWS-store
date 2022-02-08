import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'http://vps-a47222b1.vps.ovh.net',
})

export default {
    getEvents() {
        return apiClient.get('/TShirt')
    },
    getEvent(index) {
        return apiClient.get('/TShirt/page/' + index )
    },
}