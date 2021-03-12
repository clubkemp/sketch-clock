import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

export default function Draw() {
    return (
        <div>
            <CanvasDraw 
                hideGrid={true}
                canvasWidth={800} 
                canvasHeight={800} 
                hideInterface={true}
            />
        </div>
    )
}