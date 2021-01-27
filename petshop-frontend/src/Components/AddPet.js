import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import PetIcon from "@material-ui/icons/Pets";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({

    paper: {
        marginTop: theme.spacing(7),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },

    form: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
    }

}));


export default function AddPet() {

    const classes = useStyles();
    const [firstLoad, setLoad] = React.useState(true);

    const [name, setName] = React.useState("");
    const [type, setType] = React.useState("");
    const [color, setColor] = React.useState("");
    const [registered, setRegistered] = React.useState(new Date("1991-03-11T03:00:00"));
    const [message, setMessage] = React.useState("Nothing saved in the session :(");

    const handleNameChange = event => setName(event.target.value);
    const handleTypeChange = event => setType(event.target.value);
    const handleColorChange = event => setColor(event.target.value);
    const handleRegistered = date => setRegistered(date);

    async function sampleFunc(toInput) {

        const response = await fetch("/petShop/api/pet", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(toInput)
        });

        let body = await response.json();
        console.log(body);
        setMessage(body.id ? "Pet successfully updated" : "Pet updating failed")

    }

    const handleSubmit = variables => {
        const toInput = {name, type, color, register: registered};
        sampleFunc(toInput);
        setName("");
        setType("");
        setColor("");
    };

    if (firstLoad) {
        setLoad(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PetIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Pets Directory
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                value={name}
                                label="Name"
                                name="name"
                                autoComplete="name"
                                onChange={handleNameChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="type"
                                value={type}
                                label="Type"
                                name="type"
                                autoComplete="type"
                                onChange={handleTypeChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="color"
                                value={color}
                                label="Color"
                                name="color"
                                autoComplete="color"
                                onChange={handleColorChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="registered"
                                label="Registered Date"
                                type="date"
                                defaultValue="1991-03-11"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true
                                }}
                                onChange={handleRegistered}/>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        preventDefaul
                        className={classes.submit}
                        onClick={handleSubmit}>
                        Save
                    </Button>

                    <Grid container justify="center">
                        <Grid item>
                            <Link to="/view">View Pets</Link>
                        </Grid>
                    </Grid>
                </form>
                <Typography style={{margin: 7}} variant="body1">
                    Status:{message}
                </Typography>
            </div>
        </Container>
    );
}