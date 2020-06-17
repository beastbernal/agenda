import React, { useEffect }  from "react";
import { Form, Button, Icon, Segment } from "semantic-ui-react";
import {useForm} from "react-hook-form";

import '../App.css';

const FormExampleFieldError = () => {
    useEffect(() => {
        register({ name: "firstName" }, { required: true, pattern: /[A-Z][a-z]{4}/ });
        register({ name: "lastName" }, { required: true,  pattern: /[A-Za-z]{}/ });
        register({ name: "city" }, { required: true});
        register({ name: "job" }, { required: true});
        register({ name: "pass" }, { required: true, pattern: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/});
        register({ name: "repass" }, { required: true, min: 8, validate: (value) => { return value === watch('pass');} });
        register({ name: "genderSelect" }, { required: true });
        register({ name: "checkBox" }, { required: true });
    }, []);
    
    // validate: (value) => value === watch('pass')

    const {
    register,
    watch,
    errors,
    handleSubmit,
    setValue,
    triggerValidation
    } = useForm({reValidateMode:'onChange'});
    
    const onSubmit = (data, e) => {
        console.log("Submit event", e);
        alert(JSON.stringify(data));
    };

    console.log("errors", errors);


  return (
    <Segment color="blue" raised>
      <Form onSubmit={handleSubmit(onSubmit)} ref={register}>
        <Form.Group widths="equal">
          <Form.Input
            name="firstName"
            fluid
            icon={<Icon name="user" color="blue" inverted circular link />}
            iconPosition="left"
            label="Nombre"
            placeholder="Nombre"
            focus
            onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
            }}
            error={errors.firstName ? true : false}            
          />
          <span id="firstNameError" className="form-error" style={{ display: errors.firstName ? "block" : "none" }}>
             Nombre es requerido
          </span>
          <Form.Input
            name="lastName"
            fluid
            icon={<Icon name="user" color="blue" inverted circular link />}
            iconPosition="left"
            label="Apellido"
            placeholder="Apellido"
            onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
            }}
            error={errors.lastName ? true : false}
          />     
          <span id="lastNameError" className="form-error" style={{ display: errors.lastName ? "block" : "none" }}>
             Apellido es requerido
          </span>     
          <Form.Input
            name="city"
            fluid
            icon={<Icon name="location arrow" color="blue" inverted circular link />}
            iconPosition="left"
            label="Ciudad"
            placeholder="Ciudad"
            type="text"
            onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
            }}
            error={errors.city ? true : false}
          />
          <span id="ciudadError" className="form-error" style={{ display: errors.city ? "block" : "none" }}>
             Ciudad es requerido
          </span>
          <Form.Input
            name="job"
            id="job"
            fluid
            icon={<Icon name="location arrow" color="blue" inverted circular link />}
            iconPosition="left"
            label="Profesión"
            placeholder="Profesión"
            type="text"
            onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
            }}
            error={errors.job ? true : false}
          />
          <span id="jobError" className="form-error" style={{ display: errors.job ? "block" : "none" }}>
            Profesión es requerido
          </span>
          <Form.Input
            name="entryDate"
            id="entryDate"
            fluid
            icon={<Icon name="calendar" color="blue" inverted circular link />}
            iconPosition="left"
            label="Fecha de Ingreso"
            placeholder="Fecha de Ingreso"
            type="date"
            onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
            }}
            error={errors.job ? true : false}
          />
          <span id="entryError" className="form-error" style={{ display: errors.entryDate ? "block" : "none" }}>
            Fecha de Ingreso es requerido
          </span>
        </Form.Group>
        <Button type="submit" animated="vertical" color="instagram">
          <Button.Content hidden color="instagram">
            <Icon name="send" color="yellow" />
          </Button.Content>
          <Button.Content visible>
            Enviar <Icon name="send" />
          </Button.Content>
        </Button>
      </Form>
    </Segment>
  );
  // }
}

export default FormExampleFieldError;
