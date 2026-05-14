import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemModel from "./ItemModel";

const Menu = () => {

  const [selectedItem, setSelectedItems] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [foodMenu, setFoodMenu] = useState([]);
  const [search, setSearch] = useState("");

  // Open Modal
  const isopenModel = (item) => {
    setSelectedItems(item);
    setOpenModel(true);
  };

  // Close Modal
  const iscloseModel = () => {
    setSelectedItems(null);
    setOpenModel(false);
  };

  // Fetch Products
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.get("http://localhost:5000/api/products");

        console.log("API DATA:", res.data);

        // IMPORTANT FIX
        setFoodMenu(Array.isArray(res.data) ? res.data : []);

      } catch (error) {

        console.log("API ERROR:", error);

      }

    };

    fetchProducts();

  }, []);

  console.log("FOOD MENU:", foodMenu);

  // Filter Menu
  const filteredMenu = foodMenu.filter((food) =>
    food?.title
      ?.toLowerCase()
      ?.includes(search.toLowerCase())
  );

  return (

    <div
      id="menu"
      className="py-20 bg-orange-100 min-h-screen"
    >

      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">

          <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-black">
            Our Menu
          </h1>

          <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>

          <p className="text-gray-700">
            Crafted with passion and the finest ingredients
          </p>

        </div>

        {/* Search */}
        <div className="flex justify-center mb-12">

          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-full border border-gray-300 outline-none shadow-md"
          />

        </div>

        {/* Food Cards */}
        <div className="max-w-6xl mx-auto">

          {
            filteredMenu.length > 0 ? (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                  filteredMenu.map((food, index) => (

                    <div
                      key={index}
                      onClick={() => isopenModel(food)}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
                    >

                      <img
                        className="w-full h-72 object-cover"
                        src={food?.image}
                        alt={food?.title}
                      />

                      <div className="p-5">

                        <div className="flex items-center justify-between mb-4">

                          <h1 className="text-xl font-semibold text-black">
                            {food?.title}
                          </h1>

                          <span className="text-red-600 font-bold text-lg">
                            ₹{food?.price}
                          </span>

                        </div>

                        <p className="text-gray-600 text-sm">
                          {food?.ingredients}
                        </p>

                      </div>

                    </div>

                  ))
                }

              </div>

            ) : (

              <div className="text-center text-2xl text-gray-700">
                No food items found
              </div>

            )
          }

        </div>

        {/* Modal */}
        <ItemModel
          isOpen={openModel}
          onClose={iscloseModel}
          item={selectedItem}
        />

      </div>

    </div>

  );

};

export default Menu;