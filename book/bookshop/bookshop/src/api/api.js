export class Api {
    constructor() {
        this.link = import.meta.env.VITE_URL;
        this.key = import.meta.env.VITE_KEY;
        this.getCardsInfo = this.getCardsInfo.bind(this);
    }

    async getCardsInfo({ activeGenre, limit }) {
        try {
            const response = await fetch(`${this.link}volumes?q=subject:${activeGenre}&key=${this.key}&printType=books&startIndex=0&maxResults=${limit}&langRestrict=en`);
            const json = await response.json();
            const books = json.items || [];
            return books;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }
}

export const api = new Api();
