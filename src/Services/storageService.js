import supabase from "../lib/supabase";

export async function uploadArtworkImage(file) {
    const extension = file.name.split(".").pop();
    const fileName = `${Date.now()}.${extension}`;

    const { error } = await supabase.storage
        .from("artworks")
        .upload(fileName, file);

    if (error) {
        return { error };
    }
    const {
        data: { publicUrl },
    } = supabase.storage
        .from("artworks")
        .getPublicUrl(fileName);

    return {
        publicUrl,
        error: null,
    };
}

// Delete an artwork image from Supabase Storage

export async function deleteArtworkImage(imageUrl) {

    if (!imageUrl) return { error: null };

    // Extract the file name from the public URL
    const fileName = imageUrl.split("/").pop();

    const { error } = await supabase.storage
        .from("artworks")
        .remove([fileName]);

    return { error };
}