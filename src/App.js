import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ToolBar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <ToolBar>
          <Typography>Graphics</Typography>
        </ToolBar>
      </AppBar>
      <main>
        <Box sx={{height: "80pt"}}>
        </Box>
        <Box>
          <Container maxWidth="md">
            <Typography component="h1" variant="h3" align="center" gutterBottom>Title</Typography>
            <Typography component="h5" variant="body1" gutterBottom>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely. Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</Typography>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default App;
