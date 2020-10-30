import axios from "axios";

class GetScores {
    config = {
        baseURL: "http://localhost",
        port: 3001
    };
    constructor() {
        this.httpClient = axios.create({
            baseURL: `${this.config.baseURL}:${this.config.port}`
        });
    }

    getScores() {
        return this.httpClient
            .get("/scores")
            .then(response =>
                response.data
            );
    }
}

export default new GetScores();