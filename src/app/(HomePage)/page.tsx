"use client"
import Uploadcontent from "../components/UploadContent";
import Sponcer from "../components/Sponcer";
import MyPost from "../components/Post";
import { useEffect, useState } from "react";
import { SkeletonLoader } from "../components/ScalatonComponent";
import { postdata } from "../components/data/postData";


export default function HomePage() {

  const [loding, setLoding] = useState(true);
 useEffect(()=>{
   setTimeout(() => {
     setLoding(!loding)
   }, 3000);
 },["ambuj"])

  return (
    <>
      <div className="max-h-screen flex">
        <div className="flex flex-col max-w-[850px] w-[850px] border border-gray-200 p-4 border-l overflow-auto scroll-smooth hide-scrollbar">
          <Uploadcontent />
          <div >
            {loding ? <>
              <SkeletonLoader />
              <SkeletonLoader />
            </>
              : <div>
                  {postdata.map((item, index) => {
                       return (
                          <div key={index}>
                            <MyPost posts={[item]}/>
                          </div>
                       )

                })}
              </div>
            }
          </div>
        </div>
        <div className="w-[350px] max-w-xl bg-white shadow-md rounded-lg p-6">
          <Sponcer />
        </div>
      </div>
    </>
  );
}
