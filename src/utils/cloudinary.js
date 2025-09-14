import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"

cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// upload on claudinary
const uploadOnCloudinary=async (localfilePath)=>{
try {
    if(!localfilePath) return null;
    // upload file on cloudinary
const response=await cloudinary.uploader.upload(localfilePath,{
     resource_type:"auto"
    });
    //file has been uploaded successfully
    console.log("file uploaded on cloudinary",response.url)
   return response;
} catch (error) {
    fs.unlinkSync(localfilePath); //remove locally saved temporary file as uplaod got failed
}

}


export {uploadOnCloudinary}