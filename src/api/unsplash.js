import axios from "axios";

export default axios.create({
    baseUrl: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID jqxad5_MrYegyONeisR7dClZdAx0uz-GBjJrOneTNaY'
    }
})