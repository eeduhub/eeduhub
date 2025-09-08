// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace these with your Supabase project details
const SUPABASE_URL = "https://cojuxrsbyzxcnjvntcnl.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvanV4cnNieXp4Y25qdm50Y25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjMzOTksImV4cCI6MjA3Mjg5OTM5OX0.glCvsyxqez2t_K9DEPpZ8YVOYRuqsDXCQY-jGCffXes";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
