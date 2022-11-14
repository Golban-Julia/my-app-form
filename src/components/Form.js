import { useForm, Controller } from "react-hook-form"; 
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";


const Form = () => {
    const { handleSubmit, control } = useForm(); 
    
    const onSubmit = (data) => {
    console.log(data);
    };

    return (
        <>
        <Container>
            <Grid  container maxWidth="xl" item  sx={{ mt: 5}}>
                
                <Grid item xs={12} sx={{ mb: 4.5}} >
                    <Typography variant="h2" sx={{ mb: 2, color: '#605DEC', fontWeight: 700, fontSize: 24 }}>Passenger information </Typography>
                    <Typography variant="p" sx={{color: '#7C8DB0;', fontWeight: 400, fontSize: 18, maxWidth:682, display:"inline-block", lineHeight:'1.5' }}>Enter the required information for each traveler and be sure that it exactly matches
                        the government-issued ID presented at the airport.
                     </Typography>
                </Grid>
          
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h4"
                        sx={{
                            mb: 4,
                            color: '#6E7491;',
                            fontWeight: 600,
                            fontSize: 18
                        }}>Passenger 1 (Adult)
                    </Typography>
                    
                    <Grid item xs={12}>
                        <Controller control={control} name="firstName" rules={{ required: "The field is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField {...field}
                                label="First name*"
                                margin="normal"
                                padding="normal"
                                variant="outlined"
                                error={!!error}
                                helperText={error?.message} />
                            )} />
                            
                        <TextField id="outlined-basic" label="Middle" variant="outlined" margin="normal" padding="normal" />
                            
                        <Controller control={control} name="lasttName" rules={{ required: "The field is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField {...field}
                                label="Last name*"
                                margin="normal"
                                variant="outlined"
                                error={!!error}
                                helperText={error?.message} />
                            )} />
                    </Grid>
            
                    <Grid item xs={12} sx={{mb:5}}>
                        <TextField id="outlined-basic" label="Suffix" variant="outlined" margin="normal" />

                        <Controller
                            control={control}
                            name="dateOfBirth"
                            rules={{ required: "The field is required"}}
                            render={({ field, fieldState: { error } }) => (
                            <TextField {...field}
                                label="Date of Birth*"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                                type="date"
                                variant="outlined"
                                error={!!error}
                                helperText="MM/DD/YY" />
                        )} />

                    </Grid>

                    <Grid item xs={12}>
                        <Controller control={control}
                                type="email"
                                name="email"
                                rules={{ required: "The field is required" }}
                                render={({ field, fieldState: { error } }) => (
                            <TextField {...field}
                                label="Email address*"
                                variant="outlined"
                                error={!!error}
                                helperText={error?.message} />
                            )} />
                        
                        <Controller control={control} name="phoneNumber" rules={{ required: "The field is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField {...field}
                                label="Phone number*"
                               inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                                variant="outlined"
                                type="tel"
                                error={!!error}
                                helperText={error?.message} />
                        )} />
                            
                    </Grid>

                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Redress number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} margin="normal" variant="outlined" />
                        
                        <Controller control={control} name="knownTravellerNumber*" rules={{ required: "The field is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField {...field}
                                label="Known traveller number*"
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                margin="normal"
                                variant="outlined"
                                error={!!error}
                                helperText={error?.message} />
                            )} />
                    </Grid>
                        
                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Send
                    </Button> 
                        
                </form>
            </Grid>
        </Container>
        </>
    )
};

export default Form;