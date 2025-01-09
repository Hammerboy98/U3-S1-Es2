import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar() {
  return (
    <>
     
     
      <InputGroup style={{ width: "40%"}} className="my-5 mx-auto">
       
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Cerca i tuoi libri preferiti'
        />
      </InputGroup>
     
    </>
  );
}

export default SearchBar;