import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop'; 
import JobModal from './jobModal';
//for modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//time 
import moment from 'moment';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    
    borderRadius: 25,
  },
  content: {
    padding: 10,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    maxHeight:"75%",
    maxWidth:"80%",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    border: '5px ridge #ff9999',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const TestCard = React.memo(function ProjectCard({mockjob,itemNum}) {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //convert time
  const formatTime = (time)=>{
        return moment(time).fromNow();
  }

  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <BrandCardHeader
        image={
          mockjob.company_logo
        }
        extra={formatTime(mockjob.created_at)}
      />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={styles}
          
          overline={mockjob.company}
          heading={mockjob.title}
          body={
            mockjob.location
          }
        />
        <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <JobModal job={mockjob}/>
          </div>
        </Fade>
      </Modal>
    </div>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" color="primary" target="_blank" href={mockjob.company_url}>
          Website
        </Button>
        <Button variant="outlined" size="small" color="secondary" onClick={handleOpen}>
        Learn More!
        </Button>
      </CardActions>
    </Card>
  );
});

export default TestCard