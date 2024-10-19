"use client";
import React from "react";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import Button from "./button";
import UpLoadIcon from "../assets/icons/UpLoad";
import DeleteIcon from "../assets/icons/delete";
import ChangeIcon from "../assets/icons/change";
import user from "../assets/images/user.png";

interface DropImgProps {
  setDataEmployee: React.Dispatch<any>;
  dataEmployee: any;
}

function DropImg({ dataEmployee, setDataEmployee }: DropImgProps) {
  const handleDrop = (acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];

    setDataEmployee({
      ...dataEmployee,
      image: newFile,
    });
  };

  const handleRemoveFile = () => {
    setDataEmployee({
      ...dataEmployee,
      image: null,
    });
  };

  return (
    <div>
      <p className="text-xs mdl:text-base font-medium mb-3">Add image</p>
      {dataEmployee.image ? (
        <div className="flex gap-5 items-center h-[152px] w-full  relative border border-dashed rounded-lg p-3">
          {dataEmployee.image.path ? (
            <img
              src={user}
              alt={`preview of ${dataEmployee.image.name}`}
              className="  w-[170px] h-[128px] object-cover rounded-xl object-top"
            />
          ) : (
            <img
              src={URL.createObjectURL(dataEmployee.image)}
              alt={`preview of ${dataEmployee.image.name}`}
              className="  w-[170px] h-[128px] object-cover rounded-xl object-top"
            />
          )}
         
          <div>
            <h3 className=" text-nowrap truncate max-w-[calc(100%-50px)] text-base mdl:text-lg font-normal mb-4">
              {dataEmployee.image.name}
            </h3>
            <div className="flex items-center gap-6">
              <Dropzone onDrop={handleDrop}>
                <div className=" flex items-center gap-1 cursor-pointer">
                  <ChangeIcon className="w-4 h-auto" />
                  <p className="text-xs mdl:text-sm font-normal text-gray">
                    Change
                  </p>
                </div>
              </Dropzone>
              <button
                className=" flex items-center gap-1"
                onClick={handleRemoveFile}
              >
                <DeleteIcon className="w-4 h-auto" fill="#026980" />
                <p className="text-xs mdl:text-sm font-normal text-gray">
                  Remove
                </p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Dropzone
          onDrop={handleDrop}
          onReject={(files) => console.log("Rejected files", files)}
          maxSize={3 * 1024 ** 2} // 3MB
          accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.pdf]}
          multiple={false} // تعديل لتفعيل صورة واحدة فقط
          className="h-[146px] relative lg:h-[180px] border-green overflow-hidden border-dashed border-[#B8B8B8] border-2 rounded-2xl"
        >
          <div className=" absolute h-[180px]  w-full inset-0 flex justify-center items-center flex-col gap-3">
            <UpLoadIcon className={"w-9 h-auto"} />
            <Button>
              <span className="font-bold  text-xl">+</span>
              Add image
            </Button>
          </div>
        </Dropzone>
      )}
    </div>
  );
}

export default DropImg;
