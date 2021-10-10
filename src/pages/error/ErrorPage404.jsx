import Error from "../../components/error/Error";

export default function ErrorPage404() {
    return (
        <> 
            <Error
                errorNumber="404"
                errorMessage="The page you requested was not found!"
            />
        </>
    )
}
