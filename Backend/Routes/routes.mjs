import express from 'express'
import multer from 'multer';
import * as generateContoller from '../Controller/ImageGeneratorControl.mjs'
import detectLandmarkController from '../Controller/ImageAnalyzerController.mjs'
const router = express.Router();
const upload = multer({ dest: 'uploads/' });
//handle route for text generator
router.post('/generate', generateContoller.textGenerator);

//handle route for image generator
router.post('/image', generateContoller.imageGenerator);

//handle route for image analyzer
router.post('/detect-landmark', upload.single('file'), detectLandmarkController);

export default router;