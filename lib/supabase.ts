import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dev-project.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dev-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export type ScannedObject = {
  id: string;
  image_url: string | null;
  labels: Array<{
    description: string;
    score: number;
  }>;
  created_at: string;
};
