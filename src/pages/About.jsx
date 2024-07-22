import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <div className="bg-light p-4 rounded shadow-sm">
        <h1 className="display-5 text-center">Информация</h1>
        <p className="lead text-center">Версия приложения: <strong>1.0.0</strong></p>
        <div className="text-center mt-4">
          <a href="/" className="btn btn-primary">Вернуться на главную</a>
        </div>
      </div>
    </div>
  );
}

export default About;
