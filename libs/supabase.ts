import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://chdjogsgrbibviiyuvkz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_1LUru38kWb60_t_19alQ3A_Hm5DhcOH";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
