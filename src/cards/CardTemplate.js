import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export function CardTemplate(props) {

    return (
        <Card sx={{maxWidth: "280px", mt: "20px", mb: "20px"}}>
            <CardActionArea component={Link} to={props.path} sx={{height: "300px"}}>
                <CardMedia component="img" image={props.image} alt="card image" height="120px"></CardMedia>
                <CardContent>
                    <Typography variant="body1" component="h3" gutterBottom fontSize={16} fontWeight="bold">{props.title}</Typography>
                    <Typography variant="body2" gutterBottom fontSize={12}>{props.date}</Typography>
                    <br></br>
                    <Typography variant="body2" gutterBottom fontSize={14}>{props.description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

CardTemplate.defaultProps = {
    image: "/bunny.png",
    title: "Title Placeholder",
    date: "April 23, 2022",
    description: "Description placeholder. Put more text here.",
    path: "/test"
}