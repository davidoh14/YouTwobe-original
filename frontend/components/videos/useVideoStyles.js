import { makeStyles } from "@mui/styles";

const useVideoStyles = makeStyles({
    showPlayerWrapper: {
        width: "100%",
        position: "relative"
    },

    showPlayerControlsWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1,
    }
});

export default useVideoStyles;