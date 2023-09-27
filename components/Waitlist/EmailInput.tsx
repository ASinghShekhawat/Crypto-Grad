"use client"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Dispatch } from 'react';

interface IEmailInput {
    value: string
    setValue: Dispatch<string>

}
export default function EmailInput({ value, setValue }: IEmailInput) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { mb: 2, mt: 2, outlineColor: 'white' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-read-only-input"
                    label="Email"
                    InputProps={{
                        style: {
                            color: 'white',
                        },
                    }}
                    value={value}
                    onChange={e=>setValue(e.target.value)}

                />
            </div>
        </Box>
    );
}
