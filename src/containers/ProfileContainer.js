import { connect } from 'react-redux'
import ProfileComponent from '../components/ProfileComponent'
import { addCar, removeCar} from '../redux folder/actions'

const mapStateToProps = (state) =>{
    return {
        cars: state.cars
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addCar : (car) => dispatch(addCar(car)),
        removeCar : (index) => dispatch(removeCar(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)