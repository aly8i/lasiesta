import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";
import AuthorizedPostPutDelete from "../../../middlewares/AuthorizedPostPutDelete";
export default AuthorizedPostPutDelete( async function handler(req, res) {
  const {method, query: { id }} = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    console.log(req.headers.authorization)
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
});
