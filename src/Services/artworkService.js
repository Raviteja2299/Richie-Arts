import supabase from "../lib/supabase";

export async function getFeaturedArtworks() {
    const { data, error } = await supabase
        .from("artworks")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);

    return { data, error };
}

export async function getAllArtworks() {
    const { data, error } = await supabase
        .from("artworks")
        .select("*")
        .order("created_at", { ascending: false });

    return { data, error };
}