import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';
import { validator } from '../../utils/validator';
import { validateConfig } from '../../utils/config';
import { storage } from '../../utils/storage';
import { useHistory } from 'react-router';
import ModalUser from '../Modal/Modal';

const initialState = {
  name: '',
  surname: '',
  yearOfBirth: '',
  portfolio: ''
}

const CardForm = () => {
  const history = useHistory();
  const isStudent = storage.get('student');
  const [showModal, setShowModal] = useState(false);
  const [student, setStudent] = useState(isStudent ?  isStudent : initialState);
  const [errors, setErrors] = useState({});
  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    setErrors(validator(student, validateConfig));
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    storage.save('student', student);

    setShowModal(true); 
  }

  const handleCloseModal = () => {
    setShowModal(false);
    history.push('/');
  }

  return (
    <>
    <ModalUser show={showModal} handleClose={handleCloseModal}/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">{isStudent ? 'Редактировать' : 'Создать'}</h3>
          <form onSubmit={handleSubmit}>
            <Input
              label='Имя'
              handleChange={handleChange}
              name='name'
              id="name"
              value={student.name}
              error={errors.name}
            />
            <Input
              label='Фамилия'
              handleChange={handleChange}
              name='surname'
              id="surname"
              value={student.surname}
              error={errors.surname}
            />
            <Input
              label='Год рождения'
              type="number"
              handleChange={handleChange}
              name='yearOfBirth'
              id="yearOfBirth"
              value={student.yearOfBirth}
              error={errors.yearOfBirth}
            />
            <Input
              label='Портфолио'
              handleChange={handleChange}
              name='portfolio'
              id="portfolio"
              value={student.portfolio}
              error={errors.portfolio}
            />
            {isStudent && <button type="button" onClick={() => history.push('/')} className="btn btn-secondary me-2">Отмена</button>}
            <button
              type="submit"
              className="btn btn-primary"
            >
              {isStudent ? 'Обновить' : 'Создать'}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
   );
}
 
export default CardForm;