import image_generator from "../Services/ImageGeneratorService.mjs";
import TextGenerator from "../Services/TextGeneratorService.mjs";

export const imageGenerator = async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await image_generator(prompt);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const textGenerator = async (req, res) => {
    try {
        const { prompt } = req.body;

        const text = await TextGenerator(prompt); // Ensure text is awaited
        res.json({ generatedContent: text });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



