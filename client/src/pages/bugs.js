import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuNav from '../component/nav';
import Container from '@material-ui/core/Container';
import { useQuery } from "@apollo/react-hooks";
import { QUERY_BUGS } from '../utils/queries';

// Card components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        height: '100%',
    },
    bugGrid: {
        marginTop: '70px'
    }
    

    

  });

export default function Bugs () {

    const {loading, data} = useQuery(QUERY_BUGS);

    const bugs = data?.getBugs || [];
    console.log(bugs);

    const classes = useStyles();

    return (
        <Container>
            <MenuNav />
            <Typography component='h1'>Bugs</Typography>
                <Grid
                    container
                    spacing = {3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.bugGrid}
                >
                    {bugs.map(bug => (
                    <Grid item md={3} sm={6} xs={12} >
                        <Card className={classes.root} key={bugs._id} >
                        <CardActionArea>
                        <CardMedia
                            component='img'
                            className={classes.media}
                            image={bug.icon}
                            title="Bug Card"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                            {bug.name}
                            </Typography>
            
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Got it!
                        </Button>
                        </CardActions>
                    </Card>
                  </Grid>
                ))}
            </Grid>
        </Container>
    )
}

