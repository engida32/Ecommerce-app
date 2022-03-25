import {
    categories
} from '../data/data';
import styled from 'styled-components';
import CategoryITem from '../components/CategoryItem';
import { mobile } from '../util/responsive';
const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({
    padding: '0px', flexDirection: 'column'
})}

`
const Categories = () => {
    return (< Container >
        {
            categories.map(items => (
                <CategoryITem item={items} key={items.id} />
            ))}
    </Container>
    )
}

export default Categories