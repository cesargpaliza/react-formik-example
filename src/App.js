import { Formik, Form, ErrorMessage } from 'formik'
import Select from './components/Select'
import Checkbox from './components/Checkbox'
import TextInput from './components/TextInput'
import Radio from './components/Radio'

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Requerido'
    } else if (values.name.length < 5) {
        errors.name = 'El nombre es muy corto'
    }

    if (!values.lastname) {
        errors.lastname = 'Requerido'
    } else if (values.lastname.length < 5) {
        errors.lastname = 'El apellido es muy corto'
    }

    if (!values.email) {
        errors.email = 'Requerido'
    } else if (values.email.length < 5) {
        errors.email = 'El email es muy corto'
    }

    if (!values.radio) {
        errors.radio = 'Requerido'
    }

    return errors
}

function App() {


    return (
        <Formik
            initialValues={{ 
                            name: '', 
                            lastname: '', 
                            email: '', 
                            profesion: '',
                            radio: '' 
                        }}
            validate={validate}
            onSubmit={values => console.log( values)}
        >
            <Form>
                {/* Esto: */}
                <TextInput name='name' label='Nombre'/>
                {/* Reemplaza a: */}
                {/*
                    <label>Nombre</label>
                    <Field name='name' type='text' />
                    <ErrorMessage name='name' />                
                */}
                <Checkbox name='conditions'>
                    Acepta los terminos y condiciones
                </Checkbox>

                <TextInput name='lastname' label='Apellido'/>
                <TextInput name='email' label='Email'/>

                <Select  label="Profesion" name="profesion">
                    <option value="">Selecciones una profesion</option>
                    <option value="programador">Programador</option>
                    <option value="tester">Tester</option>
                    <option value="pm">PM</option>
                </Select>

                <Radio name='radio' value='valor1' label="Valor 1"/>
                <Radio name='radio' value='valor2' label="Valor 2"/>
                <Radio name='radio' value='valor3' label="Valor 3"/>
                <ErrorMessage name='radio'/>
                

                {/* <br />
                <label>Apellido</label>
                <Field name='lastname' type='text' />
                <ErrorMessage name='lastname' />
                <br />
                <label>Email</label>
                <Field name='email' type='text' />
                <ErrorMessage name='email' />
                <br /> */}

                <button type="submit">Enviar</button>
            </Form>
            

        </Formik>
    );
}

export default App;
