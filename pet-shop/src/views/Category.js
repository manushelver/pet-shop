import { useParams } from "react-router-dom"
import { Layout } from "../components/Layout"
import ItemListContainer from "../components/ItemListContainer"

export const CategoryView = () => {
    // const {category} = useParams()
    // const categories = item.filter((product) => product.category === category);

    return (
        <Layout>
            <ItemListContainer></ItemListContainer>
        </Layout>
    )
}