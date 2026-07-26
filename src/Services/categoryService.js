import supabase from "../lib/supabase";


export async function getAllCategories() {
    return await supabase
        .from("categories")
        .select("*")
        .order("name");
}

export async function createCategory(category) {
    return await supabase
        .from("categories")
        .insert(category)
        .select();
}

export async function updateCategory(id, category) {
    return await supabase
        .from("categories")
        .update(category)
        .eq("id", id)
        .select();
}

export async function deleteCategory(id) {
    return await supabase
        .from("categories")
        .delete()
        .eq("id", id);
}