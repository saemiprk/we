"use server";

import { Database } from "types_db";
import { createServerSupabaseClient } from "utils/supabase/server";

export type GestBookRow = Database["public"]["Tables"]["gestbook"]["Row"];
export type GestBookRowInsert = Database["public"]["Tables"]["gestbook"]["Insert"];
export type GestBookRowUpdate = Database["public"]["Tables"]["gestbook"]["Update"];

function handleError(error){
    if(error){
        console.error(error);
        throw error;
    }
}

// Get
export async function getGestBook(endIndex: number){
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.from('gestbook')
    .select('*').range(0, endIndex);

    handleError(error);

    return data;
}

// Create
export async function createGestBook(gestbook: GestBookRowInsert){
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.from('gestbook').insert({
        ...gestbook,
        created_at: new Date().toISOString(),
    });

    handleError(error);

    return data;
}

// Delete
export async function deleteGestBook(gestbook){
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.from('gestbook').delete().eq('id', gestbook.id).eq('password', gestbook.password);

    handleError(error);

    return data;
}