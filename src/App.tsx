import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
function App() {
  const { control, handleSubmit } = useForm({delayError:0});
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <div className="app">
      <div className="box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller      
            name="Name"
            control={control}
            rules={{ required: '名稱必填', maxLength: {value: 3, message: '不超過3字'}}}
            defaultValue=""
            render={({field: { onChange, value}, fieldState: {error, isDirty, isTouched}}) => {
              console.log('================================================');
              console.log('error', error);
              console.log('isDirty', isDirty);
              console.log('isTouched', isTouched);          
              return <TextField                
                error={!!error}
                helperText={error ? error.message : null}
                id="standard-error-helper-text"
                label="名稱"
                value={value}
                onChange={onChange}
                variant="outlined"
              />
            }}
          />
          <Button type="submit" variant="contained" color="primary">送出</Button>
         </form>
      </div>
    </div>
  )
}

export default App
