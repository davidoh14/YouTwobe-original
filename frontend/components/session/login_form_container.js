import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, clearSessionErrors } from "../../actions/session_actions";
import { withRouter } from "react-router";



const mapStateToProps = (state) => ({
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))