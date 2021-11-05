import { useField } from "formik"

const Checkbox = ({ children, ...props}) => {

    const [field, meta] = useField({ ...props, type: 'checkbox'})

    return(
        <div>
            <label>
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error? meta.error : null}
        </div>
    )
}

export default Checkbox