import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import pdfFile from "../../assets/resume/Resume083121.pdf";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./Resume.css";

export default function Resume() {
  const [defaultPdfFile] = useState(pdfFile);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdfContainer">
      {defaultPdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer
              fileUrl={defaultPdfFile}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </>
      )}
    </div>
  );
}
