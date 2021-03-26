import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        border: '2px solid black',
        marginTop: '30px'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // background: 'hsla(185, 100%, 76%, 0.3)',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0'
    },
    buttonSubmit: {
        marginBottom: 10,
    }
}))