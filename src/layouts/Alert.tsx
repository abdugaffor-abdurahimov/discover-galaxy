import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { ReactElement } from "react";

interface Props {
  message: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function Error({ message }: Props): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">{message}</Alert>
    </div>
  );
}
