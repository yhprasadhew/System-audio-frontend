const { createClient } = require("@supabase/supabase-js")

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxaWtpbHl3enJhZ3p4cXdtd3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDA2NzcsImV4cCI6MjA5MDcxNjY3N30.Aoj1Yx8FGmE6R-hXHjbUYRnPb8DAR7s5uThu_afFh34"

const supabase_url = "https://tqikilywzragzxqwmwzc.supabase.co"

export const supabase = createClient(supabase_url, anon_key)

export default function MediaUpload(file) {
   supabase.storage.from("images").upload(file.name, file, {
      cacheControl: "3600",
      upsert: false

   }).then(() => {
    const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl
    console.log("Public URL:", publicUrl)
   }
}