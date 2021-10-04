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

    toolbar: {
        color: 'white',
        backgroundColor: 'rgba(32, 32, 32, 1)',
        display: 'flex',
        flexDirection: 'row',
        height: '56px',
        alignItems: 'center',
        // justifyContent: 'center',
        // position: 'static',
    },

    toolbarLeft: {
        position: 'relative',
        flex: 'flexStart',
        alignItems: 'center'
    },

    logoText: {
        color: 'white',
        fontSize: '20px',
        fontStyle: 'bold',
    }, 

    youtubeLogo: {
        height: '66px',
        width: '44px',
    },

    logo: {
        background: 'none',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
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
    }


};

// const Search = styled('div') => ({

// })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useNavStyles)(NavBar)));