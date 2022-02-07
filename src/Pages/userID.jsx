import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import MyButton from "../Components/Button/MyButton";
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";

const UsersID = () => {
  const params = useParams()
  const [user, setUser] = useState({})
  const [editing, setEditing] = useState(false)
  const initialValue = {
    name: '',
    email: '',
    username: '',
    street: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
  }
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const validate = (values) => {
    const errors = {}
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexNumber = /^(\d{3})(\d{3})(\d{4})$/
    const regexName = /^[a-zA-Z\-]+$/;

    if (values.name && !regexName.test(values.name)) {
      errors.name = 'Error'
    }
    if (values.email && !regexEmail.test(values.email)) {
      errors.email = 'Error'
    }
    if (values.username && !regexName.test(values.username)) {
      errors.username = 'Error'
    }
    if (values.street && !regexName.test(values.street)) {
      errors.street = 'Error'
    }
    if (values.city && !regexName.test(values.city)) {
      errors.city = 'Error'
    }
    if (values.zipcode && !regexNumber.test(values.zipcode)) {
      errors.zipcode = 'Error'
    }
    if (values.phone && !regexNumber.test(values.phone)) {
      errors.phone = 'Error'
    }
    if (values.website && !regexName.test(values.website)) {
      errors.website = 'Error'
    }
    return errors
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmit(true)
    console.log(JSON.stringify(formValues));
  }

  useEffect(() => {
    setFormErrors(validate(formValues));
  }, [formValues]);


  useEffect(() => {
    async function fetchUser() {
      const response = await PostService.getUserID(params.id)
      setUser(response.data)
    }

    fetchUser()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.fl}>
        <h1 style={{margin: '20px 20px'}}>Профиль пользоваетля</h1>
        <MyButton
          onClick={() => setEditing(true)}>Редактировать</MyButton>
      </div>
      <div className={styles.wrap}>
        <form
          style={{margin: '20px 20px'}}
          onSubmit={handleSubmit}
          key={user.id}>
          <div>
            <p className={styles.paragraf}>Name</p>
            {editing ? <input
                className={formErrors.name ? styles.error : styles.span}
                name='name'
                value={formValues.name}
                onChange={handleChange}
                type="text"/> :
              <input
                className={styles.span}
                disabled
                placeholder={user.name}
                type="text"/>
            }
          </div>
          <div>
            <p className={styles.paragraf}>User name</p>
            {editing ?
              <input
                name='username'
                value={formValues.username}
                onChange={handleChange}
                className={formErrors.username ? styles.error : styles.span}
                type="text"/> :
              <input
                className={styles.span}
                disabled
                placeholder={user.username}
                type="text"/>
            }
          </div>
          <div>
            <p className={styles.paragraf}>E-mail</p>
            {editing ?
              <input
                onChange={handleChange}
                value={formValues.email}
                type="email"
                name='email'
                className={formErrors.email ? styles.error : styles.span}/> :
              <input
                className={styles.span}
                disabled
                placeholder={user.email}
                type="text"/>
            }
          </div>
          <div>
            <p className={styles.paragraf}>Street</p>
            {editing ?
              <input
                name='street'
                onChange={handleChange}
                value={formValues.street}
                className={formErrors.street ? styles.error : styles.span}
                type="text"/> :
              <input
                className={styles.span}
                disabled
                placeholder={user.address?.street}
                type="text"/>
            }
          </div>
          <div>
            <p className={styles.paragraf}>City</p>
            {editing ?
              <input
                name='city'
                onChange={handleChange}
                value={formValues.city}
                className={formErrors.city ? styles.error : styles.span}
                type="text"/> :
              <input
                className={styles.span}
                disabled
                placeholder={user.address?.city}
                type="text"/>
            }
          </div>
          <div>
            <p className={styles.paragraf}>Zip code</p>
            {editing ?
              <input
                name='zipcode'
                onChange={handleChange}
                value={formValues.zipcode}
                className={formErrors.zipcode ? styles.error : styles.span}
                type="text"/> :
              <input
                className={styles.span}
                disabled
                placeholder={user.address?.zipcode}
                type="text"/>
            }
          </div>
          <div>
            <p className={styles.paragraf}>Phone</p>
            {editing ?
              <input
                name='phone'
                onChange={handleChange}
                value={formValues.phone}
                className={formErrors.phone ? styles.error : styles.span}
                type="text"/> :
              <input
                className={styles.span}
                disabled
                placeholder={user.phone}
                type="text"/>
            }
          </div>
          <div>
            <p className={styles.paragraf}>Website</p>
            {editing ?
              <input
                name='website'
                onChange={handleChange}
                value={formValues.website}
                className={formErrors.website ? styles.error : styles.span}
                type="text"/> :
              <input
                className={styles.span}
                disabled
                placeholder={user.website}
                type="text"/>
            }
          </div>
          <div>
            <p className={styles.paragraf}>Comment</p>
            <textarea name="area" id="" cols="80" rows="5"/>
          </div>
          <div>
            <button
              disabled={
                Object.values(formValues).some(item => item === "") ||
                Object.values(formErrors).some(item => item !== "")
              }
              className={styles.btn}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersID;
