
import { colors } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '15%',
        margin: '15px' ,
        height:'300px',
      },
      gridRow:{
          marginTop:'15px',
          color:colors.grey[600]
      },
      card:{
            width:'100%',
            marginTop: '15%',
            backgroundColor: colors.blueGrey[50],
      },
      paper: {
        padding: theme.spacing(2),
        padding: "16px", 
        marginTop:"2%",
        width: '100%',
        background:colors.grey[100],
    },
    avatarTrabajadas: {
        height: 56,
        width: 56,
      },
      body: {
        color: "#FFFFFF",
      },
     
}))