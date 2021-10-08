import React from 'react';
import { useHistory } from 'react-router';
import { ageCalculate } from '../../utils/ageCalculate';
import { storage } from '../../utils/storage';

const CardStudent = () => {
  const history = useHistory();
  const student = storage.get('student');

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h1>Карточка Студента</h1>
          {student
            ? (
              <div className="mb-4">
                <div>
                  <span className="fw-bold fs-6">Имя: </span>{student.name}
                </div>
                <div>
                  <span className="fw-bold">Фамилия: </span>{student.surname}
                </div>
                <div>
                  <span className="fw-bold">Год рождения: </span>{student.yearOfBirth} ({ageCalculate(student.yearOfBirth)})
                </div>
                <div>
                  <span className="fw-bold">Портфолио: </span><a href={student.portfolio}>{student.portfolio}</a>
                </div>
              </div>
            )
            : <div className="mt-4 mb-4">Нет Данных</div>
          }
          <button
            className="btn btn-primary"
            onClick={() => history.push('/form')}
          >
            {student ? 'Обновить' : 'Добавить'}
          </button>
        </div>
      </div>
    </div>
   );
}
 
export default CardStudent;