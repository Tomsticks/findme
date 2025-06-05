import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
config();
cloudinary.config({
    cloud_name: 'dvrpodtdw',
    api_key: '247382469854818',
    api_secret: 'foPXDIHWCP63Sd_C3ExR-9hAtX0',
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
    
