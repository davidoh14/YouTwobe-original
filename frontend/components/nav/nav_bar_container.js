import { connect } from "react-redux"
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";
import { withRouter } from "react-router";

const mapStateToProps = ({entities, session}) => ({
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));