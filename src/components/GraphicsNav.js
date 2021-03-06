import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Link from '@mui/material/Link'
import ToolBar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';

export function GraphicsNav() {
    return (
        <>
            <AppBar position="fixed">
                <ToolBar sx={{mt: "10px", mb: "10px"}}>
                    <Box sx={{mr: "20px"}}>
                        <img src="/bunny.png" alt="bunny" height="50px"></img>
                    </Box>
                    <Typography variant="h5">
                        <Link href="/" color="inherit" underline="none">Graphics Hub</Link>
                    </Typography>
                </ToolBar>
            </AppBar>
            <Box sx={{mt: "130px"}}></Box>
        </>
    )
}