import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Header from "../../components/Header";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { formatDate } from "@fullcalendar/core";

import viLocale from "@fullcalendar/core/locales/vi"; // import to use vi

const Calendar = () => {
  const [currentLang, setCurrentLang] = useState("us"); // for languages vi
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const calendarApi = selected.view.calendar;
    const title = prompt("Please enter a new title for your event");
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event._def.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  const renderEventContent = (eventContent) => {
    return (
      <Typography variant="h8" p="2px">
        {eventContent.event._def.title}
      </Typography>
    );
  };

  return (
    <Box m="10px 20px">
      <Header title="calendar" subTitle="Full calendar interactive page" />

      <Box display="flex" justifyContent="space-between" mt="20px">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor="#eeeee4"
          p="15px"
          borderRadius="4px"
          maxWidth="300px"
        >
          <Typography variant="h5" fontWeight={600}>
            Events
          </Typography>
          <List>
            {currentEvents.map((event, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "#cbdae5",
                  margin: "10px 0",
                  borderRadius: "5px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                  sx={{
                    overflow: 'hidden'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              multiMonthPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "listWeek,timeGridWeek,dayGridMonth,multiMonthYear",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            eventContent={renderEventContent} // custom render function
            locale={currentLang === "vi" ? viLocale : undefined}
            initialEvents={[
              { id: "1", title: "event 1", date: "2023-03-11" },
              { id: "2", title: "event 2", date: "2023-03-12" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
