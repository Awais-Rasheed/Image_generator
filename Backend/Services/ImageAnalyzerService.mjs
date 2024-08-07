import vision from '@google-cloud/vision';

const CREDENTIALS = JSON.parse(JSON.stringify({
  //download from google-cloud/vision
}));

const CONFIG = {
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email
  }
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const detectLandmark = async (file_path) => {
  try {
    const [result] = await client.labelDetection(file_path);
    const labels = result.labelAnnotations;

    if (labels.length > 0) {
      console.log('Label detected:');
      labels.forEach(label => {
        console.log(label.description);
      });
      return labels.map(label => label.description);
    } else {
      console.log('No Label detected.');
      return [];
    }
  } catch (error) {
    console.error('Error detecting Label:', error);
    throw new Error('Error detecting Label');
  }
};

export default detectLandmark;


