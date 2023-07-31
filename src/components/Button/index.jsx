import { Container } from "./styles";

import { Loading } from "../Loading";

export function Button({title, onClick, loading = false}) {
    return(
        <Container type="button" onClick={onClick}>
            {loading ? <Loading/> : title}
        </Container>
    );
}