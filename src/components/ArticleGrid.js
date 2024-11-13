import styled from "styled-components";

const RightItem = styled.div`
    float: right;
`
const LeftItem = styled.div`
	float: left;
`

const ArticleGrid = () => {
    const temp = ["Text", "Text", "Text", "Text"]

    return (
        <div>
            {temp.map((temp, index) => {
                if (index % 2 == 0) {
                    return <LeftItem>{temp}</LeftItem>
                }
                else {
                    return <RightItem>{temp}</RightItem>
                }
            })}
        </div>
    );
}

export default ArticleGrid