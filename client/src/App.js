import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import { selectUser } from "./reducers/userReducer";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";

const App = () => {
  const user = useSelector(selectUser);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Mentor App
        </Typography>
        <img
          className={classes.image}
          src="https://www.businessmagazinegainesville.com/wp-content/uploads/2017/06/theimportanceofacareermentor.jpg"
          alt="icon"
          height="60"
        />
      </AppBar>
      <Grow in>
        {user ? (
          <Container>
            <Logout />
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        ) : (
          <Login />
        )}
      </Grow>
    </Container>
  );
};

export default App;
