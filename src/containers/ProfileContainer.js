import { connect } from 'react-redux'
import ProfileComponent from '../components/ProfileComponent'

const mapStateToProps = (state) =>{
    return {
        helloJelly: state.hello,
        cars: state.cars,
        name: state.name
    }
}

export default connect(mapStateToProps)(ProfileComponent)