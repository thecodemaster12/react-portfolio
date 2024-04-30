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
        {/* maxWidth: 350  */}
            <Card className="font-satoshi border border-red-500" sx={{ maxWidth: 300}}>
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
                        <a href={projectUrl} target="_blank">View project</a>
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default ProjectCard;
