import React from "react";
import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent'
import CardHeader from "@mui/material/CardHeader";
import IconButton from '@mui/material/IconButton';
import { blueGrey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LoginContext } from "./LoggedInContext";

export default function TrailCard({ trail }) {
  const [errors, setErrors] = useState([]);
  const { loggedIn, user, setUser } = useContext(LoginContext);
  const newFav = {
    trail_id: trail.id,
    user_id: user.id
  };

  function handleFavClick() {
    console.log("newfav:", newFav);
    fetch("/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFav),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("data: ", data);
          const userCopy = JSON.parse(JSON.stringify(user))
          userCopy.favorite_trails = data
          setUser(userCopy)
        });
      } else {
        res.json()
          .then(data => setErrors([...data.errors]))
        console.log(errors);
      }
    });
  }

  return (
    <Card className="trail-card" key={trail.id} sx={{ maxWidth: 345, bgcolor: blueGrey[800] }}>
      <CardHeader title={trail.name} sx={{ bgcolor: blueGrey[200] }} subheader={`Length: ${trail.length} miles`}></CardHeader>
      <div key={trail.id} className="trailcard">
        <CardContent>
          {trail.description}
        </CardContent>
        <p>Location: {trail.directions}</p>
        <p>
          {trail.city} {trail.state}
        </p>
        {loggedIn ? <IconButton sx={{ color: "red" }} onClick={handleFavClick}><FavoriteIcon /></IconButton> : null}
      </div>
    </Card>
  );
}
