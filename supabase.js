import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://jabuqmkkbjufwwvhedum.supabase.co'
const supabaseKey = 'sb_publishable_tN7vwmF4zkhynCDiROID2A_TKyo4KI-'

export const supabase = createClient(supabaseUrl, supabaseKey)