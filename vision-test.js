const vision = require('@google-cloud/vision');

// Créer un client Vision
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'google-credentials.json' // Assurez-vous d'avoir ce fichier avec vos credentials
});

async function analyzeImage() {
  try {
    // Lire l'image locale
    const [result] = await client.labelDetection('test.jpeg');
    const labels = result.labelAnnotations;

    console.log('Labels détectés:');
    labels.forEach(label => {
      console.log(`${label.description} (${Math.round(label.score * 100)}% de confiance)`);
    });
  } catch (error) {
    console.error('Erreur lors de l\'analyse de l\'image:', error);
  }
}

analyzeImage();
