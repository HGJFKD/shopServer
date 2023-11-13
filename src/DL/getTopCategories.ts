import ClicksCategoriesModel, { category } from "../Types/typeClicksCategoriesModel";

// Get all data func
export async function getTopCategories(): Promise<category[] | category | undefined> {
    const topObjects = await ClicksCategoriesModel.find({ clicks: { $exists: true } })
        .sort({ clicks: -1 })
        .limit(5);
    return topObjects;
}