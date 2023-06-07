import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import EventForm from "../Components/EventForm";
import PickDates from "../Components/DaySchedule";
import AddEvent from "../pages/AddEvent";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/EventForm">
                <EventForm/>
            </ComponentPreview>
            <ComponentPreview path="/PickDates">
                <PickDates/>
            </ComponentPreview>
            <ComponentPreview path="/AddEvent">
                <AddEvent/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews