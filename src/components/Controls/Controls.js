import React from 'react'

export default function Controls({ handleColorChange }) {

    return (
        <div>
            <sl-button type="success" value="22C55E" onClick={handleColorChange}>Get Ready</sl-button>
            <sl-button type="warning" value="F59E0B">Do</sl-button>
            <sl-button type="danger" value="F59E0B">Done</sl-button>
        </div>
    )
}
