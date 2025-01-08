import { Alert } from "react-bootstrap"

const Welcome=function(){
    return(
        <>
     <Alert variant="danger">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <h1>
        Ettore&apos;s Book Store
      </h1>
      <hr />
      <h2 className="mb-0">
        Buy All What You Want
      </h2>
    </Alert>
    </>
    )
}
export default Welcome