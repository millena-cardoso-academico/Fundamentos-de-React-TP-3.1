import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
  return <h1>Olá, {name}!</h1>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;