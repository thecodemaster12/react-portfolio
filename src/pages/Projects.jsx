import React from 'react'
import Navbar from '../components/Navbar'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const Projects = () => {
  return (
    <>
    <Navbar />
    <div className='h-auto flex justify-center items-center bg-slate-500 gap-10 flex-wrap pt-'>  
    <a href="https://www.google.com/" target='_blank'>
      <Card sx={{ maxWidth: 345, background: '#222', color: 'white' }}>
        <CardActionArea>
          <CardMedia
          component='img'
          height={140}
          image='https://images.unsplash.com/photo-1714244322811-f1387dc93909?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="white.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi officia veritatis ut rem hic vero repellat dignissimos iusto optio. Veniam molestiae doloribus odio illum adipisci, repellendus fugit atque eligendi!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" className='text-white-950'>
          Share
        </Button>
      </CardActions>
      </Card>
      </a>    
    <a href="https://www.google.com/" target='_blank'>
      <Card sx={{ maxWidth: 345, background: '#222', color: 'white' }}>
        <CardActionArea>
          <CardMedia
          component='img'
          height={140}
          image='https://images.unsplash.com/photo-1714244322811-f1387dc93909?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="white.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi officia veritatis ut rem hic vero repellat dignissimos iusto optio. Veniam molestiae doloribus odio illum adipisci, repellendus fugit atque eligendi!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" className='text-white-950'>
          Share
        </Button>
      </CardActions>
      </Card>
      </a>    
    <a href="https://www.google.com/" target='_blank'>
      <Card sx={{ maxWidth: 345, background: '#222', color: 'white' }}>
        <CardActionArea>
          <CardMedia
          component='img'
          height={140}
          image='https://images.unsplash.com/photo-1714244322811-f1387dc93909?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="white.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi officia veritatis ut rem hic vero repellat dignissimos iusto optio. Veniam molestiae doloribus odio illum adipisci, repellendus fugit atque eligendi!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" className='text-white-950'>
          Share
        </Button>
      </CardActions>
      </Card>
      </a>    
    <a href="https://www.google.com/" target='_blank'>
      <Card sx={{ maxWidth: 345, background: '#222', color: 'white' }}>
        <CardActionArea>
          <CardMedia
          component='img'
          height={140}
          image='https://images.unsplash.com/photo-1714244322811-f1387dc93909?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="white.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi officia veritatis ut rem hic vero repellat dignissimos iusto optio. Veniam molestiae doloribus odio illum adipisci, repellendus fugit atque eligendi!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" className='text-white-950'>
          Share
        </Button>
      </CardActions>
      </Card>
      </a>    
    </div>
    </>
  )
}

export default Projects