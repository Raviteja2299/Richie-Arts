import supabase from "../../lib/supabase";

export async function createMessage(message) {
    const { data, error } = await supabase
        .from("messages")
        .insert([message])
        .select();

    return { data, error };
}

export async function getMessages() {
    const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

    return { data, error };
}

export async function updateMessageStatus(id, status) {
    const { data, error } = await supabase
        .from("messages")
        .update({ status })
        .eq("id", id)
        .select();

    return { data, error };
}

export async function deleteMessage(id) {
    const { error } = await supabase
        .from("messages")
        .delete()
        .eq("id", id);

    return { error };
}