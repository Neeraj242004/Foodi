const Product = require("../models/Product");

// CREATE
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.json(product);
};

// READ ALL
const getProducts = async (req, res) => {

  res.json([
    {
      title: "Cold Coffee",
      price: 180,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
      ingredients: "Coffee, Milk, Ice"
    },
    {
      title: "Garlic Bread",
      price: 160,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
      ingredients: "Bread, Garlic, Cheese"
    },
    {
      title: "Margherita Pizza",
      price: 299,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
      ingredients: "Cheese, Tomato, Basil"
    },
    {
      title: "Veg Burger",
      price: 199,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      ingredients: "Patty, Cheese, Lettuce"
    },
    {
      title: "White Sauce Pasta",
      price: 249,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
      ingredients: "Cream, Garlic, Cheese"
    },
    {
      title: "French Fries",
      price: 149,
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800&auto=format&fit=crop",
      ingredients: "Potato, Salt"
    },
    {
      title: "Paneer Tikka",
      price: 349,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
      ingredients: "Paneer, Spices"
    },
    {
      title: "Chicken Biryani",
      price: 399,
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800&auto=format&fit=crop",
      ingredients: "Rice, Chicken, Spices"
    },
    {
      title: "Chocolate Cake",
      price: 220,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
      ingredients: "Chocolate, Cream"
    },
    {
      title: "Veg Momos",
      price: 170,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
      ingredients: "Veg Filling, Sauce"
    },
    {
      title: "Tandoori Chicken",
      price: 450,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
      ingredients: "Chicken, Yogurt, Spices"
    },
    {
      title: "Ice Cream",
      price: 120,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop",
      ingredients: "Milk, Sugar"
    }
  ]);

};

// READ ONE
const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.json(product);
};

// UPDATE
const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

// DELETE
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
};

module.exports = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};