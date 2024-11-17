import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15vw;
    margin: 30vw auto;
    width: 50%;

    @media (max-width: 768px) { 
        width: 70%;
        gap: 10vw; 
    }
`;


const RightItem = styled.div`
    align-self: flex-end;

    @media (max-width: 768px) {
        align-self: stretch;
    }
`;

const LeftItem = styled.div`
	align-self: flex-start;

    @media (max-width: 768px) {
        align-self: stretch;
    }
`;

const TempCard = styled.div`
    background-color: ${({ color }) => color};
    height: 60vh;
    width: 420px;
`;


const ArticleGrid = () => {
    const temp = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5", "Text 6", "Text 7"]

    const colors = ["#8dc056", "#e1823e", "#7cc4b2", "#64bfe9", "#d1c704", "#cd9ed1"]

    return (
        <Container>
            {temp.map((temp, index) => {

                const color = colors[index % colors.length];

                return (
                    <TempCard key={index} as={index % 2 === 0 ? LeftItem : RightItem} color={color}>
                        {temp}
                    </TempCard>
                )
            })}
        </Container>
    );
}

export default ArticleGrid