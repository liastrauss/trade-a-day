import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import EventForm from "../Components/EventForm";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/EventForm">
                <EventForm/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews