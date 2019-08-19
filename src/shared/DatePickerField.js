
import React from "react";
import DatePicker from "react-datepicker";

const DatePickerField = ({ name, value, onChange, placeholder, minDate, maxDate }) => {
   return (
      <DatePicker
         selected={(value && new Date(value)) || null}
         onChange={val => { onChange(name, val); }}
         placeholderText={placeholder}
         minDate={minDate}
         maxDate={maxDate}
      />
   );
};

export default DatePickerField;