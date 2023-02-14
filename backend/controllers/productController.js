//

const Product = require("../models/productModel");

// create product --admin--
exports.createProduct = async (req, res, next) => {
	const product = await Product.create(req.body);
	res.status(201).json({
		sucess: true,
		product,
	});
};

// get all product --admin--
exports.getAllProducts = async (req, res, next) => {
	const product = await Product.find();
	res.status(200).json({
		sucess: true,
		product,
	});
};

// update product  --admin update--
exports.updateProduct = async (req, res, next) => {
	let product = await Product.findById(req.params.id);
	if (!product) {
		return res.status(500).json({
			sucess: false,
			message: "Product not found",
		});
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
};

// Get product details
exports.getProductDetails = async(req ,res ,next) => {
	const product = await Product.findById(req.params.id);
	if(!product){
		res.status(500).json({
			sucess :false ,
			message :'Product not found'
		})
	}
	
	res.status(200).json({
		sucess :true ,
		product 
	})
}

// Delete Product ---admin---
exports.deleteProduct = async (req ,res ,next) =>{
	const product = await Product.findById(req.params.id);
	if(!product){
		return res.status(500).json({
			sucess :false ,
			message:'Product not found'
		})
		
	}
	await product.remove();
	res.status(200).json({
		sucess :true ,
		message:'Product Deleted Successfully'
	})
}
