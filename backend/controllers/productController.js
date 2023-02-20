//

const Product = require("../models/productModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apifeatures");

// create product --admin--
exports.createProduct = catchAsyncErrors( async (req, res, next) => {
	req.body.user = req.user.id;
	const product = await Product.create(req.body);
	res.status(201).json({
		sucess: true,
		product,
	});
});

// get all product --admin--
exports.getAllProducts = catchAsyncErrors( async (req, res, next) => {
	const resultPerPage = 8;
	const productsCount = await Product.countDocuments();
	const apifeature = new ApiFeatures(Product.find() ,req.query).search().filter().pagination(resultPerPage);
	const product = await apifeature.query;
	res.status(200).json({
		sucess: true,
		product,
		productsCount
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
