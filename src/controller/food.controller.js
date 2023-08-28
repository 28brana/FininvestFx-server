import foodModel from "../models/food.model.js";
import catchAsync from "../utils/catchAsync.js";

export const createFood = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await foodModel.create(body);
  return res.status(200).json({
    data,
  });
});

export const updateFood = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const data = await foodModel.findByIdAndUpdate(id, body);
  return res.status(200).json({
    data,
  });
});
// localhost:8000/food?category=''&sort=''
export const getFoodList = catchAsync(async (req, res) => {
  const { category, sort } = req.query;
  const filters = {};
  let options = {};

  if (category) {
    filters.category = category;
  }

  if (sort) {
    if (sort === "ASC") {
      options = {
        sort: {
          price: 1,
        },
      };
    } else {
      options = {
        sort: {
          price: -1,
        },
      };
    }
  }
  const data = await foodModel.find(filters, null, options);
  return res.status(200).json({
    data,
  });
});

export const getCategory = catchAsync(async (req, res) => {
  const data = await foodModel.find({}, ["category"]).distinct('category');
  return res.status(200).json({
    data,
  });
});
