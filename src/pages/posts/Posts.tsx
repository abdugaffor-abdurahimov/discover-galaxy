import { GridList } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import httpClient from "../../httpClient";
import Progress from "../../layouts/Progress";
import useStyles from "./StylePosts";
import Alert from "../../layouts/Alert";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await httpClient.get("/api/posts");
        console.log(res);
        if (res.status === 200) {
          setPosts(res.data);
          setLoading(false);
        }
      } catch (error) {
        setError(error.request.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => window.removeEventListener("asynchronous", fetchData);
  }, []);

  return (
    <div className={classes.root}>
      {loading && <Progress />}
      {error && <Alert message={error} />}

      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {JSON.stringify(posts)}
      </GridList>
    </div>
  );
}

export default Posts;
