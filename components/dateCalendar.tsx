'use client';

import { parseDate } from "@internationalized/date";
import { Calendar } from "@nextui-org/calendar";
import DateTimer from "./dateTimer";

export default function DateCalendar(){
    return (
        <div className="py-5 bg-red-100">
            <h1 className="text-2xl font-bold text-center">12월</h1>
            <div className="grid grid-row">
                <div className="flex items-center justify-center my-2">
                    <Calendar aria-label="2024년 12월" defaultValue={parseDate("2024-12-14")} color="foreground" classNames={
                        {
                            base:"base-classes",
                            nextButton:"next-button-classes",
                            prevButton:"prev-button-classes",
                            header:"header-classes",
                            title:"title-classes",
                            content:"content-classes",
                            gridWrapper:"grid-wrapper-classes",
                            grid:"grid-classes",
                            gridHeader:"grid-header-classes",
                            gridHeaderRow:"grid-header-row-classes",
                            gridHeaderCell:"grid-header-cell-classes",
                            gridBody:"grid-body-classes",
                            gridBodyRow:"grid-row-classes",
                            cell:"grid-cell-classes",
                            cellButton:"grid-cell-button-classes",
                            pickerWrapper:"picker-wrapper-classes",
                            pickerMonthList:"picker-month-list-classes",
                            pickerYearList:"picker-year-list-classes",
                            pickerHighlight:"picker-highlight-classes",
                            pickerItem:"picker-item-classes",
                            helperWrapper:"helper-wrapper-classes",
                            errorMessage:"error-message-classes",
                        }
                    } isReadOnly />
                </div>
                <DateTimer />
            </div>
        </div>
    )
}