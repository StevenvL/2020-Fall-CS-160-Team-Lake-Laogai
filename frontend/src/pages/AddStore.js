import React , {useState} from 'react'
import Axios from 'axios'
import { Container , Form , Col , Button} from 'react-bootstrap'
import FormComponent from '../components/FormComponent'


function AddStore(){
    
    // useState hook for React state and lifecycle features from function components
    const [storeName, setStoreName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [menu, setMenu] = useState('')
    const [sugarLevel, setSugarLevel] = useState('')
    const [iceLevel, setIceLevel] = useState('')

    /* connection with backend insert api */
    const url = "http://localhost:8000/stores"
    const userInputData = {storeName: storeName, address: address, city: city, state: state, zip: zip, sugarLevel: sugarLevel, iceLevel: iceLevel, menu: menu}
    const sendData = () => {
        Axios.post(url, userInputData)  // post request to api
        .then(res => console.log('Data Sent'))
        .catch(err => console.log(err)) 
    }

    return(
        <Container className="componentBody">
            <h1> Add a New Store</h1>
   
            <Form className="form">
                <FormComponent 
                    label="Store Name" 
                    placeholder="boba store name"
                    setInput = {setStoreName}
                />
                <FormComponent 
                    label="Address" 
                    placeholder="1234 Main St" 
                    setInput = {setAddress}
                />
                <Form.Row>         
                    <FormComponent 
                        format={Col}
                        label="City" 
                        setInput = {setCity}
                    />                   
                    <FormComponent
                        format={Col} 
                        label = "State"
                        setInput={setState}
                    />
                    <FormComponent
                        format={Col} 
                        label = "Zip"
                        setInput={setZip}
                    />
                </Form.Row>
                <FormComponent 
                    label="Menu"
                    placeholder="salted cheese milk tea, brown sugar boba, fruit tea, ... " 
                    setInput={setMenu}
                />
                <FormComponent 
                    label = "Sugar Level"
                    placeholder="25% 50% 75%" 
                    setInput={setSugarLevel}
                />
                <FormComponent 
                    label = "Ice Level"
                    placeholder = "25% 50% 75%" 
                    setInput = {setIceLevel}
                /> 
                <Button variant="outline" onClick={sendData} href="/findStore">
                    Add
                </Button>
                <Button variant="outline" href="/findStore" className="ml-2">
                    Cancel
                </Button>
            </Form>         
        </Container>
    )
    
}

export default AddStore;