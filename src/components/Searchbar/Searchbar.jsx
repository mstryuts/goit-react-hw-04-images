import { useState } from 'react';
import css from '../Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [searchRequest, setSearchRequest] = useState('');

  const handleSearchRequest = e => {
    setSearchRequest(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchRequest.trim() === '') {
      alert('empty');
      return;
    }

    onSubmit(searchRequest);
    setSearchRequest('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span>
        </button>

        <input
          onChange={handleSearchRequest}
          value={searchRequest}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="search"
        />
      </form>
    </header>
  );
};

// class Searchbar extends Component {
//   state = {
//     searchRequest: '',
//   };

//   handleSearchRequest = e => {
//     this.setState({ searchRequest: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.searchRequest.trim() === '') {
//       alert('empty');
//       return;
//     }

//     this.props.onSubmit(this.state.searchRequest);
//     this.setState({ searchRequest: '' });
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.form} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.button}>
//             <span className={css.label}>Search</span>
//           </button>

//           <input
//             onChange={this.handleSearchRequest}
//             value={this.state.searchRequest}
//             className={css.input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="search"
//           />
//         </form>
//       </header>
//     );
//   }
// }

export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
