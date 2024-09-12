import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { DesktopDateTimePicker } from '@mui/lab';
import { Box } from '@mui/system';

export default function CustomDateTimePicker() {
  // const ref: any = React.useRef();
  const [clearedDate, setClearedDate] = React.useState<Date | null>(null);
  const [isPlaceholder, setIsPlaceholder] = React.useState<boolean>(true);
  const [value, setValue] = React.useState<Date | null>(
    new Date('2019-01-01T18:54'),
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack style={{ marginTop: 12, position: "relative" }}>
        <DesktopDateTimePicker
          // ref={ref}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          onOpen={() => setIsPlaceholder(false)}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <input ref={inputRef} {...inputProps} className="custom-datepicker" />
              {InputProps?.endAdornment}
            </Box>
          )}
        />
        {isPlaceholder &&
          <p className="calandar-placeholder">Date/Time of requested Mint Date*</p>
        }
        {/* <button onClick={() => console.log(ref)}>Open Calandar</button> */}
      </Stack>
    </LocalizationProvider>
  );
}
