export type Game = {
    id: string;
    title: string;
    description: string;
    category: string[];
    platforms: string[];
    publisher: string;
    releaseDate: string; // ISO format e.g., '2025-06-23'
    ageRating: string; // es. "PEGI 12"
    multiplayer: boolean;
    languages: string[];
    price: number;
    discountPrice?: number;
    availability: boolean;
    image: string;
    userRating?: number; // 0–10
};