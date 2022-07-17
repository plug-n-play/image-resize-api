import express from 'express';
import getImage from './routes/getImages';
const app = express();
const port = 3000;

app.get('/api/images', getImage);

// Capture All 404 errors
app.use(function (_, res) {
	res.status(404).send('Unable to find the requested resource');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
