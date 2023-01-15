import React, { Component } from "react";

export default class ModalCertificate extends Component {
  render() {
    let modalStyle = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.8)",
    };

    return (
      <div
        className="fixed inset-0 z-50 mt-10 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
        style={modalStyle}
      >
        <div className="relative my-6 mx-auto w-auto max-w-[60%]">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 ">
              <button
                className=" font-semiboldleading-none float-right ml-auto border-0 bg-transparent text-3xl text-black outline-none focus:outline-none"
                onClick={this.props.hide}
              >
                <span className="mr-2 block text-4xl text-black/50 outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-6">
              <img
                src={this.props.img}
                alt=""
                className="w-[100%] object-fill"
              />
              <h4 className="text-black">{this.props.title}</h4>
              <p className="my-4 text-lg leading-relaxed text-slate-500">
                {this.props.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
