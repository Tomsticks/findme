import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,

})
  
export async function uploadImagesToCloudinary(
    base64Images: string[],
    folder: string = 'newapp'
  ): Promise<string[]> {
    const results = await Promise.all(
      base64Images.map((image) =>
        cloudinary.uploader
          .upload(image, { folder })
          .then((res) => res.secure_url)
      )
    )
    return results
}
    
