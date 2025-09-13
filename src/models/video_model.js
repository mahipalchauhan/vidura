import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema(
    {
videoFile:{
    type:string, // caludinary  url,
    require:true
},
thumbnail:{
    type:string, // caludinary  url,
    require:true
},
title:{
    type:string, 
    require:true
},
description:{
    type:string, 
    require:true
},
duration:{
    type:number, 
    require:true
},
views:{
    type:number,
    default:0
},
ispublished:{
    type:Boolean,
    default:true
},
owner:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
}

    },
    {
        timestamps:true
    }
 )

 videoSchema.plugin(mongooseAggregatePaginate)
 
 export const Video=mongoose.model("Video",videoSchema)
