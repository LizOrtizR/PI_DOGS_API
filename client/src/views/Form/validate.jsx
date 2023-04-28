const validate = (form) => {
    const errors = {};

    // validate name field
    if (/^[A-Za-z]+$/.test(form.name)) {
      errors.name = "";
    } else {
      errors.name = "Name error";
    }
    if (form.name === "") {
      errors.name = "This field can not be blank";
    }

    // validar min_height 
    if (!/^\d+$/.test(form.min_height)) {
      errors.min_height = "Please enter a valid height";
    }
    // validar max_height 
    if (!/^\d+$/.test(form.max_height)) {
      errors.max_height = "Please enter a valid height";
    }

    // validar min_weight 
    if (!/^\d+$/.test(form.min_weight)) {
      errors.min_weight = "Please enter a valid weight";
    }
    // validate max_weight field
    if (!/^\d+$/.test(form.max_weight)) {
      errors.max_weight = "Please enter a valid weight";
    }

    // validate life_span field
    if (!/^\d+$/.test(form.life_span)) {
      errors.life_span = "Please enter a valid life span";
    }
   return errors
  };
  export default validate;