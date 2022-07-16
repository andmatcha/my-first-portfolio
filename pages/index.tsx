import { css } from "@emotion/react";

const index = () => {
    return (
        <div css={styles.welcome}>
            Welcome to my portfolio!
        </div>
    );
}

export default index;

const styles = {
    welcome: css`
        font-size: 4rem;
        font-weight: 600;
        color: #4E979C;
    `
}
