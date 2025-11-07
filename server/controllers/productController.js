import prisma from '../config/prisma.js'

export const create = async (req, res, next) => {
  try {
    const { title, description, price, quantity, categoryId, images } = req.body;
    const product = await prisma.product.create({
      data: {
        title: title,
        description: description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        categoryId: parseInt(categoryId),
        images: {
          create: images.map((item) => ({
            asset_id: item.asset_id,
            public_id: item.public_id,
            url: item.url,
            secure_url: item.secure_url
          }))
        },
      }
    })
    res.send('Hello create product')
  } catch (error) {
    next(error)
  }
};

export const list = async (req, res, next) => {
  try {
    // const { count } = req.params;
    res.send('Hello list product')
  } catch (error) {
    next(error)
  }
};

export const update = async (req, res, next) => {
  try {
    // const { id } = req.params;
    res.send('Hello update product')
  } catch (error) {
    next(error)
  }
};

export const remove = async (req, res, next) => {
  try {
    // const { id } = req.params;
    res.send('Hello remove product')
  } catch (error) {
    next(error)
  }
};

export const listBy = async (req, res, next) => {
  try {

    res.send('Hello listBy product')
  } catch (error) {
    next(error)
  }
};

export const searchFilters = async (req, res, next) => {
  try {

    res.send('Hello searchFilters product')
  } catch (error) {
    next(error)
  }
};