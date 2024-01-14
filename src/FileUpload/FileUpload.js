import React from "react";
import FileUpload from ".";
import "./style.css";
import FileUploadSvg from "./uploadsvg1.png";

export default class FileUploadDesign1 extends FileUpload {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {
      selectedFile: "",
    };
  }

  handleUpload() {
    if (this.fileInputRef && this.fileInputRef.current) {
      this.fileInputRef.current.click();
    }
  }

  render() {
    return (
      <div className="fileWrapper" onClick={() => this.handleUpload()}>
        FileUploadDesign
        <div className="imageWrapper">
          <img src={FileUploadSvg} alt="fileupload" />
        </div>
        <input
          ref={this.fileInputRef}
          type="file"
          onChange={(e) => this._submitHandler(e)}
        />
      </div>
    );
  }
}
