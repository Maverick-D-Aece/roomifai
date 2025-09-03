import express from 'express';
import multer from 'multer';
import axios from 'axios';
import fs from 'fs';
// import { saveToS3, saveMeasurementsToDB } from '../services/storage';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('photo'), async (req, res) => {
  try {
    // TODO: Save file to S3/MinIO
    // const photoUrl = await saveToS3(req.file);

    // Call Python microservice for dimension extraction
    const microserviceUrl = 'http://localhost:8000/extract-dimensions';
    const formData = new (require('form-data'))();
    formData.append('file', fs.createReadStream(req.file.path));
    const response = await axios.post(microserviceUrl, formData, {
      headers: formData.getHeaders(),
    });

    const { width, length, height } = response.data;

    // TODO: Save measurements to Postgres
    // await saveMeasurementsToDB({ width, length, height });

    res.json({ width, length, height });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process room photo' });
  }
});

export default router;

