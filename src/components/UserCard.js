import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    avatarIcon: {
      width: "150px !important",
      height: "150px !important",
    },
  })
);

export default function UserCard({ users, loader }) {
  // MUI Styles
  const classes = useStyles();

  return (
    <div className="user-card-container">
      {loader ? (
        <CircularProgress />
      ) : (
        users.data &&
        users.data.map((val) => {
          const { id, email, first_name, last_name, avatar } = val;

          return (
            <div className="card" key={id}>
              <Card
                sx={{
                  width: "90%",
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardActionArea sx={{ display: "flex" }}>
                  <Avatar src={avatar} className={classes.avatarIcon} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {`${first_name} ${last_name}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })
      )}
    </div>
  );
}
