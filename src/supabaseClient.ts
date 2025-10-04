import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("❌ Supabase URL or Key is missing. Check your .env file!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
