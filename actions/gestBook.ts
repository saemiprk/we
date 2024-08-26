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
export async function getGestBook({startIndex, endIndex}){
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.from('gestbook')
    .select('*').range(startIndex, endIndex)
    .order('created_at', { ascending: true });

    const allData = await supabase.from('gestbook').select('*');
    let totalPage = 1;
    if(allData.data && allData.data.length <= 50){
        totalPage = Math.ceil(allData.data.length / 5);
    }

    handleError(error);

    return {
        data,
        totalPage
    };
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