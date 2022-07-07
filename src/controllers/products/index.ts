import { IProduct } from "./../../types/product";
import Product from "../../models/product";
import { Response, Request } from "express";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const productFind: IProduct | null = await Product.findById(req.params.id);

    res.status(200).json(productFind);
  } catch (error) {
    throw error;
  }
};
