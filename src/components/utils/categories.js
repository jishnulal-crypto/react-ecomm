class Category {
    constructor(name) {
      this.name = name;
    }
  
    toString() {
      return this.name;
    }
  }
  
  class CategoryList {
    static All = new Category("All");
    static Men = new Category("men's clothing");
    static Women = new Category("women's clothing");
    static Jewelry = new Category("jewelery");
    static Electronics = new Category("electronics");
    
  
    static categories = [
      CategoryList.All,
      CategoryList.Men,
      CategoryList.Women,
      CategoryList.Jewelry,
      CategoryList.Electronics
    ];
  

    static displayCategories() {
      console.log("List of Categories:");
      CategoryList.categories.forEach(category => {
        console.log(category.toString());
      });
    }
  }
  

  
  export { Category, CategoryList };