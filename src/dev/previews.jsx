import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import EventForm from "../Components/EventForm";
import PickDates from "../Components/DaySchedule";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/EventForm">
                <EventForm/>
            </ComponentPreview>
            <ComponentPreview path="/PickDates">
                <PickDates/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews