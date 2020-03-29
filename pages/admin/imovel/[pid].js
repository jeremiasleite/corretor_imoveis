import { useRouter } from 'next/router'
import Layout from '../../../components/admin/Layout'
import Titulo from '../../../components/Titulo'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
      <Layout>
          <Titulo titulo={'Editar Imóvel'}></Titulo>
        <p>Post: {pid}</p>
      </Layout>
    
  )
}

export default Post