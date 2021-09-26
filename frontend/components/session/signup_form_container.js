import { connect } from "react-redux";
import SignUpForm from "./signup_form";
import { signup } from "../../actions/session_actions";


const mapStateToProps = (state) => ({
    errors: state.errors.session,
    // clearErrors: state.errors.session = []
});

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)