
class Category {
    constructor(categoryId, categoryName, description) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
    }
}

const category = new Category(1, "Stationery", "Writing and office supplies");
console.log(category);