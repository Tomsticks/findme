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
): Promise<{ url: string; public_id: string }[]> {
  const results = await Promise.all(
    base64Images.map((image) =>
      cloudinary.uploader.upload(image, { folder }).then((res) => ({
        url: res.secure_url,
        public_id: res.public_id,
      }))
    )
  )
  return results
}


export async function deleteImagesFromCloudinary(
  publicIds: string[]
): Promise<{ public_id: string; result: string }[]> {
  const results = await Promise.all(
    publicIds.map(async (id) => {
      try {
        const res = await cloudinary.uploader.destroy(id)
        return { public_id: id, result: res.result } // result: "ok", "not found", etc.
      } catch (error) {
        return { public_id: id, result: 'error' }
      }
    })
  )
  return results
}