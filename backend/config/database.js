// database connection 
import mongoose from 'mongoose';


const connectDatabase = () => {
    mongoose.set("strictQuery", false);
  mongoose
    .connect(`mongodb://localhost:27017/Ecommerce`)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

export default connectDatabase;