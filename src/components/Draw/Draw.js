import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

export default function Draw({ color }) {
    return (
        <div>
            <CanvasDraw 
                hideGrid={true}
                canvasWidth={850} 
                canvasHeight={850}
                brushColor={`#${color}`} 
                hideInterface={true}
            />
        </div>
    )
}