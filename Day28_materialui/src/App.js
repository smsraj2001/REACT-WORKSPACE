import './App.css';
import Button from '@mui/material/Button';
import { ButtonGroup, Skeleton } from '@mui/material';
import TableComponent from './components/TableComponent';
import ResponsiveAppBar from './components/AppBarComponent';
import Media from './components/SkeletonComponent'
import CustomizedSnackbars from './components/SnackBarComponent';
import SkeletonComponent from './components/SkeletonComponent';
import ChartComponent from './components/ChartComponent';
import ResponsiveDatePickers from './components/DateTimeComponent';
import ControlledAccordions from './components/AccordionList'
import StepperComponent from './components/StepperComponent';
import TitlebarBelowMasonryImageList from './components/ImageListComponent'
import TransitionGroupExample from './components/TransitionGroup';


function App() {
  return (
    <>
    <ResponsiveAppBar />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <TableComponent />
      <Media />
      <CustomizedSnackbars />
      <SkeletonComponent />
      <ChartComponent />
      <ResponsiveDatePickers />
      <ControlledAccordions />
      <StepperComponent />
      <TitlebarBelowMasonryImageList />
      <TransitionGroupExample />
    </>
  );
}

export default App;
