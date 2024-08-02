"use client"

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      style={{ background: 'linear-gradient(to bottom right, #AC4FF9, #4fde)' }}
      className="style p-4 rounded-lg shadow-md"
    // Replace bg-red-600 with the appropriate Tailwind CSS class for your desired background color
    />
  );
}

