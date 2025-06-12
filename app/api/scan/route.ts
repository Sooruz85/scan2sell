export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import Replicate from 'replicate';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

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

    // Sauvegarder le fichier temporairement
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${uuidv4()}-${file.name}`;
    const filepath = join(process.cwd(), 'tmp', filename);
    await writeFile(filepath, buffer);

    // Analyser l'image avec Replicate
    const output = await replicate.run(
      "yorickvp/recognize-anything:2e57bd1a8c28e0c3cf6d45e477c0e9a3a0f7d6878e0b92942e49e14745f2307a",
      {
        input: {
          image: filepath,
          task: "object_detection",
        }
      }
    );

    // Nettoyer le fichier temporaire
    await writeFile(filepath, '').catch(() => {});

    // Formater les résultats
    const labels = Array.isArray(output) ? output : [];
    const category = labels[0]?.label || 'Non catégorisé';
    const suggestedName = labels[0]?.label || 'Objet non identifié';
    const suggestedDescription = `Objet identifié comme ${labels.map(l => l.label).join(', ')}`;

    return NextResponse.json({
      labels: labels.map(label => ({
        label: label.label,
        confidence: label.confidence,
      })),
      category,
      suggestedName,
      suggestedDescription,
    });
  } catch (error) {
    console.error('Erreur lors du scan:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'analyse de l\'image' },
      { status: 500 }
    );
  }
}
