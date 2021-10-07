import { connect } from "react-redux"
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";
import { withRouter } from "react-router";
import { withStyles } from "@mui/styles";
import styled from "@mui/material/styles";


const mapStateToProps = ({entities, session}) => ({
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const useNavStyles = {
    login: {
        position: 'relative',
        justifyContent: 'space-between',
    },

    appbar: {
        maxHeight: '60px',
    },

    toolbar: {
        color: 'white',
        backgroundColor: 'rgba(32, 32, 32, 1)',
        display: 'flex',
        flexDirection: 'row',
        maxHeight: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
        // position: 'static',
    },

    toolbarLeft: {
        position: 'relative',
        display: 'flex',
        flex: 'flex-start',
        alignItems: 'center'
    },

    toolbarMid: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },

    toolbarRight: {
        position: 'relative',
        display: 'flex',
        flex: 'flex-end',
        alignItems: 'center'
    },

    logoText: {
        color: 'white',
        fontSize: '20px',
        fontStyle: 'bold',
    }, 

    youtubeLogo: {
        height: '56px',
        width: '44px',
    },

    logo: {
        background: 'none',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        maxHeight: '56px'
    },

    logoLink: {
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchBar: {
        backgroundColor: '#121212',
        borderRadius: '3px',
        borderColor: '#FFFFFF',
    },

    login: {
        textDecoration: 'none',
        color: '#FFFFFF',
        font: 'Roboto',
    },

    loginButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    loginButtonText: {
        position: 'relative',
    },

    navBarButton: {
        position: 'relative',
        alignItems: 'center'
    },

    searchIcon: {
        // zIndex: '5',
    },


};

// const Search = styled('div') => ({

// })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useNavStyles)(NavBar)));