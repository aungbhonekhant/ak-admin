import Error from "../../components/error/Error";

export default function ErrorPage500() {
    return (
        <>
            <Error
                errorNumber="500"
                errorMessage="Internal Server Error!"
            />
        </>
    )
}