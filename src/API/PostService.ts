export class PostService {
    static async getCategories() {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php'
        ).then((response) => response.json());
        return response;
    }
    
    static async getCategory(name: string) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        ).then((response) => response.json());
        return response;
    }
    
    static async getRecipe(id: number) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        ).then((response) => response.json());
        return response;
    }
    
    static async getRRandomRecipe() {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php'
        ).then((response) => response.json());
        return response;
    }
}