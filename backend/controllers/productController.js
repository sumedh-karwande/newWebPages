//

const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create product --admin--
exports.createProduct = catchAsyncErrors( async (req, res, next) => {
	const product = await Product.create(req.body);
	res.status(201).json({
		sucess: true,
		product,
	});
});

// get all product --admin--
exports.getAllProducts = catchAsyncErrors( async (req, res, next) => {
	const product = await Product.find();
	res.status(200).json({
		sucess: true,
		product,
	});
});

// update product  --admin update--
exports.updateProduct = catchAsyncErrors( async (req, res, next) => {
	let product = await Product.findById(req.params.id);
	if (!product) {
		return next(new ErrorHander("Product not found", 404));
	}
	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
	res.status(200).json({
		sucess:true ,
		product ,
	})
});

// Get product details
exports.getProductDetails = catchAsyncErrors( async(req ,res ,next) => {
	const product = await Product.findById(req.params.id);
	if(!product){
		return next(new ErrorHander("Product not found", 404));
	}
	
	res.status(200).json({
		sucess :true ,
		product 
	})
})

// Delete Product ---admin---
exports.deleteProduct = async (req ,res ,next) =>{
	const product = await Product.findById(req.params.id);
	if(!product){
		return next(new ErrorHander("Product not found", 404));
		
	}
	await product.remove();
	res.status(200).json({
		sucess :true ,
		message:'Product Deleted Successfully'
	})
}
