class Product {
  //   title = "DEFAULT";
  //   image;
  //   description;
  //   price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.image = image;
    this.description = desc;
    this.price = price;
  }
}

class Parent {
  constructor(hookElementId, shouldRender = true) {
    this.hookElementId = hookElementId;
    if (shouldRender === true) { // controlling the render method not to run before the initialization in subclass does not finish.
      this.render();
    }
  }
  render() {}
  createRootElement(tag, cssClass, attributes) {
    const rootEl = document.createElement(tag);
    if (cssClass) {
      rootEl.className = cssClass;
    }
    if (attributes && attributes.length > 0) {
      // attributes.forEach((attr) => {
      //   rootEl.setAttribute(attr.name, attr.value);
      // });
      for (const attr of attributes) {
        rootEl.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookElementId).append(rootEl);
    return rootEl;
  }
}

class Cart extends Parent {
  items = [];
  get totalAmount() {
    const sum = this.items.reduce((preValue, curItem) => {
      return preValue + curItem.price;
    }, 0);
    return sum;
  }
  set cartItems(value) {
    this.items = value;
    this.totalEl.innerHTML = `Total : $${this.totalAmount}`;
  }
  constructor(hookElementId) {
    super(hookElementId, false);
    this.orderProduct = () => {
      console.log("Ordering");
      console.log(this.items);
    };
    this.render();
  }
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
  // orderProduct (){
  //   console.log("Ordering");
  //   console.log(this.items);
  // }
  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
            <pre>Total : $${0}</pre >
            <button class="add">Order Now!</button>
        `;
    const btn = cartEl.querySelector("button");
    btn.addEventListener("click", this.orderProduct);
    // alternative method  with arrow function
    // btn.addEventListener('click',()=>this.orderProduct())
    this.totalEl = cartEl.querySelector("pre");
  }
}

class ProductItem extends Parent {
  constructor(product, hookElementId) {
    super(hookElementId, false);
    this.product = product;
    this.render();
  }
  addToCart() {
    App.addProductToCart(this.product);
  }
  render() {
    const li = this.createRootElement("li", "product-item");
    li.innerHTML = `
                <img src="${this.product.image}" alt="${this.product.title}"/>
                <pre>${this.product.title}</pre>
                <div>${this.product.description}</div>
                <div>$${this.product.price}</div>
                <button class="add">Add to Cart</button>
            `;
    const btnAdd = li.querySelector("button");
    btnAdd.addEventListener("click", this.addToCart.bind(this));
  }
}

class ProductList extends Parent {
  #prodList = [];
  constructor(hookElementId) {
    super(hookElementId,false);
    this.fetchData();
  }
  fetchData() {
    this.#prodList = [
      new Product(
        "Product 1",
        "https://cnet4.cbsistatic.com/img/zG2dvgLqxmZKueB15EjZ7BIBUEQ=/980x551/2019/09/17/2a8281d2-171b-49a0-8a84-97058bae74f6/67-apple-watch-series-5.jpg",
        "Good Product",
        100
      ),
      new Product(
        "Product 2",
        "https://static.arageek.com/wp-content/uploads/2019/07/ipad.jpg",
        "Nice Product",
        120
      ),
    ];
    this.render();
  }
  render() {
    const ul = this.createRootElement("ul", "product-list");
    ul.id = "product-list";
    if (this.#prodList && this.#prodList.length > 0) {
      this.#prodList.forEach((product) => {
        const productItem = new ProductItem(product, "product-list");
      });
    }
  }
}

class Shop {
  render() {
    this.cart = new Cart("app");
    const productList = new ProductList("app");
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
