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
    static Men = new Category("Men's Clothing");
    static Women = new Category("Women's Clothing");
    static Jewelry = new Category("Jewelry");
    static Electronics = new Category("Electronics");
  
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
  

  
