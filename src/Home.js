import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ToolBar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';

export function Home() {
    return (
        <>
            <br></br>
            <Container maxWidth="md">
                <Typography variant="h3" component="h1" align='center' gutterBottom>Graphics Hub</Typography>
                <br></br>
                <Typography gutterBottom>This is the main page of Zizhen's collections of computer graphics.</Typography>
            </Container>
        </>
    )
}