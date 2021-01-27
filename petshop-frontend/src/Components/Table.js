import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import PetIcon from "@material-ui/icons/Pets";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 600
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: `10px`,
        height: "100%",
        width: "99%",
        marginTop: theme.spacing(7)
    },
    link: {
        color: "rgba(0,0,0,0.65)",
        textDecoration: "none",
        marginLeft: "10%",
        alignSelf: "flex-start",
        "&:hover": {
            color: "rgba(0,0,0,1)"
        }
    }
}));

export default function SimpleTable() {

    const classes = useStyles();

    const [firstLoad, setLoad] = React.useState(true);
    const [data, upDateDate] = React.useState([]);
    let isLoading = true;

    async function sampleFunc() {
        let response = await fetch("/petShop/api/pets");
        let body = await response.json();
        upDateDate(body);
    }

    if (firstLoad) {
        sampleFunc();
        setLoad(false);
    }

    if (data.length > 0) isLoading = false;

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <PetIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Pets Directory
            </Typography>

            {isLoading ? (
                <CircularProgress/>
            ) : (
                <TableContainer
                    style={{width: "80%", margin: "0 10px"}}
                    component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Color</TableCell>
                                <TableCell align="center">Registered Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.type}</TableCell>
                                    <TableCell align="center">{row.color}</TableCell>
                                    <TableCell align="center">{row.register}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            <Link className={classes.link} to="/">
                <Typography align="left">
                    &#x2190; Head back to save data
                </Typography>
            </Link>
        </div>
    );
}