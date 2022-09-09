import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import loadingImage from '../../../public/images/loading.gif';
import { useAuth } from '../../data/hook/useAuth';

interface ForceAuthProps {
  children: any
}

const ForceAuth: FC<ForceAuthProps> = ({children}) => {
  const router = useRouter();
  const { loading, user } = useAuth();

  const renderPage = () => {
    return (
      <>
        {children}
      </>
    )
  }

  const renderLoading = () => {
    return (
      <div className="flex justify-center items-center h-screen">
          <Image src={loadingImage} alt="loading" />
      </div>
    )
  }

  if(!loading && user?.email) {
    return renderPage()
  } else if(loading) {
    renderLoading()
  } else {
    router.push('/authentication');
    return null
  }
}

export default ForceAuth;