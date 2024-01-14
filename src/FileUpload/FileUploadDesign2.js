import React from "react";
import FileUpload from ".";
import "./FileUploadDesign2.css";
import FileUploadSvg2 from "./FileUploadSvg2";

class FileUploadDesign2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: "",
      loader: false,
    };
  }

  handleUpload = () => {
    // Ensure fileUploadRef is not undefined before accessing its properties
    const inputRef = this.fileUploadRef.getInputRef();
    if (inputRef) {
      inputRef.click(); // Trigger the click on the input element
    }
  };

  callBackFunction = (res) => {
    console.log("response", res);
    this.setState((prevState) => ({
      ...prevState,
      selectedFile: res.data,
    }));
    // Handle the response as needed in FileUploadDesign2
  };

  render() {
    return (
      <div className="fileUpload">
        <div className="fileWrapper design2" onClick={this.handleUpload}>
          <div className="imageWrapper">
            <FileUploadSvg2 />
          </div>
          <FileUpload
            ref={(ref) => (this.fileUploadRef = ref)}
            callBackFunction={this.callBackFunction}
          />
          <div className="fileText">Upload a Image </div>
        </div>
        {this.state.selectedFile && (
          <div className="selectedFileWrapper">
            <div className="selectedFile">
              <img src={this.state.selectedFile.url} alt="fileImage" />
              <span className="filename">{this.state.selectedFile?.title}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FileUploadDesign2;
