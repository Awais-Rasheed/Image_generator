import fs from 'fs';
import fetch from 'node-fetch';

const url = 'https://api.getimg.ai/v1/essential/text-to-image';

const image_generator = async (prompt) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer YOUR_KEY' //get form getimg.ai
    },
    body: JSON.stringify({
      style: 'photorealism',
      prompt: prompt,
      height: 1024,
      output_format: 'png',
      width: 1024,
      response_format: 'url'
    })
  };

  try {
    const apiRes = await fetch(url, options);
    const json = await apiRes.json();

    if (json.url) {
      const imageRes = await fetch(json.url);
      const directory = 'public/downloads';

      // Ensure the directory exists
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
      }

      const filePath = `${directory}/output_${Date.now()}.png`;
      const fileStream = fs.createWriteStream(filePath);

      imageRes.body.pipe(fileStream);

      fileStream.on('finish', () => {
        console.log('Download completed:', filePath);
      });

      fileStream.on('error', (err) => {
        console.error('Error downloading the image:', err);
      });

      return json.url;
    } else {
      throw new Error('No image URL in response');
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
};

export default image_generator;
