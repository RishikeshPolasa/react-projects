import React, { Component } from "react";
import axios from "axios";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // Create a ref for the input element
    this._submitHandler = this._submitHandler.bind(this);
  }

  async uploadFile(fileData) {
    try {
      const formData = new FormData();
      formData.append("image", fileData);
      const res = await axios.post("https://api.imgbb.com/1/upload", formData, {
        params: {
          key: "6276e6647788a7d4cbb033439ae1a6cf",
        },
      });
      this.props.callBackFunction(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async fileValidation(fileData) {
    await this.uploadFile(fileData);
  }

  _submitHandler(e) {
    if (e.target.files?.length > 0) {
      const fileData = e.target.files[0];
      this.fileValidation(fileData);
    }
  }

  // Expose the inputRef through a method
  getInputRef() {
    return this.inputRef.current;
  }

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={(e) => this._submitHandler(e)}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default FileUpload;
