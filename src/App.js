import { useFormik } from 'formik'

function App() {

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',    
    },
    validate: (values) =>{
      const errors = {}
      if(!values.name){
        errors.name = 'Requerido'
      }else if (values.name.length < 5){
        errors.name = 'El nombre es muy corto'
      }

      if(!values.lastname){
        errors.lastname = 'Requerido'
      }else if (values.lastname.length < 5){
        errors.lastname = 'El apellido es muy corto'
      }

      if(!values.email){
        errors.email = 'Requerido'
      }else if (values.email.length < 5){
        errors.email = 'El email es muy corto'
      }

      return errors
    },
    onSubmit: values => console.log(values)
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name='name'
        tyle='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.errors.name && formik.touched.name ? formik.errors.name : null }
      <br/>      
      <label>Apellido</label>
      <input
        name='lastname'
        tyle='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
        />
      {formik.errors.lastname && formik.touched.lastname ? formik.errors.lastname : null }
      <br/>
      <label>Email</label>
      <input
        name='email'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email ? formik.errors.email : null }
      <br/>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
