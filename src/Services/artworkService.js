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

export async function createArtwork(artwork) {
    return await supabase
        .from("artworks")
        .insert([artwork])
        .select();
}

// Update an existing artwork by its ID

export async function updateArtwork(id, artwork) {
    const { data, error } = await supabase
        .from("artworks")
        .update(artwork)
        .eq("id", id)
        .select();

    return { data, error };
}

// Delete an artwork by its ID

export async function deleteArtwork(id) {
    const { error } = await supabase
        .from("artworks")
        .delete()
        .eq("id", id);

    return { error };
}

export async function getArtwork(id){

    return await supabase
        .from("artworks")
        .select("*")
        .eq("id",id)
        .single();

}