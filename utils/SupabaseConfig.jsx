import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://zqfitgzenqljeyikmave.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZml0Z3plbnFsamV5aWttYXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MjUxNzgsImV4cCI6MjAyNzQwMTE3OH0.tKqNjMcshE3rqHjTDPk3zF53-QmqTo9C0Nz13cI0xso')