import {
  Box,
  Chip,
  Divider,
  Grid,
  Input,
  InputAdornment,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapIcon from "@mui/icons-material/Map";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Stack } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const places = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "San Francisco",
].sort();

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        padding: "0 30px",
        paddingTop: "40px",
        marginLeft: {
          lg: "2rem",
          sm: "0rem",
        },
        marginRight: {
          lg: "2rem",
          sm: "0rem",
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab iconPosition="start" icon={<MapIcon />} label="GLANCE" />
        <Tab iconPosition="start" icon={<FavoriteIcon />} label="INTERESTS" />
        <Tab iconPosition="start" icon={<QuestionAnswerIcon />} label="AMA" />
      </Tabs>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
      >
        <Box
          sx={{
            width: "72%",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              marginTop: 3,
              marginBottom: 4,
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              sx={{
                height: "calc(100vh - 250px)",
                overflow: "scroll",
                marginBottom: 0,
              }}
            >
              {loading &&
                new Array(12).fill(0).map((_, i) => (
                  <Grid item key={i} xs={12}>
                    <Skeleton
                      animation="pulse"
                      variant="rounded"
                      height={440}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
        <Stack
          spacing={2}
          sx={{
            width: "28%",
          }}
        >
          <Input
            id="standard-adornment-amount"
            placeholder="Search Places"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
          <Stack
            direction={"row"}
            gap={1}
            sx={{
              flexWrap: "wrap",
            }}
          >
            {places.map((place) => (
              <Chip label={place} />
            ))}
          </Stack>

          <Typography>Trending Albums</Typography>
          {new Array(3).fill(0).map((_, i) => (
            <Skeleton animation="pulse" variant="rounded" height={110} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Feed;
