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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { Test } from './Test';

import { ReflectionModelBasics } from './blogs/reflectionModel/ReflectionModelBasics';

import { GraphicsNav } from './components/GraphicsNav';

function App() {
  return (
    <>
      <GraphicsNav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/reflectionmodel/basics" element={<ReflectionModelBasics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
