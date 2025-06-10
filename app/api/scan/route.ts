import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { ImageAnnotatorClient } from '@google-cloud/vision';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'Aucune image fournie' },
        { status: 400 }
      );
    }

    // Créer le dossier tmp s'il n'existe pas
    const tmpDir = join(process.cwd(), 'tmp');
    await writeFile(join(tmpDir, 'tmp'), '').catch(() => {});

    // Sauvegarder le fichier temporairement
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${uuidv4()}-${file.name}`;
    const filepath = join(tmpDir, filename);
    await writeFile(filepath, buffer);

    // Initialiser le client Vision
    const client = new ImageAnnotatorClient({
      keyFilename: join(process.cwd(), 'google-credentials.json'),
    });

    // Analyser l'image
    const [result] = await client.labelDetection(filepath);
    const labels = result.labelAnnotations || [];

    // Sauvegarder dans Supabase
    const { error: dbError } = await supabase
      .from('scanned_objects')
      .insert({
        image_url: null, // Pour l'instant, on ne stocke pas l'image
        labels: labels.map(label => ({
          description: label.description,
          score: label.score,
        })),
      });

    if (dbError) {
      console.error('Erreur Supabase:', dbError);
    }

    // Nettoyer le fichier temporaire
    await writeFile(filepath, '').catch(() => {});

    return NextResponse.json({
      labels: labels.map(label => ({
        description: label.description,
        score: label.score,
      })),
    });
  } catch (error) {
    console.error('Erreur lors du scan:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'analyse de l\'image' },
      { status: 500 }
    );
  }
}
