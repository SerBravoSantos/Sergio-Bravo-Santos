import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 

export default function () {
    return (
        <section>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                firstDay={1}
                initialDate={"2022-07"}
                weekends={true}
                aspectRatio={2}
                eventColor={"red"}
                eventMinHeight={"50px"}
                events={[
                    { title: 'VS: SERGIO', date: '2022-07-03', color: 'blue' },
                    { title: 'TOB: DAVOR', date: '2022-07-04', color: 'green' },
                    { title: 'CK: EMMA', date: '2022-07-04', color: 'orange' },
                    { title: 'TIB: SEDA', date: '2022-07-05', color: 'cyan' },
                    { title: 'CBB: OSCAR', date: '2022-07-06', color: 'light-yellow' },
                    { title: 'CK: BISWU', date: '2022-07-07', color: 'orange' },
                    { title: 'VS: CEREN', date: '2022-07-10', color: 'blue' },
                    { title: 'TOB: ANDRIU', date: '2022-07-11', color: 'green' },
                    { title: 'CK: AYDEN', date: '2022-07-11', color: 'orange' },
                    { title: 'TIB: ALBERTO', date: '2022-07-12', color: 'cyan' },
                    { title: 'CBB: HATICE', date: '2022-07-13', color: 'light-yellow' },
                    { title: 'CK: ALAN', date: '2022-07-14', color: 'orange' },
                    { title: 'VS: DAVOR', date: '2022-07-17', color: 'blue' },
                    { title: 'TOB: ZARRA', date: '2022-07-18', color: 'green' },
                    { title: 'CK: SERGIO', date: '2022-07-18', color: 'orange' },
                    { title: 'TIB: EMMA', date: '2022-07-19', color: 'cyan' },
                    { title: 'CBB: BISWU', date: '2022-07-20', color: 'light-yellow' },
                    { title: 'CK: OSCAR', date: '2022-07-21', color: 'orange' },
                    { title: 'VS: SEDA', date: '2022-07-24', color: 'blue' },
                    { title: 'TOB: AYDEN', date: '2022-07-25', color: 'green' },
                    { title: 'CK: CEREN', date: '2022-07-25', color: 'orange' },
                    { title: 'TIB: ANDRIU', date: '2022-07-26', color: 'cyan' },
                    { title: 'CBB: ALAN', date: '2022-07-27', color: 'light-yellow' },
                    { title: 'CK: ALBERTO', date: '2022-07-28', color: 'orange' },
                    { title: 'VS: HATICE', date: '2022-07-31', color: 'blue' }                    
                ]}
            />
        </section>
    )
    
}