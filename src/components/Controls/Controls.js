import React from 'react'

export default function Controls({ handleColorChange }) {

    return (
        <div>
            <sl-button type="success" value="22C55E" onClick={handleColorChange}>Get Ready</sl-button>
            <sl-button type="warning" value="F59E0B" onClick={handleColorChange}>Do</sl-button>
            <sl-button type="danger" value="EF4444" onClick={handleColorChange}>Done</sl-button>
        </div>
    )
}
