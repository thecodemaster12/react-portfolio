import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

const ProjectCard = ({imgPath, title, description, projectUrl}) => {
    return (
        <>
            <Card className="font-satoshi" sx={{ maxWidth: 350 }}>
                <CardActionArea>
                    <CardMedia className="h-60"
                        component="img"
                        image= {imgPath}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="white.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" className="text-white-950">
                        <a href={projectUrl} target="_blank">Demo</a>
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default ProjectCard;
