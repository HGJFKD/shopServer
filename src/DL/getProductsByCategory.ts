import ProductsModel from "../Types/typeProductsModel";

// Get all data func
export async function getProductsByCategory(category_id: string): Promise<typeof ProductsModel> {

    
    const res = await ProductsModel.findByIdAndUpdate(
        { _id: category_id },
        { $inc: { 'clicks': 1 } },
        { new: true }
    ).exec()

    return res;
}