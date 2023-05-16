import Navbar from "../component/Navbar";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Shoppingpic from "../image/Shoppingpic.png";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  InputBase,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Groupbutton from "../component/Groupbutton";

function Goshopping() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [selected, setSelected] = useState({ id: "", todo: "" });

  const handleOnchange = (e) => {
    setInputText(e.target.value);
  };
  const handleOnClick = (e) => {
    setToDoList((prev) => [...prev, inputText]);
    setInputText("");
  };

  const deleteOnClick = (id) => {
    console.log(id);
    let newState = toDoList.filter((todo, index) => {
      if (index != id) {
        return todo;
      }
    });
    setToDoList(newState);
  };

  const updateOnClick = () => {
    let newState = toDoList;
    newState[selected.id] = selected.todo;
    setToDoList((prev) => (prev = newState));
    setSelected({ id: "", todo: "" });
  };

  return (
    <Stack sx={{ flexGrow: 1 }}>
      <Navbar />
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        sx={{ flexDirection: { xs: "column", sm: "column", lg: "row" } }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" m={3} align="center">
            Prepare for your meal
          </Typography>
          <img src={Shoppingpic} width="100%" />
          <Typography variant="h6" align="center"></Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            padding: 2,
            gap: 2,
            flexDirection: "column",
          }}
        >
          <ListItem disablePadding>
            <InputBase
              sx={{
                height: 40,
                width: "100%",
                mr: 1,
                p: 2,
                borderRadius: 20,
                border: "1px solid #AAAAAA",
                color: "ActiveBorder",
              }}
              onChange={handleOnchange}
              value={inputText}
            />
            <Button
              variant="contained"
              sx={{
                height: 40,
                backgroundColor: "#F24C44",
                p: 2,
                fontSize: "16px",
              }}
              disabled={!inputText}
              onClick={handleOnClick}
            >
              <AddIcon />
              ADD
            </Button>
          </ListItem>
          <Card
            sx={{
              width: "auto",
              backgroundColor: "white",
              borderRadius: 5,
              p: 2,
            }}
          >
            <Typography>
              <br />
              {toDoList.map((todo, index) => (
                <Box key={index}>
                  <Checkbox /> {todo}
                  <Button
                    variant="text"
                    onClick={() => setSelected({ id: index, todo })}
                  >
                    Edit
                  </Button>
                  <Button variant="text" onClick={() => deleteOnClick(index)}>
                    Delete
                  </Button>
                </Box>
              ))}
              <br />
              {!!selected.todo && selected.id >= 0 && (
                <Box>
                  <TextField
                    variant="standard"
                    value={selected.todo}
                    onChange={(e) =>
                      setSelected((prev) => ({
                        ...prev,
                        todo: e.target.value,
                      }))
                    }
                  />
                  <Button onClick={(e) => updateOnClick(selected.id)}>
                    Update
                  </Button>
                </Box>
              )}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Goshopping;
