import { Container, Link, TextBox } from "./StartBoard.styled";
import { useTheme } from '@mui/material';

const StartBoard = () => {
    const theme = useTheme();
    return (
        <Container>
            <TextBox theme={theme}>
                Before starting your project, it is essential
                <Link theme={theme} href="https://cs13.pikabu.ru/post_img/big/2021/01/15/0/161065904215981081.jpg"> to create a board </Link>
                to visualize and track all the necessary tasks and milestones.
                This board serves as a powerful tool to organize the workflow
                and ensure effective collaboration among team members.
            </TextBox>
        </Container>
    );
};

export default StartBoard;
