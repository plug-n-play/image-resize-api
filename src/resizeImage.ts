import sharp from 'sharp';
import path from 'path';

interface sharpParams {
	width?: number;
	height?: number;
}

export default async function resizeImage(imgName: string, transformedImageName: string, width: number, height: number) {
	const filePath = path.resolve(`images/${imgName}.jpg`)
  try {
		const params: sharpParams = {}
		if (width) {
			params.width = width;
		}
		if (height) {
			params.height = height;
		}

    await sharp(filePath)
      .resize(params)
      .toFile(`images/resized/${transformedImageName}`);
  } catch (error) {
    console.log(error);
  }
}
