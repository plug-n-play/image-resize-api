import { existsSync } from 'fs';
import path from 'path';
import resizeImage from '../resizeImage';
import {Request, Response} from 'express';

export default async (req: Request, res: Response) => {
	const filename = (req.query.filename as string) || '';
	const width = req.query.width ? Number(req.query.width) : 0;
	const height = req.query.height ? Number(req.query.height) : 0;
	const transformedImageName = `${filename}_${width ? width : 'n'}_${height ? height : 'n'}.jpg`;

	if (!filename) {
		res.status(404).send('Missing required param "filename"');
	} else if ( existsSync(`images/resized/${transformedImageName}`) ) {
		console.log('from fs');
		res.sendFile(path.resolve(`images/resized/${transformedImageName}`));
	} else if (existsSync(`images/${filename}.jpg`)) {
		if (width || height) {
			res.type('image/jpg');
			await resizeImage(filename, transformedImageName, width, height);
			res.sendFile(path.resolve(`images/resized/${transformedImageName}`));
		} else {
			res.sendFile(path.resolve(`images/${filename}.jpg`));
		}
	} else {
		res.sendStatus(404);
	}

}
