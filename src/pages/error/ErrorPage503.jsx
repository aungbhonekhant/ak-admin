import Error from "../../components/error/Error";

export default function ErrorPage503() {
    return (
        <>
            <Error
                errorNumber="503"
                errorMessage="Service Unavailable!"
            />
        </>
    )
}
