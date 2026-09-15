import {
    createClient
}
from
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const SUPABASE_URL =
'https://YOUR-PROJECT-ID.supabase.co';


const SUPABASE_ANON_KEY =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyZGVzeXNrdmNtdmR5cmJ1dGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0MjUwMjgsImV4cCI6MjEwNTAwMTAyOH0.-CDfX2riD_dv_DUSNMVzNqw8OxotFu9vGxK496KMOmQ';


export const supabase =
createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
