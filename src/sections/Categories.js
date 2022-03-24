import {
    categories
} from '../data/data';
import styled from 'styled-components';
import CategoryITem from '../components/CategoryItem';
const Container = styled.div`
display: flex;

`
const Categories = () => {
    return (< Container >
        {
        categories.map(items => (
            <CategoryITem item={items} key={items.id}/>
        ))}
        </Container>
        )
}

        export default Categories