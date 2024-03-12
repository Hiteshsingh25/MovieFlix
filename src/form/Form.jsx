// import Box from '@mui/material/Box'
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import img1 from "../images/img1.jpg";
import TextField from "@mui/material/TextField";
import img2 from "../images/immg2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import Box from "@mui/material/Box";
import img5 from "../images/img5.jpg";
import CloseIcon from '@mui/icons-material/Close';
// import img10 from '../images/img10.png'
// import Container from '@mui/material/Container'
import Accordian from "@mui/material/Accordion";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AccordianDetails from "@mui/material/AccordionDetails";
import AccordianSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import img8 from "../images/img8.jpg";
// import Skeleton from '@mui/material/Skeleton'\
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
// import Header from './Header'
import img11 from "../images/img10.png";
import "./Form.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Modal from "@mui/material/Modal";
// import ImageList1 from './ImageList1'
// https://api.themoviedb.org/3/
const baseUrl = "https://api.themoviedb.org/3";
const API_Key = "165c0e3fd9b4e30eb844ab6401a92b4c";
export default function Form() {
  const [viewModal, setViewModal] = useState(false);
  const [ModalData, setModelData] = useState({});
  const [page, setPage] = useState(1);

  const handlepage = (event, value) => {
    setPage(value);
  };
  console.log({ page });
  const handleOpenView = (item) => {
    setViewModal(true);
    setModelData({ ...item });
    console.log({ item });
  };

  const handleCloseView = () => {
    setViewModal(false);
    setModelData({});
  };

  console.log(ModalData.id);
  const [input, setInput] = useState("");

  const [isloading, setIsLoading] = useState(true);
  //   const handleInput=(e)=>{
  //     setInput(e.target.value)
  //   }
  const [get1, setGet1] = useState([
    {
      id: "",
      title: "",
    },
  ]);

  const searchHandle = (e) => {
    setInput(e.target.value);
    axios
      .get(`${baseUrl}/search/movie`, {
        params: {
          query: input,
          include_adult: "true",
          language: "en-US",
          page: "1",
          api_key: API_Key,
        },
      })
      .then((resp) => setGet1(resp.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  console.log(get1);
  
  const [get, setGet] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/movie/popular?page=${page}`, {
        params: {
          api_key: API_Key,
        },
      })
      .then((resp) => setGet(resp?.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [page]);

  console.log(get?.results?.title);
  console.log(`${get.baseurl}/${get?.poster_path}`);

  const actionspd = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  const style = {
    position: "absolute",
    borderRadius: "13px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:{xs:250,sm:500,md:600,lg:800},
    color: "white",
    bgcolor: "black",
    border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
  };

  return (
    <>
      <div style={{ background: "black", padding: "10px" }}>
        <Grid container className="accordbody">
          <Grid item xs={11} sm={5} md={4} lg={3}>
            <div className="accord">
              <div>
                <TextField
                  value={input}
                  variant='filled'
                  sx={{
                    width:{xs:'50%',sm:'50%',md:'50%',lg:'50%'},
                    background: "white",
                    px:'3px',
                    borderTopLeftRadius: "13px",
                    borderBottomLeftRadius: "13px",
                  }}
                  onChange={searchHandle}
                  label="Search Your Movie"
                />
                <Button
                  variant="contained"
                  sx={{ height: "55px" }}
                  onClick={() => searchHandle()}
                >
                  Search
                </Button>
              </div>
              <Accordian
                style={{
                    width:{xs:'70%',md:'80%'},
                  backgroundColor: "black",
                  borderBottom: "1px solid grey",
                  marginTop: "15px",
                }}
              >
                <AccordianSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                >
                  <b style={{ color: "white" }}>
                    <LocalMoviesIcon
                      sx={{ marginLeft: "5px", color: "white" }}
                    />{" "}
                    Latest
                  </b>
                </AccordianSummary>
                <AccordianDetails style={{ backgroundColor: "black" }}>
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ width: "100%", marginBottom: "2px" }}
                  >
                    Gabber
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ width: "100%", marginBottom: "2px" }}
                  >
                    Leo
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ width: "100%", marginBottom: "2px" }}
                  >
                    Jigar thanda
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ width: "100%", marginBottom: "2px" }}
                  >
                    Mass
                  </Button>
                </AccordianDetails>
              </Accordian>
              <Accordian
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderBottom: "1px solid grey",
                }}
              >
                <AccordianSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                >
                  <b>
                    {" "}
                    <MovieFilterIcon sx={{ marginLeft: "5px" }} /> Categories
                  </b>
                </AccordianSummary>
                <AccordianDetails
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing el aspect
                  et element nulla fac duis sed diam non
                  <br /> pro posuere cubilia Cur et ultrices posuere cubilia
                </AccordianDetails>
              </Accordian>
              <Accordian
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderBottom: "1px solid grey",
                }}
              >
                <AccordianSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                >
                  <b>
                    {" "}
                    <MovieFilterIcon sx={{ marginLeft: "5px" }} />
                    South Indian
                  </b>
                </AccordianSummary>
                <AccordianDetails
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing el aspect
                  et element nulla fac duis sed diam non
                  <br /> pro posuere cubilia Cur et ultrices posuere cubilia
                </AccordianDetails>
              </Accordian>
              <Accordian
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderBottom: "1px solid grey",
                }}
              >
                <AccordianSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                >
                  <b>
                    <LocalMoviesIcon sx={{ marginLeft: "5px" }} />
                    GOAT movies
                  </b>
                </AccordianSummary>
                <AccordianDetails
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing el aspect
                  et element nulla fac duis sed diam non
                  <br /> pro posuere cubilia Cur et ultrices posuere cubilia
                </AccordianDetails>
              </Accordian>
              <Accordian
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderBottom: "1px solid grey",
                }}
              >
                <AccordianSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                >
                  <b>
                    {" "}
                    <MovieFilterIcon sx={{ marginLeft: "5px" }} />
                    New Released
                  </b>
                </AccordianSummary>
                <AccordianDetails
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <Card sx={{ padding: "10px" }}>
                    <Typography
                      component="div"
                      variant="subtitle-1"
                      color="text.secondary"
                    >
                      New Realeased
                    </Typography>
                    <img className="img" src={img1} alt="" />
                  </Card>
                </AccordianDetails>
              </Accordian>
            </div>
          </Grid>

          <Modal
            open={viewModal}
            onClose={handleCloseView}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Grid container sx={style}>
              <Grid item xs={7} sm={6}>
                <Box id="modal-modal-description">
                  <img
                  className='modalImg'
                    src={`https://image.tmdb.org/t/p/w500/${ModalData?.poster_path}`}
                    alt=""
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={handleCloseView}
                  sx={{ float: "right" }}
                  color="error"
                >
                  <CloseIcon/>
                </Button>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ fontSize: "30px", pt: 1, textAlign: "center", mt: {xs:3,sm:6} }}
                >
                  Movie
                </Typography>
                <Typography
                  sx={{ fontSize: "27px", pt: 4, textAlign: "center" }}
                >
                  <b style={{ fontSize: "20px" }}>Title:-</b> {ModalData?.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "27px", pt: 4, textAlign: "center",display:{xs:'none',sm:'block'} }}
                >
                  <b style={{ fontSize: "20px" ,display:{xs:'none',sm:'block'} }}>Ratings:- </b>
                  {ModalData?.popularity}
                </Typography>
                <Typography
                  sx={{ fontSize: "27px", pt: 4, textAlign: "center",display:{xs:'none',sm:'block'}  }}
                >
                  <b style={{ fontSize: "20px" }}>Date:-</b>{" "}
                  {ModalData?.release_date}
                </Typography>
                <Typography
                  sx={{ fontSize: "27px", pt: 4, textAlign: "center",display:{xs:'none',sm:'block'}  }}
                >
                  <b style={{ fontSize: "20px" }}>votes:-</b>{" "}
                  {ModalData?.vote_average}
                </Typography>
                <Typography
                  sx={{ fontSize: "27px", pt: 4, textAlign: "center",display:{xs:'none',sm:'block'}  }}
                >
                  <b style={{ fontSize: "20px" }}>votes-Count:-</b>{" "}
                  {ModalData?.vote_count}
                </Typography>
              </Grid>
            </Grid>
          </Modal>
          {!isloading ? (
            input.length < 2 ? (
              <Grid item xs={12} sm={6} md={8} lg={8}>
                <Box>
                  {console.log(get)}
                  <Box
                    sx={{
                      color: "white",
                      marginTop: { xs: "100px", sm: "50px", lg: "10px" },
                    }}
                  >
                    <h1> LATESTS</h1>
                  </Box>
                  <Grid container sx={{ margin: "5px" }}>
                    {get?.results?.map((item) => (
                      <Grid
                        xs={9}
                        sm={11}
                        md={3.9}
                        lg={2.9}
                        sx={{ marginLeft:{xs: "35px",sm:'3px',md:'5px'},marginTop:{xs:'8px',sm:'4px'} }}
                        className="movie"
                        key={item?.id}
                      >
                        <Link to={`/detail/${item?.id}`}>
                          <img
                            className="img"
                            src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                            alt=""
                          />
                        </Link>
                        <br />
                        <Button
                          sx={{ float: "right" }}
                          onClick={() => handleOpenView(item)}
                        >
                          preview
                        </Button>
                        <Link
                          to={`/detail/${item?.id}`}
                          style={{
                            marginLeft: "10px",
                            textDecoration: "none",
                            color: "#fff",
                          }}
                        >
                          <b>{item?.original_title}</b>
                          <p style={{ marginLeft: "10px" }}>
                            <b>{item?.release_date}</b>
                          </p>
                          <p style={{ marginLeft: "10px" }}>
                            {item?.overview?.slice(0, 160)}
                          </p>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                  <div></div>
                </Box>
              </Grid>
            ) : (
              <Grid xs={12} sm={6} md={8}>
                <div>
                <Box
                    sx={{
                      color: "white",
                      marginTop: { xs: "100px", sm: "50px", lg: "10px" },
                    }}
                  >
                    <h1> SEARCHED MOVIES</h1>
                  </Box>
                  <Grid container sx={{px:{xs:5,sm:0},margin:'5px'}}>
                    {get1?.results?.map((item) => (
                      <Grid
                        item
                        xs={11}
                        md={3.9}
                        lg={2.9}
                       sx={{marginLeft:{xs: "35px",sm:'3px'},marginTop:{xs:'8px',sm:'4px'} }}
                        className="movie"
                        key={item?.id}
                      >
                        
                        <Link to={`/detail/${item?.id}`}>
                          {!isloading ? (
                            <img
                              className="img"
                              src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                              alt=""
                            />
                          ) : (
                            <img src={img11} alt="" />
                          )}
                        </Link>
                        <br />
                        <Button
                          sx={{ float: "right" }}
                          onClick={() => handleOpenView(item)}
                        >
                          preview
                        </Button>
                        <Link
                          to={`/detail/${item?.id}`}
                          style={{
                            marginLeft: "10px",
                            textDecoration: "none",
                            color: "#fff",
                          }}
                        >
                          <b>{item?.original_title}</b>
                          <p style={{ marginLeft: "10px" }}>
                            <b>{item?.release_date}</b>
                          </p>
                          <p style={{ marginLeft: "10px" }}>
                            {item?.overview.slice(0, 160)}
                          </p>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                  <div></div>
                </div>
              </Grid>
            )
          ) : (
            <Loading />
          )}
          <Stack
            sx={{
              marginLeft: { xs: "10px", sm: "150px", md: "350px", lg: "600px" },
            }}
            spacing={2}
          >
            <Pagination
              className="pagination"
              variant="text"
              page={page}
              onChange={handlepage}
              count={10}
              color="error"
            />
          </Stack>
        </Grid>
      </div>

      <SpeedDial
        direction=""
        ariaLabel="speed-basic-example"
        sx={{ position: "fixed", bottom: "30px", left: "50px" }}
        icon={<SpeedDialIcon />}
      >
        {actionspd.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
          />
        ))}
      </SpeedDial>
    </>
  );
}



































export const top100Films = [
  { img: img1, label: "The Shawshank Redemption", year: 1994 },
  { img: img2, label: "The Godfather", year: 1972 },
  { img: img3, label: "The Godfather: Part II", year: 1974 },
  { img: img4, label: "The Dark Knight", year: 2008 },
  { img: img5, label: "12 Angry Men", year: 1957 },
  { img: img6, label: "Schindler's List", year: 1993 },
  { img: img7, label: "Pulp Fiction", year: 1994 },
  {
    img: img8,
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
