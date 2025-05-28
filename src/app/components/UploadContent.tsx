"use client";

import React, { useRef, useState } from "react";
import { Paperclip, SmilePlus, Send, X } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "../UiComponents/Button";
import { set } from "mongoose";
import toast from "react-hot-toast";
const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const Uploadcontent = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "video/mp4", "video/mov"];
      if (!allowedTypes.includes(file.type)) {
        alert("Only images and videos (PNG, JPG, JPEG, MP4, MOV) are allowed!");
        return;
      }
      setSelectedFile(file);
      const fileURL = URL.createObjectURL(file);
      setPreviewURL(fileURL);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const addEmoji = (emojiData: any) => {
    setText((prev) => prev + emojiData.emoji);
    setShowPicker(false);
  };

  const clearFile = () => {
    setSelectedFile(null);
    setPreviewURL(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
 function dataUploading() {
  setLoading(true);
    if (!text && !selectedFile) {
       toast.error("Please add some text or select a file to post.");
      setLoading(false);
      return;
    }
  
    setSelectedFile(null);
    setPreviewURL(null);
    setText("");
    toast.success("Post uploaded successfully!");
    setLoading(false);
  }
  return (
    <div className="flex flex-col w-full gap-4 mt-6 relative bg-gray-100 rounded-lg ">
      <h1 className="font-semibold text-2xl italic">What&apos;s on your mind?</h1>
      <div className="w-[95%] h-[88px] flex gap-2 bg-gray-100 rounded-sm px-4 mx-4 py-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Post a thought..."
          className="flex-1 bg-transparent focus:outline-none text-sm border rounded-md resize-none p-3 border-gray-300"
        />
      </div>

      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg, video/mp4, video/mov"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {previewURL && (
        <div className="relative w-20 h-20 rounded-md overflow-hidden border border-gray-300">
          {selectedFile?.type.startsWith("image") ? (
            <img src={previewURL} alt="Selected" className="w-full h-full object-cover" />
          ) : (
            <video src={previewURL} className="w-full h-full object-cover" />
          )}
          <button
            onClick={clearFile}
            className="absolute top-0 right-0 bg-black bg-opacity-50 text-white p-1 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="flex gap-2 items-center">
        <button
            onClick={handleIconClick}
            className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
            type="button"
            aria-label="Attach file"
        >
            <Paperclip className="w-5 h-5" />
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowPicker(!showPicker)}
            className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
            aria-label="Pick emoji"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500"
            >
              <SmilePlus className="w-5 h-5" />
            </Button>
          </button>

          {showPicker && (
            <div className="absolute bottom-12 top-12 left-0 z-10 bg-white shadow-md rounded-lg">
              <EmojiPicker onEmojiClick={(e) => addEmoji(e)} />
            </div>
          )}
        </div>

        <button 
         disabled={loading} onClick={dataUploading}
        className="bg-indigo-600 text-white rounded-xl cursor-pointer flex justify-center items-center gap-2 px-3 py-1" 
        >
          Post <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Uploadcontent;
